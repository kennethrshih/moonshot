import React from 'react';
import { Play, Camera, FileText, ChevronDown, Globe, MoreHorizontal, X, ArrowRight } from 'lucide-react';
import './MainFeed.css';

const MainFeed = () => {
  return (
    <div className="main-feed">
      {/* Start a Post Section */}
      <div className="start-post-card">
        <div className="post-input-container">
          <div className="user-avatar">
            <img src="/api/placeholder/48/48" alt="User" />
          </div>
          <button className="post-input">
            Start a post
          </button>
        </div>
        <div className="post-options">
          <button className="post-option">
            <div className="option-icon video-icon">
              <Play size={20} />
            </div>
            <span>Video</span>
          </button>
          <button className="post-option">
            <div className="option-icon photo-icon">
              <Camera size={20} />
            </div>
            <span>Photo</span>
          </button>
          <button className="post-option">
            <div className="option-icon article-icon">
              <FileText size={20} />
            </div>
            <span>Write article</span>
          </button>
        </div>
      </div>

      {/* Feed Sort */}
      <div className="feed-sort">
        <div className="sort-option">
          Sort by: <strong>Top</strong>
          <ChevronDown size={16} />
        </div>
      </div>

      {/* Feed Post */}
      <div className="feed-post">
        <div className="post-header">
          <div className="post-author">
            <div className="author-avatar">
              <img src="/api/placeholder/48/48" alt="Aakash Gupta" />
            </div>
            <div className="author-info">
              <div className="author-name">
                Aakash Gupta
                <span className="linkedin-icon">in</span>
                <span className="author-badge">1st</span>
              </div>
              <div className="author-title">The AI PM Guy</div>
              <div className="author-description">Helping you land your next job + succeed in your...</div>
              <div className="author-link">
                View my newsletter
                <span className="rocket-icon">🚀</span>
              </div>
            </div>
          </div>
          <div className="post-actions">
            <button className="post-action">
              <MoreHorizontal size={20} />
            </button>
            <button className="post-action">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="post-meta">
          <span className="post-time">
            <Globe size={14} />
            37m
          </span>
        </div>

        <div className="post-content">
          <p className="post-text">
            Product discovery is the number 1 skill for PMs.
          </p>
          <p className="post-cta">
            Here's how to use AI to 10x your discovery:... <span className="more-link">more</span>
          </p>
        </div>

        {/* Embedded Content Card */}
        <div className="embedded-card">
          <div className="card-header">
            <span className="card-title">How to Do Product Discovery in the AI Era</span>
            <span className="card-pages">11 pages</span>
          </div>
          <div className="card-content">
            <div className="card-image">
              <div className="card-overlay">
                <div className="card-main-title">
                  How to Do Product Discovery in the AI Era
                  <span className="highlight">Discovery in the AI Era</span>
                </div>
                <div className="card-author">Written by Aakash Gupta</div>
                <div className="card-arrow">
                  <ArrowRight size={24} />
                </div>
              </div>
              <div className="sticky-notes">
                <div className="note note-1">FEEDBACK</div>
                <div className="note note-2">FEEDBACK</div>
                <div className="note note-3">FEEDBACK</div>
                <div className="note note-4">FEEDBACK</div>
                <div className="note note-5">FEEDBACK</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFeed;

