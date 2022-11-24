function scopedClassMaker(prefix) {
  return function x(name) {
    return [prefix, name].filter(Boolean).join('-');
  };
}

export { scopedClassMaker };