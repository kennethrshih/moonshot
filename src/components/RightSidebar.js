import React from 'react';
import { Link } from 'react-router-dom';
import { Info, ChevronRight, MoreHorizontal } from 'lucide-react';
import './RightSidebar.css';

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      {/* LinkedIn News */}
      <div className="news-section">
        <div className="section-header">
          <h4>LinkedIn News</h4>
          <Info size={16} className="info-icon" />
        </div>
        <div className="news-list">
          <div className="news-item">
            <div className="news-title">Big banks notch a boom quarter</div>
            <div className="news-meta">7m ago • 21,875 readers</div>
          </div>
          <div className="news-item">
            <div className="news-title">Walmart to allow ChatGPT checkout</div>
            <div className="news-meta">12m ago • 19,733 readers</div>
          </div>
          <div className="news-item">
            <div className="news-title">Shutdown hits government services</div>
            <div className="news-meta">15m ago • 8,900 readers</div>
          </div>
          <div className="news-item">
            <div className="news-title">Schultz on Starbucks' 'long game'</div>
            <div className="news-meta">10m ago • 995 readers</div>
          </div>
          <div className="news-item">
            <div className="news-title">Stellantis plans $13B US investment</div>
            <div className="news-meta">6m ago • 629 readers</div>
          </div>
        </div>
        <div className="show-more">
          <span>Show more</span>
        </div>
      </div>

      {/* Today's Puzzles */}
      <div className="puzzles-section">
        <div className="section-header">
          <h4>Today's puzzles</h4>
        </div>
        <div className="puzzles-list">
          <Link to="/nontrivial" className="puzzle-item">
            <div className="puzzle-icon">🧩</div>
            <div className="puzzle-info">
              <div className="puzzle-name">Non Trivial #1</div>
              <div className="puzzle-status">
                <span className="status-pill">Starting Soon</span>
              </div>
            </div>
            <ChevronRight size={16} className="puzzle-arrow" />
          </Link>
          <div className="puzzle-item">
            <div className="puzzle-icon">🔢</div>
            <div className="puzzle-info">
              <div className="puzzle-name">Mini Sudoku #64</div>
              <div className="puzzle-players">27 connections played</div>
            </div>
            <ChevronRight size={16} className="puzzle-arrow" />
          </div>
          <div className="puzzle-item">
            <div className="puzzle-icon">📦</div>
            <div className="puzzle-info">
              <div className="puzzle-name">Zip #211</div>
              <div className="puzzle-players">45 connections played</div>
            </div>
            <ChevronRight size={16} className="puzzle-arrow" />
          </div>
          <div className="puzzle-item">
            <div className="puzzle-icon">💃</div>
            <div className="puzzle-info">
              <div className="puzzle-name">Tango #372</div>
              <div className="puzzle-players">34 connections played</div>
            </div>
            <ChevronRight size={16} className="puzzle-arrow" />
          </div>
          <div className="puzzle-item">
            <div className="puzzle-icon">👑</div>
            <div className="puzzle-info">
              <div className="puzzle-name">Queens #532</div>
              <div className="puzzle-players">36 connections played</div>
            </div>
            <ChevronRight size={16} className="puzzle-arrow" />
          </div>
          <div className="puzzle-item">
            <div className="puzzle-icon">🧗</div>
            <div className="puzzle-info">
              <div className="puzzle-name">Crossclimb #532</div>
              <div className="puzzle-players">17 connections played</div>
            </div>
            <ChevronRight size={16} className="puzzle-arrow" />
          </div>
          <div className="puzzle-item">
            <div className="puzzle-icon">📍</div>
            <div className="puzzle-info">
              <div className="puzzle-name">Pinpoint #532</div>
              <div className="puzzle-players">18 connections played</div>
            </div>
            <ChevronRight size={16} className="puzzle-arrow" />
          </div>
        </div>
      </div>

      {/* Promoted Content */}
      <div className="promoted-section">
        <div className="promoted-header">
          <span className="promoted-label">Promoted</span>
          <MoreHorizontal size={16} />
        </div>
        <div className="promoted-content">
          <div className="promoted-title">Learn From CEOs</div>
          <div className="promoted-description">
            Gain real-world skills today from renowned CEOs and executives.
          </div>
          <div className="promoted-footer">
            <div className="connection-info">
              <div className="connection-avatar">
                <img src="/api/placeholder/16/16" alt="James" />
              </div>
              <span className="connection-text">
                James & 1 other connection also follow Jack Welch Management...
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Google Ad */}
      <div className="google-ad">
        <div className="ad-content">
          <div className="ad-title">Subscribe with Google.</div>
          <div className="ad-subtitle">Sale Offer: $1/Week</div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;

