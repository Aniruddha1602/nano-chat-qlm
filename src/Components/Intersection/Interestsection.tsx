import React, { useState } from 'react';
import './Interestsection.css';

interface Interest {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
}

interface InterestSelectionProps {
  onComplete: (selectedInterest: string | null) => void;
}

const InterestSelection: React.FC<InterestSelectionProps> = ({ onComplete }) => {
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

  const interests: Interest[] = [
    {
      id: 'business',
      title: 'Business Operations',
      description: 'Scheduling, pricing, resource allocation',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="8" y="12" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 12V10C12 8.89543 12.8954 8 14 8H18C19.1046 8 20 8.89543 20 10V12" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 18V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: '#6B5B95'
    },
    {
      id: 'personal',
      title: 'Personal Decisions',
      description: 'Finance, career, major life choices',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="16" cy="16" r="3" fill="currentColor"/>
          <path d="M16 6V10M16 22V26M26 16H22M10 16H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M23 9L20 12M12 20L9 23M23 23L20 20M12 12L9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: '#E91E63'
    },
    {
      id: 'learning',
      title: 'Learning',
      description: 'Quantum computing, optimization techniques',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M8 12C8 9.79086 9.79086 8 12 8H20C22.2091 8 24 9.79086 24 12V20C24 22.2091 22.2091 24 20 24H12C9.79086 24 8 22.2091 8 20V12Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 16L14.5 18.5L20 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: '#E857B0'
    },
    {
      id: 'chat',
      title: 'Chat with Super AI',
      description: 'Have conversations with quantum AI',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M24 10C24 7.79086 22.2091 6 20 6H12C9.79086 6 8 7.79086 8 10V18C8 20.2091 9.79086 22 12 22H14L16 26L18 22H20C22.2091 22 24 20.2091 24 18V10Z" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="14" r="1.5" fill="currentColor"/>
          <circle cx="16" cy="14" r="1.5" fill="currentColor"/>
          <circle cx="20" cy="14" r="1.5" fill="currentColor"/>
        </svg>
      ),
      color: '#A8A8D8'
    },
    {
      id: 'exploring',
      title: 'Just Exploring',
      description: "Show me what's possible",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 8L18 14L24 16L18 18L16 24L14 18L8 16L14 14L16 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <circle cx="24" cy="8" r="2" fill="currentColor"/>
          <circle cx="8" cy="24" r="1.5" fill="currentColor"/>
        </svg>
      ),
      color: '#E857B0'
    }
  ];

  const handleSelect = (id: string): void => {
    setSelectedInterest(id);
  };

  const handleContinue = (): void => {
    if (selectedInterest && onComplete) {
      onComplete(selectedInterest);
    }
  };

  const handleBack = (): void => {
    if (onComplete) {
      onComplete(null);
    }
  };

  const handleLater = (): void => {
    // Navigate to sign-in screen by calling onComplete with 'signin' or a specific value
    if (onComplete) {
      onComplete('signin');
    }
  };

  return (
    <div className="interest-selection-container">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="time">9:41</span>
        <div className="status-icons">
          <div className="battery"></div>
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <button className="dark-mode-toggle">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Content */}
      <div className="interest-content">
        {/* Back Button */}
        <button className="back-btn" onClick={handleBack}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </button>

        {/* Header */}
        <div className="interest-header">
          <h1 className="interest-title">What can ChatQLM do for you?</h1>
          <p className="interest-subtitle">Select your primary interest</p>
        </div>

        {/* Interest Options */}
        <div className="interest-options">
          {interests.map((interest: Interest) => (
            <button
              key={interest.id}
              className={`interest-card ${selectedInterest === interest.id ? 'selected' : ''}`}
              onClick={() => handleSelect(interest.id)}
            >
              <div className="interest-icon" style={{ color: interest.color }}>
                {interest.icon}
              </div>
              <div className="interest-info">
                <h3 className="interest-card-title">{interest.title}</h3>
                <p className="interest-card-description">{interest.description}</p>
              </div>
              <div className="interest-arrow">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="interest-actions">
          {selectedInterest && (
            <button className="continue-btn-interest" onClick={handleContinue}>
              Continue
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
          <button className="later-btn" onClick={handleLater}>I'll do it later</button>
        </div>
      </div>
    </div>
  );
};

export default InterestSelection;