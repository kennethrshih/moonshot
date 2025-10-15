import React from 'react';
import { Search, Home, Users, Briefcase, MessageCircle, Bell, ChevronDown, Grid3X3, User } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo and Search */}
        <div className="header-left">
          <div className="logo">
            <div className="linkedin-logo">in</div>
          </div>
          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="I'm looking for..." 
              className="search-input"
            />
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="header-nav">
          <div className="nav-item active">
            <Home size={24} />
            <span>Home</span>
          </div>
          <div className="nav-item">
            <Users size={24} />
            <span>My Network</span>
          </div>
          <div className="nav-item">
            <Briefcase size={24} />
            <span>Jobs</span>
          </div>
          <div className="nav-item">
            <MessageCircle size={24} />
            <span>Messaging</span>
          </div>
          <div className="nav-item">
            <Bell size={24} />
            <span>Notifications</span>
          </div>
        </nav>

        {/* Right Side Navigation */}
        <div className="header-right">
          <div className="nav-item">
            <div className="profile-avatar-small">
              <img src="/api/placeholder/32/32" alt="Profile" />
            </div>
            <span>Me</span>
            <ChevronDown size={16} />
          </div>
          <div className="nav-item">
            <Grid3X3 size={24} />
            <span>For Business</span>
            <ChevronDown size={16} />
          </div>
          <div className="nav-item">
            <User size={24} />
            <span>Recruiter</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

