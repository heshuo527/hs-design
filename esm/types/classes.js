function scopedClassMaker(prefix) {
  return function x(name) {
    return [prefix, name].filter(Boolean).join('-');
  };
}

function buttonClassNames(b, t) {
  var buttonClasses = {
    'hs-dialog-button': true,
    'hs-dialog-button-default': b === 'default',
    'hs-dialog-button-dashed': b === 'dashed',
    'hs-dialog-button-primary': b === 'primary',
    'hs-dialog-button-danger': b === 'danger',
    'hs-dialog-button-small': t === 'small'
  };
  return buttonClasses;
}

export { scopedClassMaker, buttonClassNames };