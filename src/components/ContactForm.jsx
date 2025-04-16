import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Very basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    // Placeholder for actual submission (email service, API, etc.)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-form">
      <h2 className="contact-form__title">Contact Me</h2>

      {submitted && <p className="contact-form__success">Thanks! I’ll get back to you soon.</p>}

      <form className="contact-form__form" onSubmit={handleSubmit}>
        <label className="contact-form__label">
          Name
          <input
            type="text"
            name="name"
            className="contact-form__input"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label className="contact-form__label">
          Email
          <input
            type="email"
            name="email"
            className="contact-form__input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label className="contact-form__label">
          Message
          <textarea
            name="message"
            className="contact-form__textarea"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>

        <button type="submit" className="contact-form__button">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
