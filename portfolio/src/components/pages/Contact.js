import React from "react";
function Contact() {
  return (
    <section>
      <h1>Contact Page</h1>
      <div className="email-form">
        <div className="email-name">
            <label className='email-name-label'>Name: </label>
            <input className='email-name-input'></input>
        </div>
        <div className="email">
          <label className="email-label">Email: </label>
          <input className="email-input"></input>
        </div>
        <div className="message">
          <label className="message-label">Message: </label>
          <textarea className="message-input"></textarea>
        </div>
        <button type="submit" className="messageSubmitBtn">Submit</button>
      </div>
    </section>
  );
}
export default Contact;
