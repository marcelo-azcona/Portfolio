import { useState, useRef, ChangeEvent, FormEvent, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import FormInput from '../UI/form-input/FormInput';
import TextInput from '../UI/form-input/TextInput';
import './ContactForm.styles.scss';
import ButtonSubmit from '../UI/buttons/ButtonSubmit';

const ContactForm = () => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [submitBtnAnimationClass, setSubmitBtnAnimationClass] =
    useState('submit__btn');

  const formRef = useRef(
    null
  ) as React.MutableRefObject<HTMLFormElement | null>;

  useEffect(() => {
    const delay = 4000;

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

    setTimeout(() => {
      setSubmitBtnAnimationClass('submit__btn error');
    }, 2000);

    if (process.env.REACT_APP_SERVICE_ID && process.env.REACT_APP_TEMPLATE_ID) {
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
            setSubmitBtnAnimationClass('submit__btn error');
          }
        );
    }
  };

  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setContactName(e.target.value);
  };
  const changeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setContactEmail(e.target.value);
  };
  const changeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContactMessage(e.target.value);
  };

  return (
    <>
      <form
        ref={formRef}
        onSubmit={onSubmitHandler}
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <div className="form">
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
      </form>
    </>
  );
};

export default ContactForm;
