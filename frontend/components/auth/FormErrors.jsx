import React from 'react';

const FormErrors = ({errors}) => {
  if (errors.length > 0) {
    return (
      <p>{errors.join(', ')}</p>
    );
  } else {
    return (
      <p></p>
    )
  }
};

export default FormErrors;
