import React, { useState, useEffect } from 'react';
import './NonTrivialGame.css';

const NonTrivialGame = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameActive, setGameActive] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "Which tech company's stock surged 15% after announcing record AI revenue in Q4?",
      options: ["Microsoft", "Google", "Amazon", "Meta"],
      correct: 0
    },
    {
      question: "What was the Federal Reserve's latest interest rate decision in December 2024?",
      options: ["Raised by 0.25%", "Kept unchanged at 5.25%", "Lowered by 0.25%", "Raised by 0.50%"],
      correct: 1
    },
    {
      question: "Which major retailer announced plans to close 150 stores in 2025?",
      options: ["Walmart", "Target", "Macy's", "Kohl's"],
      correct: 2
    },
    {
      question: "What was Tesla's stock performance after the Cybertruck delivery event?",
      options: ["+8%", "-5%", "+12%", "-2%"],
      correct: 0
    },
    {
      question: "Which company's CEO stepped down amid regulatory pressure in December 2024?",
      options: ["OpenAI", "Binance", "FTX", "Coinbase"],
      correct: 1
    }
  ];

  useEffect(() => {
    // Start the game after animations complete
    const timer = setTimeout(() => {
      setShowGame(true);
    }, 10000); // 6 seconds for first two animations + 3 seconds for line-by-line + 1 second delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showGame && gameActive) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            timeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showGame, gameActive]);

  const startGame = () => {
    setGameActive(true);
    setTimeLeft(10);
  };

  const selectAnswer = (selectedIndex) => {
    if (!gameActive) return;
    
    setGameActive(false);
    const question = questions[currentQuestionIndex];
    
    if (selectedIndex === question.correct) {
      setScore(prev => prev + 1);
      setTimeout(() => {
        if (currentQuestionIndex + 1 >= questions.length) {
          endGame();
        } else {
          setCurrentQuestionIndex(prev => prev + 1);
          setTimeLeft(10);
          setGameActive(true);
        }
      }, 2000);
    } else {
      setTimeout(() => {
        endGame();
      }, 2000);
    }
  };

  const timeUp = () => {
    setGameActive(false);
    setTimeout(() => {
      endGame();
    }, 2000);
  };

  const endGame = () => {
    setShowGame(false);
    setShowResults(true);
  };

  const restartGame = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameActive(false);
    setShowResults(false);
    setShowGame(false);
    
    setTimeout(() => {
      setShowGame(true);
    }, 1000);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="non-trivial-page">
      <div className="game-card">
        <div className="game-header">
          <div className="game-title">
            <span className="flag-icon">🏁</span>
            Non Trivial #1
          </div>
          <button className="copy-score-btn">Copy score</button>
        </div>

        <div className="game-panel">
          <img src="/game-host.gif" alt="Game Host" className="game-gif" />
          <div className="game-overlay">
            <div className="overlay-text">You're playing Non-Trivial</div>
            <div className="overlay-text-2">A daily live trivia game, based on LinkedIn news and events</div>
            <div className="overlay-text-3">
              <div className="line">3.5 million live players</div>
              <div className="line">200 connections playing</div>
              <div className="line">How well do you rank?</div>
            </div>
          </div>
          
          {showGame && (
            <div className="game-interface">
              <div className="game-header">
                <div className="question-counter">Question {currentQuestionIndex + 1} of 5</div>
                <div className="timer">{timeLeft}</div>
              </div>
              <div className="question-text">{currentQuestion?.question}</div>
              <div className="options-container">
                {currentQuestion?.options.map((option, index) => (
                  <button
                    key={index}
                    className="option-btn"
                    onClick={() => selectAnswer(index)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {showResults && (
            <div className="results-screen">
              <div className="results-title">Game Complete!</div>
              <div className="score-display">{score}/5</div>
              <div className="rankings">
                <div className="ranking-item">
                  <div className="ranking-title">Global Rank</div>
                  <div className="ranking-value">#{Math.floor(Math.random() * 10000) + 1}</div>
                </div>
                <div className="ranking-item">
                  <div className="ranking-title">Network Rank</div>
                  <div className="ranking-value">#{Math.floor(Math.random() * 100) + 1}</div>
                </div>
              </div>
              <button className="play-again-btn" onClick={restartGame}>Play Again</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NonTrivialGame;
