import React, { useState } from 'react';
import './SignIn.css';

interface SignInProps {
  onSignIn?: (email: string, password: string) => void;
  onSignUp?: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onSignIn, onSignUp, isDarkMode, onToggleDarkMode }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    
    // Reset error state
    setShowError(false);
    setErrorMessage('');

    // Check if both fields are filled
    if (!email || !password) {
      setShowError(true);
      setErrorMessage('Please enter both email and password');
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setShowError(true);
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // Validate password (minimum length)
    if (password.length < 6) {
      setShowError(true);
      setErrorMessage('Password must be at least 6 characters');
      return;
    }

    // If validation passes, proceed with sign in
    if (onSignIn) {
      onSignIn(email, password);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    // Clear error when user starts typing
    if (showError) {
      setShowError(false);
      setErrorMessage('');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
    // Clear error when user starts typing
    if (showError) {
      setShowError(false);
      setErrorMessage('');
    }
  };

  const handleForgotPassword = (): void => {
    console.log('Forgot password clicked');
    // Navigate to forgot password screen
  };

  const handleSignUp = (): void => {
    if (onSignUp) {
      onSignUp();
    }
  };

  return (
    <div className={`signin-container ${isDarkMode ? 'dark' : ''}`}>
      {/* Dark Mode Toggle */}
      <button className="dark-mode-toggle-signin" onClick={onToggleDarkMode}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path 
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Content */}
      <div className="signin-content">
        {/* Logo */}
        <div className="signin-logo">
          <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
            {/* Left Circle */}
            <circle cx="25" cy="40" r="18" stroke="#E91E63" strokeWidth="3" fill="none"/>
            <circle cx="25" cy="40" r="12" stroke="#E91E63" strokeWidth="2" fill="none"/>
            <circle cx="25" cy="40" r="6" fill="#E91E63"/>
            
            {/* Right Circle */}
            <circle cx="75" cy="40" r="18" stroke="#E91E63" strokeWidth="3" fill="none"/>
            <circle cx="75" cy="40" r="12" stroke="#E91E63" strokeWidth="2" fill="none"/>
            <circle cx="75" cy="40" r="6" fill="#E91E63"/>
            
            {/* Wave Lines connecting */}
            <path d="M25 25 Q 35 20, 45 25 T 65 25 T 75 25" stroke="#E91E63" strokeWidth="2" fill="none"/>
            <path d="M25 30 Q 35 25, 45 30 T 65 30 T 75 30" stroke="#E91E63" strokeWidth="2" fill="none"/>
            <path d="M25 50 Q 35 55, 45 50 T 65 50 T 75 50" stroke="#E91E63" strokeWidth="2" fill="none"/>
            <path d="M25 55 Q 35 60, 45 55 T 65 55 T 75 55" stroke="#E91E63" strokeWidth="2" fill="none"/>
          </svg>
        </div>

        {/* Header */}
        <div className="signin-header">
          <h1 className="signin-title">Welcome back</h1>
          <p className="signin-subtitle">Sign in to continue to ChatQLM</p>
        </div>

        {/* Error Alert */}
        {showError && (
          <div className="error-alert">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="error-icon">
              <circle cx="10" cy="10" r="9" stroke="#DC3545" strokeWidth="1.5" fill="none"/>
              <path d="M10 6V11" stroke="#DC3545" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="10" cy="14" r="0.5" fill="#DC3545"/>
            </svg>
            <span className="error-text">{errorMessage}</span>
          </div>
        )}

        {/* Form */}
        <form className="signin-form" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="form-group">
            <label className="form-label">Email</label>
            <div className="input-wrapper">
              <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path 
                  d="M3 4H17C17.55 4 18 4.45 18 5V15C18 15.55 17.55 16 17 16H3C2.45 16 2 15.55 2 15V5C2 4.45 2.45 4 3 4Z" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M18 5L10 10.5L2 5" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="email"
                className={`form-input ${showError ? 'error' : ''}`}
                placeholder="you@example.com"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-wrapper">
              <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect 
                  x="4" 
                  y="9" 
                  width="12" 
                  height="8" 
                  rx="1" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                />
                <path 
                  d="M7 9V6C7 4.34315 8.34315 3 10 3C11.6569 3 13 4.34315 13 6V9" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                />
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                className={`form-input ${showError ? 'error' : ''}`}
                placeholder="••••••••"
                value={password}
                onChange={handlePasswordChange}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path 
                      d="M2 10C2 10 4.5 4.5 10 4.5C15.5 4.5 18 10 18 10C18 10 15.5 15.5 10 15.5C4.5 15.5 2 10 2 10Z" 
                      stroke="currentColor" 
                      strokeWidth="1.5"
                    />
                    <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path 
                      d="M3 3L17 17M10 7C8.34315 7 7 8.34315 7 10C7 10.3506 7.06015 10.6872 7.17071 11M13 10C13 11.6569 11.6569 13 10 13C9.64936 13 9.31278 12.9398 9 12.8293" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round"
                    />
                    <path 
                      d="M5.5 5.5C4 6.5 2 8.5 2 10C2 10 4.5 15.5 10 15.5C11.5 15.5 13 15 14.5 14M10 4.5C15.5 4.5 18 10 18 10C18 10 17 12 15.5 13.5" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <button 
            type="button" 
            className="forgot-password-btn"
            onClick={handleForgotPassword}
          >
            Forgot password?
          </button>

          {/* Sign In Button */}
          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="signup-text">
          Don't have an account? <button className="signup-link" onClick={handleSignUp}>Sign up</button>
        </p>

        {/* Terms */}
        <p className="terms-text">
          By continuing, you agree to ChatQLM's Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default SignIn;