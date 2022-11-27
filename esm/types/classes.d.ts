declare function scopedClassMaker(prefix: string): (name: string) => string;
declare function buttonClassNames(b: any, t: any): {
    'hs-dialog-button': boolean;
    'hs-dialog-button-default': boolean;
    'hs-dialog-button-dashed': boolean;
    'hs-dialog-button-primary': boolean;
    'hs-dialog-button-danger': boolean;
    'hs-dialog-button-small': boolean;
};
export { scopedClassMaker, buttonClassNames };
