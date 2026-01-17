import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', text: 'Please fill name, email and message.' });
      return;
    }
    setStatus({ type: 'loading', text: 'Sending…' });
    setTimeout(() => {
      setStatus({ type: 'success', text: 'Message sent — thank you!' });
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 900);
  }

  return (
    <div className="about-page">
      <Header />

      <main className="about-main">
        <section className="section container">
          <h1 className="hero__title">CONTACT</h1>
          <p className="section__subtitle">Bookings, collaborations or press — send a message and I’ll reply as soon as possible.</p>

          <div className="grid two">
            <div>
              <form className="card card--contact" onSubmit={handleSubmit} aria-label="contact form">
                <label className="sr-only" htmlFor="name">Name</label>
                <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />

                <label className="sr-only" htmlFor="email">Email</label>
                <input id="email" name="email" value={form.email} onChange={handleChange} placeholder="you@domain.com" type="email" />

                <label className="sr-only" htmlFor="subject">Subject</label>
                <input id="subject" name="subject" value={form.subject} onChange={handleChange} placeholder="Subject (optional)" />

                <label className="sr-only" htmlFor="message">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Write your message" rows={6} />

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                  <button type="submit" className="btn btn--primary">Send message</button>
                  <button type="button" className="btn btn--ghost" onClick={() => setForm({ name: '', email: '', subject: '', message: '' })}>Clear</button>
                </div>

                {status && (
                  <p className={"form-status " + (status.type === 'error' ? 'form-status--error' : 'form-status--success')}>{status.text}</p>
                )}
              </form>
            </div>

            <aside className="card" aria-label="contact info">
              <h3 className="card__title">Contact details</h3>
              <p className="card__text">Email: <strong>[your email here]</strong></p>
              <p className="card__text">Phone: <strong>[your phone]</strong></p>
              <p className="card__text">Collective: <strong>LEVEL MUSIC</strong></p>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;