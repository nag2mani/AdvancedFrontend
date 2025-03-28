import React from 'react';
import './CustomStyles.css';

function Sidebar({ isDarkMode, onThemeToggle, chatHistory, user }) {
  return (
    <div className="sidebar">

      {/* Theme toggle section */}
      <div className="sidebar-section">
        <h3>Settings</h3>
        <label className="theme-toggle">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={onThemeToggle}
          />
          Dark Mode
        </label>
      </div>

      {/* Chat history section */}
      <div className="sidebar-section">
        <h3>Chat History</h3>
        <div className="chat-history-container">
          <ul className="chat-history">
            {chatHistory.length === 0 ? (
              <li>No chat history</li>
            ) : (
              chatHistory.map((msg, index) => (
                <li key={index} className={`history-item ${msg.sender}`}>
                  {msg.sender}: {msg.text}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      {/* user section */}
      <div className="sidebar-section">
        <h3>User Profile</h3>
        <h6>{user}</h6>
      </div>
    </div>
  );
}

export default Sidebar;

