import React, { Fragment, useState } from 'react';
import Button from '../Button';
import { scopedClassMaker, buttonClassNames } from '../types/classes';
import classnames from 'classnames';
import './index.less';
import '../style/base.less';

export type DialogType = 'default' | 'dashed' | 'primary' | 'danger';
export type DialogOnSize = 'small' | 'default';
export type DialogSize = 'small' | 'medium' | 'large';

export interface DialogProps {
  asyncOpen?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  title?: any;
  content?: any;
  onText?: string;
  okType?: DialogType;
  cancelText?: string;
  cancelType?: DialogType;
  type?: DialogType;
  onSize?: DialogOnSize;
  cancelSize?: DialogOnSize;
  style?: React.CSSProperties;
  className?: string;
  maskClosable?: boolean;
  onDialogSize?: DialogSize;
  /**
   * 点击确认按钮的回调
   */
  onConfirm?: (e: React.MouseEvent) => any;
  /**
   * 点击取消按钮的回调
   */
  onCancel?: (e: React.MouseEvent) => any;
  /**
   * 点击蒙版时的回调
   */
  onMask?: (e: React.MouseEvent) => any;
  /**
   * 点击主按钮时的回调
   */
  onDialog?: (e: React.MouseEvent) => any;
}

const scopedClass = scopedClassMaker('hs-dialog');
const sc = scopedClass;

const Dialog: React.FC<DialogProps> = (props) => {
  const [open, setOpen] = useState<Boolean>(false);
  const { children, style, onConfirm, onCancel, onMask, onDialog } = props;
  const {
    onText,
    cancelText,
    okType,
    cancelType,
    onSize,
    cancelSize,
    maskClosable,
    type,
    title,
    onDialogSize,
    content,
    disabled,
  } = props;

  const onTextClick = (event: React.MouseEvent) => {
    if (onConfirm) {
      onConfirm(event);
    }
    if (open) {
      setOpen(!open);
    }
  };

  const cancelTextOnClick = (event: React.MouseEvent) => {
    if (onCancel) {
      onCancel(event);
    }
    if (open) {
      setOpen(!open);
    }
  };

  const onMaskOnclick = (event: React.MouseEvent) => {
    if (onMask) {
      onMask(event);
    }
    if (open) {
      setOpen(!open);
    }
  };

  const onMaskClosable = (event: React.MouseEvent) => {
    if (onMask) {
      onMask(event);
    }
  };

  const dialogClick = (event: React.MouseEvent) => {
    setOpen(!open);
    if (onDialog) {
      onDialog(event);
    }
  };

  return (
    <>
      <Button size={onDialogSize} disabled={disabled} type={type} onClick={dialogClick}>
        {' '}
        {children}{' '}
      </Button>
      {open ? (
        <Fragment>
          {maskClosable ? (
            <div className={sc('mask')} onClick={onMaskOnclick}></div>
          ) : (
            <div className={sc('mask')} onClick={onMaskClosable}></div>
          )}
          <div className={sc('')} style={style}>
            <header className={sc('tit')}>{title}</header>
            <nav className={sc('con')}>{content}</nav>
            <footer className={sc('foo')}>
              {cancelText ? (
                <button
                  onClick={cancelTextOnClick}
                  className={classnames(buttonClassNames(cancelType, cancelSize))}
                >
                  {cancelText}
                </button>
              ) : null}{' '}
              {onText ? (
                <button
                  onClick={onTextClick}
                  className={classnames(buttonClassNames(okType, onSize))}
                >
                  {onText}
                </button>
              ) : null}
            </footer>
          </div>
        </Fragment>
      ) : null}
    </>
  );
};

Dialog.defaultProps = {
  disabled: false,
  cancelText: '取消',
  okType: 'primary',
  title: '标题',
  content: '内容',
  cancelType: 'default',
  onSize: 'default',
  cancelSize: 'default',
  maskClosable: false,
  type: 'primary',
};

export default Dialog;
