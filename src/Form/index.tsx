import React, { createContext, FormEvent, ReactNode, useContext, useState, useCallback, useRef, useEffect } from 'react';
import classnames from 'classnames';
import './index.less';

export interface ValidationRule {
  required?: boolean;
  message?: string;
  pattern?: RegExp;
  validator?: (value: any) => boolean | string | Promise<boolean | string>;
  min?: number;
  max?: number;
}

export interface FormProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  layout?: 'horizontal' | 'vertical' | 'inline';
  onFinish?: (values: any) => void;
  onFinishFailed?: (values: any, errors: Record<string, string>) => void;
}

export interface FormItemProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  name?: string;
  rules?: ValidationRule[];
  trigger?: 'change' | 'blur';
}

interface FormContextValue {
  registerField: (name: string, rules?: ValidationRule[]) => void;
  unregisterField: (name: string) => void;
  validateField: (name: string, value: any) => Promise<string | null>;
  getFieldValue: (name: string) => any;
  setFieldValue: (name: string, value: any) => void;
  values: Record<string, any>;
  errors: Record<string, string>;
}

const FormContext = createContext<FormContextValue | null>(null);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a Form');
  }
  return context;
};

export const Form: React.FC<FormProps> = (props) => {
  const {
    children,
    className,
    style,
    layout = 'horizontal',
    onFinish,
    onFinishFailed,
  } = props;

  const [values, setValues] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fieldRulesRef = useRef<Record<string, ValidationRule[]>>({});

  const classes = classnames('hs-form', className, {
    [`hs-form-${layout}`]: true,
  });

  const registerField = useCallback((name: string, rules?: ValidationRule[]) => {
    if (rules) {
      fieldRulesRef.current[name] = rules;
    }
  }, []);

  const unregisterField = useCallback((name: string) => {
    delete fieldRulesRef.current[name];
    setValues((prev) => {
      const newValues = { ...prev };
      delete newValues[name];
      return newValues;
    });
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  }, []);

  const validateField = useCallback(async (name: string, value: any): Promise<string | null> => {
    const rules = fieldRulesRef.current[name];
    if (!rules) return null;

    for (const rule of rules) {
      // Required validation
      if (rule.required && (!value || (typeof value === 'string' && !value.trim()))) {
        return rule.message || `请输入${name}`;
      }

      // Pattern validation
      if (rule.pattern && value && !rule.pattern.test(String(value))) {
        return rule.message || `格式不正确`;
      }

      // Min length validation
      if (rule.min && typeof value === 'string' && value.length < rule.min) {
        return rule.message || `最少${rule.min}个字符`;
      }

      // Max length validation
      if (rule.max && typeof value === 'string' && value.length > rule.max) {
        return rule.message || `最多${rule.max}个字符`;
      }

      // Custom validator
      if (rule.validator) {
        const result = rule.validator(value);
        if (result instanceof Promise) {
          const valid = await result;
          if (valid !== true) {
            return typeof valid === 'string' ? valid : rule.message || '验证失败';
          }
        } else if (result !== true) {
          return typeof result === 'string' ? result : rule.message || '验证失败';
        }
      }
    }

    return null;
  }, []);

  const getFieldValue = useCallback((name: string) => {
    return values[name];
  }, [values]);

  const setFieldValue = useCallback((name: string, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newValues: any = {};
    const newErrors: Record<string, string> = {};
    let isValid = true;

    formData.forEach((value, key) => {
      newValues[key] = value;
    });

    // Validate all fields
    for (const name of Object.keys(fieldRulesRef.current)) {
      const error = await validateField(name, newValues[name]);
      if (error) {
        newErrors[name] = error;
        isValid = false;
      }
    }

    setValues(newValues);
    setErrors(newErrors);

    if (isValid && onFinish) {
      onFinish(newValues);
    } else if (!isValid && onFinishFailed) {
      onFinishFailed(newValues, newErrors);
    }
  };

  const contextValue: FormContextValue = {
    registerField,
    unregisterField,
    validateField,
    getFieldValue,
    setFieldValue,
    values,
    errors,
  };

  return (
    <FormContext.Provider value={contextValue}>
      <form className={classes} style={style} onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export const FormItem: React.FC<FormItemProps> = (props) => {
  const {
    children,
    className,
    style,
    label,
    name,
    rules,
    trigger = 'change',
  } = props;

  const { registerField, unregisterField, validateField, errors, setFieldValue, values } = useFormContext();
  const [localError, setLocalError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (name) {
      registerField(name, rules);
    }
    return () => {
      if (name) {
        unregisterField(name);
      }
    };
  }, [name, rules, registerField, unregisterField]);

  useEffect(() => {
    if (name && errors[name]) {
      setLocalError(errors[name]);
    } else {
      setLocalError(null);
    }
  }, [name, errors]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (name) {
      setFieldValue(name, value);
    }
    if (touched && rules) {
      const error = await validateField(name!, value);
      setLocalError(error);
    }
  };

  const handleBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched(true);
    if (name && rules) {
      const value = (e.target as HTMLInputElement).value;
      const error = await validateField(name, value);
      setLocalError(error);
    }
  };

  const handleFocus = () => {
    // Clear error on focus
  };

  if (!children) {
    return (
      <div className={classnames('hs-form-item', className)} style={style}>
        {label && <label className="hs-form-item-label">{label}</label>}
        <div className="hs-form-item-control-wrapper">
          <div className="hs-form-item-control" />
          {localError && <div className="hs-form-item-error">{localError}</div>}
        </div>
      </div>
    );
  }

  const childArray = React.Children.toArray(children);
  if (childArray.length !== 1) {
    return (
      <div className={classnames('hs-form-item', className)} style={style}>
        {label && <label className="hs-form-item-label">{label}</label>}
        <div className="hs-form-item-control-wrapper">
          <div className="hs-form-item-control">{children}</div>
          {localError && <div className="hs-form-item-error">{localError}</div>}
        </div>
      </div>
    );
  }

  const child = childArray[0] as React.ReactElement;
  const childWithHandlers = React.cloneElement(child, {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      handleChange(e);
      if (child.props.onChange) {
        child.props.onChange(e);
      }
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
      handleBlur(e);
      if (child.props.onBlur) {
        child.props.onBlur(e);
      }
    },
    onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
      handleFocus();
      if (child.props.onFocus) {
        child.props.onFocus(e);
      }
    },
  });

  const classes = classnames('hs-form-item', className, {
    'has-error': localError,
  });

  return (
    <div className={classes} style={style}>
      {label && <label className="hs-form-item-label">{label}</label>}
      <div className="hs-form-item-control-wrapper">
        <div className="hs-form-item-control">{childWithHandlers}</div>
        {localError && <div className="hs-form-item-error">{localError}</div>}
      </div>
    </div>
  );
};

export default Form;
