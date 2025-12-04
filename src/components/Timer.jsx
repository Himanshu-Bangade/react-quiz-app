import React from "react";

export default function Timer({ timeLeft, total = 60 }) {
  const pct = Math.max(0, (timeLeft / total) * 100);

  // format mm:ss
  const mm = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const ss = String(timeLeft % 60).padStart(2, "0");

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div className="timer">
        <div className="time">{mm}:{ss}</div>
        <div style={{ width: 180 }}>
          <div className="progress-bar" aria-hidden>
            <div className="progress" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
