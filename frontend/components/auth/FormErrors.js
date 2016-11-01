import merge from 'lodash/merge';

export const formInvalid = function() {
  let invalid = false;
  const inputs = Object.keys(this.state);
  for (let i = 0; i < inputs.length; i++) {
    let errors = Object.keys(this.state[inputs[i]].errors);
    for (let j = 0; j < errors.length; j++) {
      if (this.state[inputs[i]].errors[errors[j]].present) invalid = true;
    }
  }
  return invalid;
};


export const getErrors = function(field) {
  const errors = this.state[field].errors;
  let messages = [];
  if (this.state[field].touched) {
    Object.keys(errors).forEach(error => {
      if (errors[error].present) messages.push(errors[error].message);
    });
  }
  return messages.join(', ');
};

export const setTouched = function(field) {
  let newState = merge({}, this.state);
  return () => {
    newState[field].touched = true;
    this.setState(newState, () => setErrors.call(this, field));
  };
};

export const setErrors = function(field) {
  let newState = merge({}, this.state);
  newState[field].errors.required.present = false;
  if (this.state[field].value.length === 0) {
    newState[field].errors.required.present = true;
  }
  this.setState(newState);
};
