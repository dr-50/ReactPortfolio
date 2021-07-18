import React, { useState } from "react";
import { validateEmail } from '../utils/helpers'

function Contact() {
  const [formState, setFormState]=useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!errorMessage) {
      console.log('Submit form', formState);
    }
  }

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if(!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage('');
      }
    }
    if(!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value});
      console.log('Handle Form', formState);
    }
  }

  return (
    <section>
      <h1>Contact Page</h1>
      <form className="email-form" onSubmit={handleSubmit}>
        <div className="email-name">
            <label className='email-name-label'>Name: </label>
            <input className='email-name-input' type="text" name="name" defaultValue={name} onBlur={handleChange}></input>
        </div>
        <div className="email">
          <label className="email-label">Email: </label>
          <input className="email-input" type="email" name="email" defaultValue={email} onBlur={handleChange}></input>
        </div>
        <div className="message">
          <label className="message-label">Message: </label>
          <textarea className="message-input" name="message" defaultValue={message} onBlur={handleChange}></textarea>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text"> {errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit" className="messageSubmitBtn">Submit</button>
      </form>
    </section>
  );
}
export default Contact;
