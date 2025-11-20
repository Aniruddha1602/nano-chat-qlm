import React, { useState } from 'react';
import './App.css';
import InterestSelection from './Components/Intersection/Interestsection';
import SignIn from './Components/SignIn/SignIn';
import Home from './Components/Home/Home';
import Challenges from './Components/Challanges/Challanges';
import ProfileMenu from './Components/ProfileMenu/Profilemenu';

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  showLogo: boolean;
  icon?: string;
}

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [showInterestSelection, setShowInterestSelection] = useState<boolean>(false);
  const [showSignIn, setShowSignIn] = useState<boolean>(false);
  const [showHome, setShowHome] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('Sarah');
  const [activeTab, setActiveTab] = useState<string>('home');

  const slides: Slide[] = [
    {
      title: "ChatQLM",
      subtitle: "From Problem to Solution, Actually",
      description: "The first AI that doesn't just chat about your problems—it solves them using quantum computers and supercomputing.",
      showLogo: true
    },
    {
      title: "Real Computation",
      subtitle: "Not Just Conversation",
      description: "While ChatGPT gives advice, ChatQLM delivers optimal solutions using the most powerful computing technologies.",
      showLogo: true  
    },
    {
      title: "Your Problems, Solved",
      subtitle: "Leveraging AI, Optimization, Quantum",
      description: "From scheduling to investing, ChatQLM finds mathematically optimal answers in seconds.",
      showLogo: false,
      icon: "lightning"
    }
  ];

  const handleContinue = (): void => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Navigate to interest selection
      setShowInterestSelection(true);
    }
  };

  const handleSkip = (): void => {
    // Navigate to interest selection
    setShowInterestSelection(true);
  };

  const handleInterestComplete = (selectedInterest: string | null): void => {
    if (selectedInterest === null) {
      // Go back to onboarding
      setShowInterestSelection(false);
    } else if (selectedInterest === 'skip') {
      // Navigate to SignIn screen
      setShowInterestSelection(false);
      setShowSignIn(true);
    } else {
      // Navigate to Home screen after selecting interest
      console.log('Selected interest:', selectedInterest);
      setShowInterestSelection(false);
      setShowHome(true);
      setActiveTab('home');
    }
  };

  const handleSignIn = (email: string, password: string): void => {
    console.log('Sign in with:', email, password);
    // Extract name from email (simple example)
    const name = email.split('@')[0];
    setUserName(name.charAt(0).toUpperCase() + name.slice(1));
    // Navigate to Home screen
    setShowSignIn(false);
    setShowHome(true);
    setActiveTab('home');
  };

  const handleSignUp = (): void => {
    console.log('Navigate to sign up');
    alert('Navigate to Sign Up screen');
    // Navigate to sign up screen
  };

  const toggleDarkMode = (): void => {
    setIsDarkMode(!isDarkMode);
  };

  const handleNavigate = (tab: string): void => {
    console.log('Navigating to:', tab);
    setActiveTab(tab);
  };

  const handleLogout = (): void => {
    console.log('User logged out');
    setShowHome(false);
    setShowSignIn(true);
    setActiveTab('home');
  };

  // Show Home screen
  if (showHome) {
    if (activeTab === 'challenges') {
      return (
        <Challenges
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
          onNavigate={handleNavigate}
        />
      );
    }

    if (activeTab === 'profile') {
      return (
        <ProfileMenu
          userName={userName}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
          onNavigate={handleNavigate}
          onLogout={handleLogout}
        />
      );
    }

    return (
      <Home 
        userName={userName}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        onNavigate={handleNavigate}
      />
    );
  }

  // Show SignIn screen
  if (showSignIn) {
    return (
      <SignIn 
        onSignIn={handleSignIn}
        onSignUp={handleSignUp}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />
    );
  }

  // Show Interest Selection if user completed onboarding
  if (showInterestSelection) {
    return <InterestSelection onComplete={handleInterestComplete} />;
  }

  return (
    <div className="app-container">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="time">9:41</span>
        <div className="status-icons">
          <div className="battery"></div>
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Main Content */}
      <div className="onboarding-content">
        {/* Logo / Icon */}
        {slides[currentSlide].showLogo ? (
          <div className="logo-container">
            <div className="logo">
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
                {/* Left Circle */}
                <circle cx="25" cy="30" r="15" fill="#E91E63"/>
                <circle cx="25" cy="30" r="10" fill="white"/>
                
                {/* Right Circle */}
                <circle cx="50" cy="30" r="15" fill="#E91E63"/>
                <circle cx="50" cy="30" r="10" fill="white"/>
                
                {/* Wave Lines */}
                <path d="M15 30 Q 20 25, 25 30 T 35 30" stroke="#E91E63" strokeWidth="2" fill="none"/>
                <path d="M15 35 Q 20 30, 25 35 T 35 35" stroke="#E91E63" strokeWidth="2" fill="none"/>
                <path d="M40 30 Q 45 25, 50 30 T 60 30" stroke="#E91E63" strokeWidth="2" fill="none"/>
                <path d="M40 35 Q 45 30, 50 35 T 60 35" stroke="#E91E63" strokeWidth="2" fill="none"/>
                
                {/* Connecting Wave */}
                <path d="M25 20 Q 30 15, 37.5 20 T 50 20" stroke="#E91E63" strokeWidth="1.5" fill="none"/>
                <path d="M25 40 Q 30 45, 37.5 40 T 50 40" stroke="#E91E63" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <h1 className="brand-name">ChatQLM</h1>
          </div>
        ) : (
          <div className="icon-container">
            <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
              <path d="M45 10L20 55H40L35 90L60 45H40L45 10Z" fill="#FFB88C" opacity="0.8"/>
            </svg>
          </div>
        )}

        {/* Content */}
        <div className="content-section">
          <h2 className="title">{slides[currentSlide].title}</h2>
          <p className="subtitle">{slides[currentSlide].subtitle}</p>
          <p className="description">{slides[currentSlide].description}</p>
        </div>

        {/* Pagination Dots */}
        <div className="pagination-dots">
          {slides.map((_, index: number) => (
            <span 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>

        {/* Actions */}
        <div className="actions">
          <button className="continue-btn" onClick={handleContinue}>
            {currentSlide === slides.length - 1 ? 'Get Started' : 'Continue'}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {/* {currentSlide < slides.length - 1 && (
            <button className="skip-btn" onClick={handleSkip}>Skip</button>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default App;