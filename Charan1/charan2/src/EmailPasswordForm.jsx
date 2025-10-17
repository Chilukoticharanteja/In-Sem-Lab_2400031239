import React, { useState } from 'react';

function EmailPasswordForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordIsValid = password.length >= 6;
  const formIsValid = emailIsValid && passwordIsValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    alert('Form submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="email">Email:</label><br />
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
          required
        />
        {emailTouched && !emailIsValid && (
          <div style={{ color: 'red' }}>
            Please enter a valid email address.
          </div>
        )}
      </div>

      <div style={{ marginTop: '1rem' }}>
        <label htmlFor="password">Password:</label><br />
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />
      </div>

      <button type="submit" disabled={!formIsValid} style={{ marginTop: '1rem' }}>
        Submit
      </button>
    </form>
  );
}

export default EmailPasswordForm;
