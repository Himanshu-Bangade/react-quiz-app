import React from "react";

export default function Result({ result, onRestart, onHome }) {
  const { score, total } = result;
  const pct = Math.round((score / total) * 100);

  return (
    <div className="result fade-in">
      <div style={{ fontSize: 14, color: "var(--muted)" }}>Quiz Completed</div>
      <div className="score">{score} / {total}</div>
      <div style={{ marginBottom: 14, fontWeight: 600 }}>{pct}%</div>
      <div className="summary">Great job. Review the questions and try to improve your score next time!</div>

      <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center" }}>
        <button className="btn" onClick={onHome}>Home</button>
        <button className="btn primary" onClick={onRestart}>Retry</button>
      </div>
    </div>
  );
}
