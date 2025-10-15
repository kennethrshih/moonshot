import React from 'react';
import './FeedbackBar.css';

const FeedbackBar = () => {
  return (
    <div className="feedback-bar">
      <div className="feedback-text">Share feedback</div>
      <div className="version-labels">
        <div className="version-label">0.2.2722</div>
        <div className="version-label">0.1.16932+sdui-flagship.employee</div>
      </div>
    </div>
  );
};

export default FeedbackBar;

