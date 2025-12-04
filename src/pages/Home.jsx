import React from "react";
import CategoryCard from "../components/CategoryCard";

export default function Home({ categories, onStart }) {
  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <h2 style={{ margin: 0, fontFamily: "Roboto Slab, serif" }}>Choose a category</h2>
        <div style={{ color: "var(--muted)", marginTop: 6 }}>Pick any category and press Start to begin the quiz.</div>
      </div>

      <div className="grid">
        {categories.map(cat => (
          <CategoryCard key={cat.id} cat={cat} onStart={onStart} />
        ))}
      </div>

      <div className="footer-note">Responsive, animated cards. Questions are 60 seconds each.</div>
    </div>
  );
}
