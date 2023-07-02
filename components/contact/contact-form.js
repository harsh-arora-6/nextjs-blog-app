import { useState } from "react";
import classes from "./contact-form.module.css";
export default function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const submitHandler = async (event) => {
    event.preventDefault();
    const data = {
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    };
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
            required
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button onClick={submitHandler}>Submit</button>
        </div>
      </form>
    </section>
  );
}
