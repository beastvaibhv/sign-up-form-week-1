import React, { useState } from 'react';
import './App.css';

function App() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setEmailValid(validateEmail(inputEmail));
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    setPasswordValid(inputPassword.length >= 8);
  };

  const handleConfirmPasswordChange = (e) => {
    const inputConfirmPassword = e.target.value;
    setConfirmPassword(inputConfirmPassword);
    setConfirmPasswordValid(inputConfirmPassword === password);
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert("Can't submit the form");
    }
  };


  return (
    <div className="App">
      <div className='form-container'>
        <form method='post'>
          <div className='inner-container'>
            <div><label for=""><b>Email:</b></label></div>

            <div><input
              name="email"
              id="input-email"
              type="" value={email}
              placeholder="Enter Your Email"
              onChange={handleEmailChange}
              style={{ border: emailValid ? '1px solid green' : '1px solid red' }} />
              {email !== '' && !emailValid && <p style={{ color: 'red' }}>Enter a valid email</p>}</div>

          </div>
          <div className='inner-container'>
            <div><label for=""><b>Password:</b></label></div>

            <div>
              <input

                name="password"
                id="input-password"
                type=""
                value={password}
                placeholder="Enter Your Password"
                onChange={handlePasswordChange}
                style={{ border: passwordValid ? '1px solid green' : '1px solid red' }} />
                 {password !== '' && !passwordValid && (
              <p style={{ color: 'red' }}>Password must be at least 8 characters long</p>
            )}
            </div>
           
          </div>
          <div className='inner-container'>
            <div><label for=""><b>Confirm Password:</b></label></div>

            <div>
              <input
                name="password-confirm"
                id="input-confirm-password"
                type=""
                value={confirmPassword}
                placeholder="Re-enter Your Password"
                onChange={handleConfirmPasswordChange}
                style={{ border: confirmPasswordValid ? '1px solid green' : '1px solid red' }} />
                 {confirmPassword !== '' && !confirmPasswordValid && (
              <p style={{ color: 'red' }}>Passwords do not match</p>
            )}
            </div>
           
          </div>

          <div className='button-submit'>
            <button type="submit" onClick={handleSubmit}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
