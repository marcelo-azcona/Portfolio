import { useState, useRef, ChangeEvent, FormEvent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useInView } from 'framer-motion';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import FormInput from '../UI/form-input/FormInput';
import TextInput from '../UI/form-input/TextInput';
import ButtonSubmit from '../UI/buttons/ButtonSubmit';
import './ContactForm.styles.scss';

type IFormValues = {
  'Your name': string;
  'Your Email': string;
};

const ContactForm = () => {
  const [contactMessage, setContactMessage] = useState('');
  const [submitBtnAnimationClass, setSubmitBtnAnimationClass] =
    useState('submit__btn');

  const formRef = useRef(
    null
  ) as React.MutableRefObject<HTMLFormElement | null>;

  const isInView = useInView(formRef, { once: true });

  useEffect(() => {
    const delay = 6000;

    let submitBtnAnimationTimer = setTimeout(() => {
      setSubmitBtnAnimationClass('submit__btn');
    }, delay);

    return () => {
      clearTimeout(submitBtnAnimationTimer);
    };
  }, [submitBtnAnimationClass]);

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    setSubmitBtnAnimationClass('submit__btn loading');

    if (process.env.REACT_APP_SERVICE_ID && process.env.REACT_APP_TEMPLATE_ID) {
      console.log(formRef.current);
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          formRef.current ? formRef.current : '',
          process.env.REACT_APP_USER_ID
        )
        .then(
          (result) => {
            setSubmitBtnAnimationClass('submit__btn success');
          },
          (error) => {
            console.log(error);
            setSubmitBtnAnimationClass('submit__btn error');
          }
        );
    }
  };

  const changeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContactMessage(e.target.value);
  };

  const schema = yup
    .object({
      'Your name': yup.string().required(),
      'Your Email': yup.string().email().required(),
    })
    .required();

  const {
    register,
    watch,
    formState: { errors, touchedFields },
  } = useForm<IFormValues>({
    mode: 'all', //To trigger all types of validation at the same time
    resolver: yupResolver(schema),
  });

  const nameValue = watch('Your name');
  const emailValue = watch('Your Email');

  return (
    <form
      className={isInView ? 'form' : 'form form--off'}
      ref={formRef}
      onSubmit={onSubmitHandler}
    >
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
};

export default ContactForm;
