function scopedClassMaker(prefix: string) {
  return function x(name: string) {
    return [prefix, name].filter(Boolean).join('-')
  }
}

function buttonClassNames (b: any, t:any) {
  let buttonClasses = {
    'my-dialog-button': true,
    'my-dialog-button-default': b === 'default',
    'my-dialog-button-dashed': b === 'dashed',
    'my-dialog-button-primary': b === 'primary',
    'my-dialog-button-danger': b === 'danger',
    'my-dialog-button-small': t === 'small',

  }
  return buttonClasses
}

export {scopedClassMaker, buttonClassNames}
