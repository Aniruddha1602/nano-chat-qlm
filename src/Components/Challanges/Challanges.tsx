import React, { useState } from 'react';
import './Challanges.css';

interface ChallengesProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onNavigate: (tab: string) => void;
}

interface DailyChallenge {
  title: string;
  description: string;
  competing: number;
  timeLeft: string;
}

interface UserStats {
  rank: number;
  solved: number;
  avgScore: number;
}

const Challenges: React.FC<ChallengesProps> = ({ isDarkMode, onToggleDarkMode, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'daily' | 'leaderboard' | 'browse'>('daily');

  const dailyChallenge: DailyChallenge = {
    title: 'Traveling Salesperson',
    description: 'Find the optimal route through 25 cities with minimum distance',
    competing: 2847,
    timeLeft: '6h 23m'
  };

  const userStats: UserStats = {
    rank: 47,
    solved: 23,
    avgScore: 72.3
  };

  const handleSolveNow = (): void => {
    console.log('Navigate to challenge solver');
  };

  const handleLearnMore = (): void => {
    console.log('Navigate to quantum advantage learning');
  };

  return (
    <div className={`challenges-container ${isDarkMode ? 'dark' : ''}`}>
      {/* Header */}
      <header className="challenges-header">
        <div className="challenges-title-wrapper">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="challenges-icon">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M26 9h1.5a2.5 2.5 0 0 0 0-5H26M4 28h24M12 18.66V21c0 .55-.47.98-.97 1.21C9.85 22.75 9 24.24 9 28M20 18.66V21c0 .55.47.98.97 1.21C22.15 22.75 23 24.24 23 28" stroke="#E91E63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M26 2H6v7a10 10 0 0 0 20 0V2z" stroke="#E91E63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h1 className="challenges-title">Challenges</h1>
        </div>
        <button className="dark-mode-toggle-challenges" onClick={onToggleDarkMode}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </header>

      {/* Subtitle */}
      <p className="challenges-subtitle">
        Compete, learn, and master quantum problem-solving
      </p>

      {/* Tabs */}
      <div className="challenges-tabs">
        <button 
          className={`tab-btn ${activeTab === 'daily' ? 'active' : ''}`}
          onClick={() => setActiveTab('daily')}
        >
          Daily
        </button>
        <button 
          className={`tab-btn ${activeTab === 'leaderboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('leaderboard')}
        >
          Leaderboard
        </button>
        <button 
          className={`tab-btn ${activeTab === 'browse' ? 'active' : ''}`}
          onClick={() => setActiveTab('browse')}
        >
          Browse
        </button>
      </div>

      {/* Main Content */}
      <main className="challenges-content">
        {/* Daily Challenge Section */}
        <div className="daily-challenge-section">
          <div className="section-header-challenges">
            <span className="fire-emoji">🔥</span>
            <h2 className="section-title-challenges">Daily Challenge</h2>
          </div>

          {/* Challenge Card */}
          <div className="daily-challenge-card">
            <div className="challenge-card-header">
              <span className="challenge-badge">Today's Challenge</span>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="trophy-icon">
                <circle cx="14" cy="14" r="12" fill="#FFD700"/>
                <path d="M14 6L16.5 12H23L18 16L20 22L14 18L8 22L10 16L5 12H11.5L14 6Z" fill="white"/>
              </svg>
            </div>

            <h3 className="challenge-card-title">{dailyChallenge.title}</h3>
            <p className="challenge-card-description">{dailyChallenge.description}</p>

            <div className="challenge-card-stats">
              <div className="challenge-card-stat">
                <span className="stat-label-card">Competing</span>
                <div className="stat-value-card">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M12 15v-2a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v2M9 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM15 15v-2a3 3 0 0 0-2.25-2.9M12.75 2.6a2.5 2.5 0 0 1 0 4.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {dailyChallenge.competing.toLocaleString()}
                </div>
              </div>
              <div className="challenge-card-stat">
                <span className="stat-label-card">Time Left</span>
                <div className="stat-value-card">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="1.5"/>
                    <path d="M9 5v4l2.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  {dailyChallenge.timeLeft}
                </div>
              </div>
            </div>

            <button className="solve-now-btn" onClick={handleSolveNow}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 10l5 5 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Solve It Now
            </button>

            <button className="learn-more-link" onClick={handleLearnMore}>
              Learn: Why quantum advantage matters →
            </button>
          </div>
        </div>

        {/* Your Stats */}
        <div className="your-stats-section">
          <h3 className="stats-section-title">Your Stats</h3>
          <div className="stats-cards">
            <div className="stat-card-small purple">
              <div className="stat-number">{userStats.rank}</div>
              <div className="stat-label-small">Your Rank</div>
            </div>
            <div className="stat-card-small blue">
              <div className="stat-number">{userStats.solved}</div>
              <div className="stat-label-small">Solved</div>
            </div>
            <div className="stat-card-small green">
              <div className="stat-number">{userStats.avgScore}</div>
              <div className="stat-label-small">Avg Score</div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav-challenges">
        <button className="nav-item-challenges" onClick={() => onNavigate('home')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="nav-label-challenges">Home</span>
        </button>
        <button className="nav-item-challenges active" onClick={() => onNavigate('challenges')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="nav-label-challenges">Challenges</span>
        </button>
        <button className="nav-item-challenges" onClick={() => onNavigate('learn')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 16V12M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="nav-label-challenges">Learn</span>
        </button>
        <button className="nav-item-challenges" onClick={() => onNavigate('library')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="nav-label-challenges">Library</span>
        </button>
        <button className="nav-item-challenges" onClick={() => onNavigate('profile')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span className="nav-label-challenges">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default Challenges;