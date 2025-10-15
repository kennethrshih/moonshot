import React from 'react';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import MainFeed from './components/MainFeed';
import RightSidebar from './components/RightSidebar';
import MessagingWidget from './components/MessagingWidget';
import FeedbackBar from './components/FeedbackBar';
import './App.css';

function App() {
  return (
    <div className="app">
      <FeedbackBar />
      <Header />
      <div className="main-container">
        <LeftSidebar />
        <MainFeed />
        <RightSidebar />
      </div>
      <MessagingWidget />
    </div>
  );
}

export default App;

