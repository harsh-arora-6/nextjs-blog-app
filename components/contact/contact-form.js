import classes from "./contact-form.module.css";
export default function ContactForm() {

    
  return (
    <section className={classes.contact}>
        <h1>How can I help you?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows={5}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </section>
  );
}
