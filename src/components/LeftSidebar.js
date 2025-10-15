import React from 'react';
import { Star, Megaphone, Users, Newspaper, Calendar, User } from 'lucide-react';
import './LeftSidebar.css';

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      {/* User Profile Card */}
      <div className="profile-card">
        <div className="profile-banner">
          <div className="premium-badge">Premium</div>
        </div>
        <div className="profile-content">
          <div className="profile-avatar">
            <img src="/api/placeholder/72/72" alt="Kenneth Shih" />
          </div>
          <div className="profile-info">
            <h3 className="profile-name">
              Kenneth Shih
              <span className="linkedin-icon">in</span>
            </h3>
            <p className="profile-title">Product @ Linkedin</p>
            <p className="profile-location">Los Angeles, California</p>
            <div className="profile-link">
              <span className="linkedin-icon">in</span>
              LinkedIn
            </div>
          </div>
        </div>
      </div>

      {/* Profile Analytics */}
      <div className="analytics-section">
        <div className="analytics-item">
          <span className="analytics-number">286</span>
          <span className="analytics-label">Profile viewers</span>
        </div>
        <div className="analytics-item">
          <span className="analytics-number">1,106</span>
          <span className="analytics-label">Post impressions</span>
        </div>
        <button className="recruiter-button">
          <User size={16} />
          Go to Recruiter
        </button>
      </div>

      {/* My Pages Section */}
      <div className="section">
        <div className="section-header">
          <h4>My pages (2)</h4>
        </div>
        <div className="section-item">
          <div className="item-icon flag-icon">🏳️</div>
          <div className="item-content">
            <span className="item-title">Preferred Nation</span>
            <span className="item-subtitle">Visitors 13</span>
          </div>
        </div>
        <div className="section-item">
          <div className="item-icon purple-icon"></div>
          <div className="item-content">
            <span className="item-title">LB Brands</span>
            <span className="item-subtitle">Activity 0</span>
          </div>
        </div>
      </div>

      {/* Grow Your Business Faster */}
      <div className="section">
        <div className="section-header">
          <h4>Grow your business faster</h4>
        </div>
        <div className="section-item">
          <Star size={20} className="item-icon" />
          <span className="item-title">Try Premium Page</span>
        </div>
        <div className="section-item">
          <Megaphone size={20} className="item-icon" />
          <span className="item-title">Advertise on LinkedIn</span>
        </div>
      </div>

      {/* Saved Items */}
      <div className="section">
        <div className="section-header">
          <h4>Saved items</h4>
        </div>
        <div className="section-item">
          <Users size={20} className="item-icon" />
          <span className="item-title">Groups</span>
        </div>
        <div className="section-item">
          <Newspaper size={20} className="item-icon" />
          <span className="item-title">Newsletters</span>
        </div>
        <div className="section-item">
          <Calendar size={20} className="item-icon" />
          <span className="item-title">Events</span>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;

