import React, { useState } from 'react';
import './Home.css';

interface HomeProps {
  userName?: string;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onNavigate: (tab: string) => void;
}

interface ImpactStats {
  moneySaved: number;
  timeSaved: number;
  problemsSolved: number;
}

interface Challenge {
  title: string;
  description: string;
  competing: number;
  timeLeft: string;
}

interface Solution {
  id: string;
  title: string;
  savings: string;
  date: string;
  tag: string;
  tagColor: string;
  icon: string;
  iconColor: string;
}

interface LearnItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  iconColor: string;
}

const Home: React.FC<HomeProps> = ({ userName = 'Sarah', isDarkMode, onToggleDarkMode, onNavigate }) => {
  const [inputMode, setInputMode] = useState<'speak' | 'type'>('type');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const impactStats: ImpactStats = {
    moneySaved: 45234,
    timeSaved: 127,
    problemsSolved: 89
  };

  const todayChallenge: Challenge = {
    title: 'Portfolio Optimizer',
    description: 'Beat the quantum computer',
    competing: 1247,
    timeLeft: '6h 23m left'
  };

  const recentSolutions: Solution[] = [
    {
      id: '1',
      title: 'Team Schedule',
      savings: '$4.2K/mo',
      date: 'Jan 10',
      tag: 'Quantum-tier',
      tagColor: '#9C27B0',
      icon: '📅',
      iconColor: '#E8EAF6'
    },
    {
      id: '2',
      title: 'Budget Allocation',
      savings: '$12K saved',
      date: 'Jan 8',
      tag: 'Supercomputing',
      tagColor: '#2196F3',
      icon: '💼',
      iconColor: '#FCE4EC'
    },
    {
      id: '3',
      title: 'Route Optimization',
      savings: '2.3hrs saved',
      date: 'Jan 7',
      tag: 'Classical',
      tagColor: '#9E9E9E',
      icon: '🚚',
      iconColor: '#FFE8E8'
    }
  ];

  const learnItems: LearnItem[] = [
    {
      id: '1',
      title: 'What is quantum annealing?',
      subtitle: '2 min read',
      icon: '🎓',
      iconColor: '#F3E5F5'
    },
    {
      id: '2',
      title: 'Today in quantum computing',
      subtitle: '3 new articles',
      icon: '📰',
      iconColor: '#E1F5FE'
    }
  ];

  const handleNewProblem = (): void => {
    console.log('Navigate to new problem');
  };

  const handleSearch = (): void => {
    console.log('Search:', searchQuery);
  };

  const handleJoinChallenge = (): void => {
    console.log('Join challenge:', todayChallenge.title);
  };

  const handleViewAll = (): void => {
    console.log('View all solutions');
  };

  const handleSolutionClick = (solutionId: string): void => {
    console.log('View solution:', solutionId);
  };

  const handleLearnClick = (learnId: string): void => {
    console.log('View learn item:', learnId);
  };

  return (
    <div className={`home-container ${isDarkMode ? 'dark' : ''}`}>
      {/* Header */}
      <header className="home-header">
        <div className="header-left">
          <div className="app-logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="10" cy="16" r="6" stroke="#E91E63" strokeWidth="2" fill="none"/>
              <circle cx="10" cy="16" r="3" fill="#E91E63"/>
              <circle cx="22" cy="16" r="6" stroke="#E91E63" strokeWidth="2" fill="none"/>
              <circle cx="22" cy="16" r="3" fill="#E91E63"/>
              <path d="M10 10 Q 13 8, 16 10 T 22 10" stroke="#E91E63" strokeWidth="1.5" fill="none"/>
              <path d="M10 22 Q 13 24, 16 22 T 22 22" stroke="#E91E63" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
          <span className="app-name">ChatQLM</span>
        </div>
        <div className="header-right">
          <button className="header-icon-btn" onClick={onToggleDarkMode}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="header-icon-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="header-icon-btn notification-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="notification-dot"></span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="home-content">
        {/* Greeting */}
        <div className="greeting-section">
          <h1 className="greeting-title">Good morning, {userName}</h1>
          <p className="greeting-subtitle">Ready to solve something?</p>
        </div>

        {/* New Problem Button */}
        <button className="new-problem-btn" onClick={handleNewProblem}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          New Problem
        </button>

        {/* Search Input */}
        <div className="search-section">
          <div className="search-input-wrapper">
           <p>What do you want solve today? </p>
            <div className="input-actions">
              <button 
                className={`input-mode-btn ${inputMode === 'speak' ? 'active' : ''}`}
                onClick={() => setInputMode('speak')}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="8" y="2" width="4" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M5 10C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M10 15V18M7 18H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Speak
              </button>
              <button 
                className={`input-mode-btn ${inputMode === 'type' ? 'active' : ''}`}
                onClick={() => setInputMode('type')}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="6" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 9H6.01M9 9H9.01M12 9H12.01M6 12H6.01M9 12H9.01M12 12H12.01M14 12H14.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Type
              </button>
              <button className="search-submit-btn" onClick={handleSearch}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Your Impact Card */}
        <div className="impact-card">
          <div className="impact-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="white"/>
            </svg>
            <h2 className="impact-title">Your Impact</h2>
          </div>
          <div className="impact-stats">
            <div className="impact-stat">
              <div className="stat-value">${impactStats.moneySaved.toLocaleString()}</div>
              <div className="stat-label">Money Saved</div>
            </div>
            <div className="impact-stat">
              <div className="stat-value">{impactStats.timeSaved} hrs</div>
              <div className="stat-label">Time Saved</div>
            </div>
            <div className="impact-stat">
              <div className="stat-value">{impactStats.problemsSolved}</div>
              <div className="stat-label">Problems</div>
            </div>
          </div>
        </div>

        {/* Today's Challenge */}
        <div className="section-header">
          <div className="section-title-wrapper">
            <span className="section-emoji">🔥</span>
            <h3 className="section-title">Today's Challenge</h3>
          </div>
        </div>

        <div className="challenge-card">
          <div className="challenge-content">
            <div className="challenge-info">
              <h4 className="challenge-title">{todayChallenge.title}</h4>
              <p className="challenge-description">{todayChallenge.description}</p>
              <div className="challenge-meta">
                <div className="challenge-stat">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 4V8L10.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>{todayChallenge.competing.toLocaleString()} competing</span>
                </div>
                <div className="challenge-stat">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 5V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>{todayChallenge.timeLeft}</span>
                </div>
              </div>
              <button className="join-challenge-btn" onClick={handleJoinChallenge}>
                Join Challenge
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="challenge-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" fill="#FFB800"/>
                <path d="M24 10L27 20H37L29 26L32 36L24 30L16 36L19 26L11 20H21L24 10Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Recent Solutions */}
        <div className="section-header">
          <h3 className="section-title">Recent Solutions</h3>
          <button className="view-all-btn" onClick={handleViewAll}>
            View All
          </button>
        </div>

        <div className="solutions-list">
          {recentSolutions.map((solution) => (
            <div 
              key={solution.id} 
              className="solution-card"
              onClick={() => handleSolutionClick(solution.id)}
            >
              <div className="solution-icon" style={{ background: solution.iconColor }}>
                <span>{solution.icon}</span>
              </div>
              <div className="solution-content">
                <div className="solution-header">
                  <h4 className="solution-title">{solution.title}</h4>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="chevron-right">
                    <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="solution-meta">
                  <span className="solution-savings">{solution.savings}</span>
                  <span className="solution-separator">•</span>
                  <span className="solution-date">{solution.date}</span>
                </div>
                <div className="solution-tags">
                  <div className="solution-tag" style={{ background: `${solution.tagColor}15` }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="2" fill={solution.tagColor}/>
                    </svg>
                    <span style={{ color: solution.tagColor }}>{solution.tag}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learn Section */}
        <div className="section-header">
          <div className="section-title-wrapper">
            <span className="section-emoji">🎓</span>
            <h3 className="section-title">Learn</h3>
          </div>
          <button className="view-all-btn" onClick={handleViewAll}>
            View All
          </button>
        </div>

        <div className="learn-list">
          {learnItems.map((item) => (
            <div 
              key={item.id} 
              className="learn-card"
              onClick={() => handleLearnClick(item.id)}
            >
              <div className="learn-icon" style={{ background: item.iconColor }}>
                <span>{item.icon}</span>
              </div>
              <div className="learn-content">
                <h4 className="learn-title">{item.title}</h4>
                <p className="learn-subtitle">{item.subtitle}</p>
              </div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="chevron-right">
                <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button className="nav-item active" onClick={() => onNavigate('home')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="nav-label">Home</span>
        </button>

        <button className="nav-item" onClick={() => onNavigate('challenges')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 3L13.5 7H18L14.5 10L16 14L12 11L8 14L9.5 10L6 7H10.5L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
          <span className="nav-label">Challenges</span>
        </button>

        {/* DISABLED: Learn */}
        <button className="nav-item disabled" disabled>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 16V12M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="nav-label">Learn</span>
        </button>

        {/* DISABLED: Library */}
        <button className="nav-item disabled" disabled>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="nav-label">Library</span>
        </button>

        <button className="nav-item" onClick={() => onNavigate('profile')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span className="nav-label">Profile</span>
        </button>
      </nav>

    </div>
  );
};

export default Home;