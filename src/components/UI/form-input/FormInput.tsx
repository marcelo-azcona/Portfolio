import { InputHTMLAttributes } from 'react';
import { Path, UseFormRegister, FieldErrorsImpl } from 'react-hook-form';
import './FormInput.styles.scss';

type IFormValues = {
  'Your name': string;
  'Your Email': string;
};

// type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;
type InputProps = {
  label: string;
  register: UseFormRegister<IFormValues>;
  errors: Partial<FieldErrorsImpl<IFormValues>>;
  value: string;
  name: 'Your name' | 'Your Email';
  type: string;
  touched: boolean | undefined;
};

const FormInput = ({
  label,
  register,
  errors,
  value,
  name,
  type,
  touched,
}: InputProps) => {
  console.log(touched);

  return (
    <div className="form__container">
      <input
        type={type}
        className={
          touched && !errors[name]
            ? 'form-input form-input--valid'
            : errors[name]
            ? 'form-input form-input--invalid'
            : 'form-input'
        }
        {...register(name)}
      />
      {label && (
        <label
          className={`${
            value && typeof value === 'string' && value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}

      {errors[name] && (
        <span className="form__error-message">{errors[name]?.message}</span>
      )}
    </div>
  );
};

// const FormInput = ({ label, ...otherProps }: FormInputProps) => {
//   return (
//     <div className="form__container">
//       <input className="form-input" {...otherProps} />
//       {label && (
//         <label
//           className={`${
//             otherProps.value &&
//             typeof otherProps.value === 'string' &&
//             otherProps.value.length
//               ? 'shrink'
//               : ''
//           } form-input-label`}
//         >
//           {label}
//         </label>
//       )}
//     </div>
//   );
// };

export default FormInput;
