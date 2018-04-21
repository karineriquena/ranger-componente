export function convertToBoolean(val: any): boolean {
    if (typeof val === 'string') {
      val = val.toLowerCase().trim();
      return (val === 'true' || val === 'on' || val === '');
    }
  
    if (typeof val === 'number') {
      return val === 1;
    }
  
    return !!val;
  }

  export function requiredFailed(required: boolean, disabled: boolean, value: string | Array<any>) {
    const valid = ((typeof value === 'string' && value) || (typeof value === 'object' && value && value.length));
    return (required && !disabled && !valid);
  }