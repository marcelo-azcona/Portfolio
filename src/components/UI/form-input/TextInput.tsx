import { TextareaHTMLAttributes } from 'react';
import './TextInput.styles.scss';

type TextInputProps = {
  label: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextInput = ({ label, ...otherProps }: TextInputProps) => {
  return (
    <div className="form__textarea-container">
      <textarea
        className={
          otherProps.value
            ? 'textarea-input textarea-input--valid'
            : 'textarea-input'
        }
        {...otherProps}
      />
      {label && (
        <label
          className={`${
            otherProps.value &&
            typeof otherProps.value === 'string' &&
            otherProps.value.length
              ? 'shrink'
              : ''
          } textarea-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default TextInput;
