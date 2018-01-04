export const required = (value) => {
  if (typeof value !== 'undefined' && value !== '') {
    return undefined;
  }
  return 'This is required';
};

export const requiredBoolean = (value) => {
  if (value) {
    return undefined;
  }
  return 'This is required';
};

export const requiredIf = (otherName, otherValue) => (value, allValues) => {
  if (allValues[otherName] === otherValue) {
    if (typeof value === 'undefined' || value === '') {
      return 'This is required';
    }
  }
  return undefined;
};

export const maxLength = max => (value) => {
  if (value && value.length > max) {
    return `Must be ${max} characters or less`;
  }
  return undefined;
};

export const minLength = min => (value) => {
  if (value && value.length < min) {
    return `Must be ${min} characters or more`;
  }
  return undefined;
};

export const minValue = min => (value) => {
  if (value && value < min) {
    return `Must be at least ${min}`;
  }
  return undefined;
};

export const maxValue = max => (value) => {
  if (value && value > max) {
    return `Must be less than ${max}`;
  }
  return undefined;
};

export const email = (value) => {
  if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
  return undefined;
};

export const alphaNumeric = (value) => {
  if (value && /[^a-zA-Z0-9 ]/i.test(value)) {
    return 'Only alphanumeric characters';
  }
  return undefined;
};
