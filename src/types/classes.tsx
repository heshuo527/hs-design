function scopedClassMaker(prefix: string) {
  return function x(name: string) {
    return [prefix, name].filter(Boolean).join('-')
  }
}

function buttonClassNames (b: any, t:any) {
  let buttonClasses = {
    'hs-dialog-button': true,
    'hs-dialog-button-default': b === 'default',
    'hs-dialog-button-dashed': b === 'dashed',
    'hs-dialog-button-primary': b === 'primary',
    'hs-dialog-button-danger': b === 'danger',
    'hs-dialog-button-small': t === 'small',

  }
  return buttonClasses
}

export {scopedClassMaker, buttonClassNames}
