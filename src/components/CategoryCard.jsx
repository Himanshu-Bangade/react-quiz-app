import React from "react";

export default function CategoryCard({ cat, onStart }) {
  return (
    <div className="card fade-in">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div className="cat-icon">{cat.title.charAt(0)}</div>
        <div>
          <div className="cat-title">{cat.title}</div>
          <div className="cat-desc">{cat.description}</div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 6 }}>
        <div style={{ color: "var(--muted)", fontSize: 13 }}>{cat.questions.length} Qs</div>
        <button className="start-btn" onClick={() => onStart(cat.id)}>Start</button>
      </div>
    </div>
  );
}
