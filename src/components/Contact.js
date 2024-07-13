import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again later.");
        }
      );

    e.target.reset();
  };

  return (
    <article className="contact active bg-eerie-black-2 border border-jet rounded-2xl p-4 shadow-shadow-1">
      <header>
        <h2 className="text-4xl text-white-2 font-semibold mb-4">Contact</h2>
      </header>
      <section className="mapbox relative h-64 w-full rounded-xl mb-10 border border-jet overflow-hidden">
        <figure className="h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.9511679638323!2d127.02272841565057!3d37.52419787980662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3c49056a4e1%3A0x18b90577b98d9b5a!2s589-3%20Sinsa-dong%2C%20Gangnam-gu%2C%20Seoul%2C%20South%20Korea!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
            width="400"
            height="300"
            loading="lazy"
            className="w-full h-full "
          ></iframe>
        </figure>
      </section>
      <section className="contact-form mb-10">
        <h3 className="text-3xl text-white-2 font-semibold mb-6">
          Contact Form
        </h3>
        <form ref={form} onSubmit={sendEmail} className="form space-y-6">
          <div className="input-wrapper grid grid-cols-1 gap-6 md:grid-cols-2">
            <input
              type="text"
              name="fullname"
              className="form-input bg-eerie-black-2 text-white-2 text-lg font-normal p-3 border border-jet rounded-xl outline-none focus:border-orange-yellow-crayola"
              placeholder="Full name"
              required
            />
            <input
              type="email"
              name="email"
              className="form-input bg-eerie-black-2 text-white-2 text-lg font-normal p-3 border border-jet rounded-xl outline-none focus:border-orange-yellow-crayola"
              placeholder="Email address"
              required
            />
          </div>
          <textarea
            name="message"
            className="form-input bg-eerie-black-2 text-white-2 text-lg font-normal p-3 border border-jet rounded-xl outline-none focus:border-orange-yellow-crayola resize-vertical"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            className="form-btn w-full bg-border-gradient-onyx text-orange-yellow-crayola flex justify-center items-center gap-2 p-3 rounded-xl font-medium shadow-shadow-3 transition-all duration-300 hover:bg-gradient-to-br hover:from-orange-400 hover:to-yellow-400"
            type="submit"
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
