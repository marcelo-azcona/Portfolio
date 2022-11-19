import { InputHTMLAttributes } from 'react';
import './FormInput.styles.scss';

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput = ({ label, ...otherProps }: FormInputProps) => {
  return (
    <div className="form__container">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value &&
            typeof otherProps.value === 'string' &&
            otherProps.value.length
              ? 'shrink'
              : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
