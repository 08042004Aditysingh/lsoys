// import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">🚗 Simplify Your Self-Rent Business with Our White-Label App!</h1>
        <p className="hero-subtitle">Track, manage, and grow your vehicle rental business effortlessly.</p>
        <a href="#contact" className="hero-button">Get Started Today</a>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <h2 className="section-title">Facing These Challenges?</h2>
        <div className="problem-list">
          <div className="problem-item">✅ Clients extending deadlines without notice</div>
          <div className="problem-item">✅ Unclear availability & identity verification issues</div>
          <div className="problem-item">✅ Lost cash transactions & tracking problems</div>
          <div className="problem-item">✅ GPS disabled, making tracking difficult</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Our App Solves It All!</h2>
        <div className="feature-list">
          <div className="feature-item">🔹 Automated deadline extensions & clear availability</div>
          <div className="feature-item">🔹 Secure ID verification & digital payments</div>
          <div className="feature-item">🔹 GPS tracking & automated notifications</div>
          <div className="feature-item">🔹 Full transparency with a seamless admin dashboard</div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <div className="pricing-plans">
          <div className="pricing-card">
            <h3 className="plan-title">Annual Plan</h3>
            <p className="plan-price">₹45,000/year</p>
            <p className="plan-description">Save with a yearly subscription!</p>
            <a href="#contact" className="plan-button">Choose Plan</a>
          </div>
          <div className="pricing-card">
            <h3 className="plan-title">Monthly Plan</h3>
            <p className="plan-price">₹3,750/month</p>
            <p className="plan-description">Flexible payment option!</p>
            <a href="#contact" className="plan-button">Choose Plan</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Get in Touch</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="input-field" required />
          <input type="email" placeholder="Your Email" className="input-field" required />
          <textarea placeholder="Your Message" className="input-field" rows="4" required></textarea>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2024 Self-Rent App Solutions. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
