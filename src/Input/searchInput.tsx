import React, { useState, forwardRef } from 'react';
import { classes } from '../utils';
import { SearchSIcon } from '../icon/Icon';
import { Icon } from '../icon/Icon';
import Input from '../Input';

export interface SearchProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  enterButton?: boolean | string | React.ReactNode;
  onSearch?: (value: string) => any;
  onChange?: React.ChangeEventHandler;
  className?: string;
  style?: React.CSSProperties;
  derivedValue: string;
}

export interface SearchState {
  derivedValue: string;
}

const componentName = 'Search';

const Search: React.FC<SearchProps> = (props) => {
  const [derivedValue, setDerivedValue] = useState('');
  const getDerivedStateFromProps = (nextProps: SearchProps, prevState: SearchState) => {
    const { value } = nextProps;
    const { derivedValue } = prevState;
    if ('value' in nextProps && value !== derivedValue) {
      return { derivedValue: value };
    }
    return null;
  };

  let inputInstance: any;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setDerivedValue(e.target.value);
    const { onChange } = props;
    if (onChange) {
      onChange(e);
    }
  };

  const handleSearch = () => {
    const { onSearch, derivedValue } = props;
    if (onSearch) {
      onSearch(derivedValue);
    }
  };

  const saveInputInstance = (instance: any) => {
    inputInstance = instance;
  };

  const focus = () => {
    inputInstance.focus();
  };

  const blur = () => {
    inputInstance.blur();
  };

  const cn = componentName;
  const { enterButton, placeholder, className, style } = props;
  return (
    <Input
      ref={saveInputInstance}
      value={derivedValue}
      className={classes(cn, ['search', className], {
        'enter-button': !!enterButton,
      })}
      style={style}
      onChange={handleChange}
      onPressEnter={handleSearch}
      suffix={
        (enterButton === false && (
          <Icon name="search" style={{ cursor: 'pointer' }} size={18} onClick={handleSearch} />
        )) ||
        null
      }
      addonAfter={
        enterButton ? (
          <div className={classes(cn, 'enter-button')} onClick={handleSearch}>
            {enterButton === true ? <Icon name="search" size={20} /> : enterButton}
          </div>
        ) : null
      }
      placeholder={placeholder}
    />
  );
};

Search.defaultProps = {
  placeholder: '',
  enterButton: false,
};

export default Search;
