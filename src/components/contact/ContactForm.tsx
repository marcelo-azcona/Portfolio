import { useState, useRef, ChangeEvent, FormEvent, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import FormInput from '../UI/form-input/FormInput';
import TextInput from '../UI/form-input/TextInput';
import ButtonSubmit from '../UI/buttons/ButtonSubmit';
import './ContactForm.styles.scss';

const ContactForm = () => {
  // const [contactName, setContactName] = useState('');
  // const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [submitBtnAnimationClass, setSubmitBtnAnimationClass] =
    useState('submit__btn');

  // const formRef = useRef(
  //   null
  // ) as React.MutableRefObject<HTMLFormElement | null>;
  // const ref = useRef(null);
  // // const isInView = useInView(ref, { once: true });
  // const isInView = useInView(ref);

  // useEffect(() => {
  //   const delay = 4000;

  //   let submitBtnAnimationTimer = setTimeout(() => {
  //     setSubmitBtnAnimationClass('submit__btn');
  //   }, delay);

  //   return () => {
  //     clearTimeout(submitBtnAnimationTimer);
  //   };
  // }, [submitBtnAnimationClass]);

  // const onSubmitHandler = (e: FormEvent) => {
  //   e.preventDefault();
  //   setSubmitBtnAnimationClass('submit__btn loading');

  //   setTimeout(() => {
  //     setSubmitBtnAnimationClass('submit__btn error');
  //   }, 2000);

  //   if (process.env.REACT_APP_SERVICE_ID && process.env.REACT_APP_TEMPLATE_ID) {
  //     emailjs
  //       .sendForm(
  //         process.env.REACT_APP_SERVICE_ID,
  //         process.env.REACT_APP_TEMPLATE_ID,
  //         formRef.current ? formRef.current : '',
  //         process.env.REACT_APP_USER_ID
  //       )
  //       .then(
  //         (result) => {
  //           setSubmitBtnAnimationClass('submit__btn success');
  //         },
  //         (error) => {
  //           setSubmitBtnAnimationClass('submit__btn error');
  //         }
  //       );
  //   }
  // };

  // const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   setContactName(e.target.value);
  // };
  // const changeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   setContactEmail(e.target.value);
  // };
  const changeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContactMessage(e.target.value);
  };

  type IFormValues = {
    'Your name': string;
    'Your Email': string;
  };

  const schema = yup
    .object({
      'Your name': yup.string().required(),
      'Your Email': yup.string().email().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
  } = useForm<IFormValues>({
    mode: 'all', //To trigger all types of validation at the same time
    resolver: yupResolver(schema),
  });

  const nameValue = watch('Your name');
  const emailValue = watch('Your Email');

  const onSubmit = (data: IFormValues) => console.log(data);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="Your name"
        register={register}
        errors={errors}
        name="Your name"
        type="text"
        value={nameValue}
        touched={touchedFields['Your name']}
      />

      <FormInput
        label="E-mail"
        register={register}
        errors={errors}
        name="Your Email"
        type="email"
        value={emailValue}
        touched={touchedFields['Your Email']}
      />

      <TextInput
        label="Write me a message here"
        name="user_message"
        onChange={changeMessageHandler}
        value={contactMessage}
      ></TextInput>

      <ButtonSubmit className={submitBtnAnimationClass}></ButtonSubmit>
    </form>
  );

  {
    /* <form
        ref={formRef}
        onSubmit={onSubmitHandler}
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <div className={isInView ? 'form' : 'form--off'} ref={ref}>
          <FormInput
            value={contactName}
            label="Your name"
            type="text"
            name="user_name"
            onChange={changeNameHandler}
            required
          ></FormInput>

          <FormInput
            label="Your email"
            type="email"
            name="user_email"
            onChange={changeEmailHandler}
            value={contactEmail}
            required
          ></FormInput>

          <TextInput
            label="Write me a message here"
            name="user_message"
            onChange={changeMessageHandler}
            value={contactMessage}
            required
          ></TextInput>

          <ButtonSubmit className={submitBtnAnimationClass}></ButtonSubmit>
        </div>
      </form> */
  }
  //   </>
  // );
};

export default ContactForm;
