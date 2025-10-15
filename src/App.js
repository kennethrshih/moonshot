import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import MainFeed from './components/MainFeed';
import RightSidebar from './components/RightSidebar';
import MessagingWidget from './components/MessagingWidget';
import FeedbackBar from './components/FeedbackBar';
import NonTrivialGame from './components/NonTrivialGame';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <FeedbackBar />
        <Header />
        <Routes>
          <Route path="/" element={
            <div className="main-container">
              <LeftSidebar />
              <MainFeed />
              <RightSidebar />
            </div>
          } />
          <Route path="/nontrivial" element={<NonTrivialGame />} />
        </Routes>
        <MessagingWidget />
      </div>
    </Router>
  );
}

export default App;

