import React from 'react';
import './ProfileMenu.css';

interface ProfileMenuProps {
  userName?: string;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onNavigate: (tab: string) => void;
  onLogout: () => void;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ 
  userName = 'Sarah Chen', 
  isDarkMode, 
  onToggleDarkMode,
  onNavigate,
  onLogout 
}) => {
  
  const userStats = {
    problems: 89,
    value: '$45K',
    saved: '127h'
  };

  const achievements = [
    { id: '1', title: 'First Quantum', icon: '⚛️', color: '#E91E63' },
    { id: '2', title: '10 Day Streak', icon: '🔥', color: '#E91E63' },
    { id: '3', title: 'Challenge Winner', icon: '🏆', color: '#FFB800' },
    { id: '4', title: '100 Problem', icon: '💯', color: '#F5F5F5' }
  ];

  const quantumStats = [
    { label: 'Qubit-seconds used', value: '4.7M' },
    { label: 'Quantum problems solved', value: '34' },
    { label: 'Fastest computation', value: '0.3s' },
    { label: 'Hardware accessed', value: 'badges' }
  ];

  const userLevel = 12;
  const userBadge = 'Quantum Expert';

  const getInitials = (name: string): string => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const handleMenuClick = (menu: string): void => {
    console.log('Navigate to:', menu);
    // Add navigation logic here
  };

  return (
    <div className={`profile-menu-container ${isDarkMode ? 'dark' : ''}`}>
      {/* Main Content - Scrollable */}
      <div className="profile-menu-content">
        {/* Header Section */}
        <div className="profile-menu-header">
          <div className="profile-menu-user">
            <div className="profile-menu-avatar">
              <span className="avatar-initial-menu">{getInitials(userName)}</span>
            </div>
            
            <div className="profile-menu-info">
              <h1 className="profile-menu-name">{userName}</h1>
              <div className="profile-menu-badges">
                <span className="badge-expert-menu">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 2L8.5 5.5H12L9 8L10 11.5L7 9L4 11.5L5 8L2 5.5H5.5L7 2Z" fill="white"/>
                  </svg>
                  {userBadge}
                </span>
                <span className="badge-level-menu">Level {userLevel}</span>
              </div>
            </div>
          </div>

          <button className="dark-mode-toggle-menu" onClick={onToggleDarkMode}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="profile-menu-stats">
          <div className="stat-card-menu">
            <div className="stat-value-menu">{userStats.problems}</div>
            <div className="stat-label-menu">Problems</div>
          </div>
          <div className="stat-card-menu">
            <div className="stat-value-menu">{userStats.value}</div>
            <div className="stat-label-menu">Value</div>
          </div>
          <div className="stat-card-menu">
            <div className="stat-value-menu">{userStats.saved}</div>
            <div className="stat-label-menu">Saved</div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="achievements-section-menu">
          <div className="section-header-menu">
            <h2 className="section-title-menu">Achievements</h2>
            <button className="view-all-link-menu">View All</button>
          </div>
          
          <div className="achievements-scroll-menu">
            <div className="achievements-list-menu">
              {achievements.map((achievement) => (
                <div 
                  key={achievement.id} 
                  className="achievement-card-menu"
                  style={{ background: achievement.color }}
                >
                  <div className="achievement-icon-menu">{achievement.icon}</div>
                  <div className="achievement-title-menu">{achievement.title}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="scroll-indicator-menu">
            <div className="scroll-track-menu">
              <div className="scroll-thumb-menu"></div>
            </div>
          </div>
        </div>

        {/* Quantum Computing Stats */}
        <div className="quantum-stats-section-menu">
          <h2 className="section-title-menu">Quantum Computing Stats</h2>
          
          <div className="quantum-stats-card-menu">
            {quantumStats.map((stat, index) => (
              <div key={index} className="quantum-stat-row-menu">
                <span className="quantum-stat-label-menu">{stat.label}</span>
                {stat.label === 'Hardware accessed' ? (
                  <div className="hardware-badges-menu">
                    <span className="hardware-badge-menu blue">D</span>
                    <span className="hardware-badge-menu purple">Q</span>
                    <span className="hardware-badge-menu green">G</span>
                  </div>
                ) : (
                  <span className="quantum-stat-value-menu">{stat.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Subscription Section */}
        <div className="subscription-section-menu">
          <h2 className="section-title-menu">Subscription</h2>
          <div className="subscription-bar-menu">
            <div className="subscription-progress-menu"></div>
          </div>
        </div>

        {/* Settings Menu */}
        <div className="settings-menu-section">
          <button className="menu-item" onClick={() => handleMenuClick('account')}>
            <div className="menu-item-left">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="menu-icon">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 1v6m0 6v6M23 12h-6m-6 0H1" stroke="currentColor" strokeWidth="2"/>
                <path d="M18.36 5.64l-4.24 4.24m-4.24 0L5.64 5.64m12.72 12.72l-4.24-4.24m-4.24 4.24l-4.24 4.24" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="menu-item-text">Account Settings</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="menu-arrow">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="menu-item" onClick={() => handleMenuClick('notifications')}>
            <div className="menu-item-left">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="menu-icon">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="menu-item-text">Notifications</span>
            </div>
            <div className="menu-item-right-content">
              <span className="notification-badge-menu">3</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="menu-arrow">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>

          <button className="menu-item" onClick={() => handleMenuClick('connected-accounts')}>
            <div className="menu-item-left">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="menu-icon">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="menu-item-text">Connected Accounts</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="menu-arrow">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="menu-item" onClick={() => handleMenuClick('privacy')}>
            <div className="menu-item-left">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="menu-icon">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="menu-item-text">Privacy & Security</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="menu-arrow">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Support Section */}
        <div className="support-section-menu">
          <h3 className="support-title">Support</h3>
          
          <button className="menu-item" onClick={() => handleMenuClick('help')}>
            <div className="menu-item-left">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="menu-icon">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="menu-item-text">Help Center</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="menu-arrow">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="menu-item" onClick={() => handleMenuClick('terms')}>
            <div className="menu-item-left">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="menu-icon">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="menu-item-text">Terms & Privacy</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="menu-arrow">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="menu-item rate-item" onClick={() => handleMenuClick('rate')}>
            <div className="menu-item-left">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="menu-icon">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
              <span className="menu-item-text">Rate ChatQLM</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="menu-arrow">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Logout Button */}
        <button className="logout-btn" onClick={onLogout}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 17L2 17L2 3L7 3M13 13L17 9M17 9L13 5M17 9L7 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Log Out
        </button>
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav-menu">
        <button className="nav-item-menu" onClick={() => onNavigate('home')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="nav-label-menu">Home</span>
        </button>
        <button className="nav-item-menu" onClick={() => onNavigate('challenges')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="nav-label-menu">Challenges</span>
        </button>
        <button className="nav-item-menu" onClick={() => onNavigate('learn')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 16V12M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="nav-label-menu">Learn</span>
        </button>
        <button className="nav-item-menu" onClick={() => onNavigate('library')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="nav-label-menu">Library</span>
        </button>
        <button className="nav-item-menu active" onClick={() => onNavigate('profile')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span className="nav-label-menu">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default ProfileMenu; 