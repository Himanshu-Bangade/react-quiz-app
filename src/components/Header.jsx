import React from "react";

export default function Header({ onHome, showHome }) {
  return (
    <div className="header">
      <div className="brand">
        <div className="logo">QZ</div>
        <div>
          <div className="title">QuizMaster</div>
          <div style={{ color: "var(--muted)", fontSize: 13 }}>Learn, Practice & Score</div>
        </div>
      </div>

      <div className="header-actions">
        {showHome && (
          <button className="btn" onClick={onHome} aria-label="Back to home">
            Home
          </button>
        )}
      </div>
    </div>
  );
}
