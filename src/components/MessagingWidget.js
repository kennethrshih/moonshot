import React from 'react';
import { MoreHorizontal, Video, Minus } from 'lucide-react';
import './MessagingWidget.css';

const MessagingWidget = () => {
  return (
    <div className="messaging-widget">
      <div className="messaging-header">
        <div className="messaging-user">
          <div className="messaging-avatar">
            <img src="/api/placeholder/24/24" alt="User" />
          </div>
          <span className="messaging-label">Messaging</span>
        </div>
        <div className="messaging-actions">
          <button className="messaging-action">
            <MoreHorizontal size={16} />
          </button>
          <button className="messaging-action">
            <Video size={16} />
          </button>
          <button className="messaging-action">
            <Minus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessagingWidget;

