import React, { useEffect, useState, useRef } from "react";
import Timer from "../components/Timer";

export default function Quiz({ category, onFinish, onHome }) {
  const questions = category.questions;
  const totalQuestions = questions.length;

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const timerRef = useRef();

  // start/reset timer whenever index changes
  useEffect(() => {
    setSelected(null);
    setTimeLeft(60);
    // clear previous
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [index]);

  // when timeLeft reaches 0 auto move next
  useEffect(() => {
    if (timeLeft <= 0) {
      handleNext();
    }
  }, [timeLeft]);

  function handleSelect(i) {
    if (selected !== null) return; // lock once selected
    setSelected(i);
    const correct = questions[index].correctIndex === i;
    if (correct) setScore(s => s + 1);
    // automatically move to next after short delay so user sees selection
    setTimeout(() => {
      handleNext();
    }, 700);
  }

  function handleNext() {
    // clear timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (index + 1 < totalQuestions) {
      setIndex(idx => idx + 1);
    } else {
      // finish quiz
      onFinish({ score, total: totalQuestions });
    }
  }

  const cur = questions[index];

  return (
    <div className="quiz fade-in">
      <div className="meta">
        <div>
          <div style={{ fontSize: 13, color: "var(--muted)" }}>{category.title}</div>
          <div style={{ fontWeight: 700, fontSize: 14 }}>{index + 1} of {totalQuestions} questions</div>
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div className="meta-right">
            <div style={{ color: "var(--muted)", fontSize: 13 }}>Score</div>
            <div style={{ fontWeight: 800, fontSize: 18 }}>{score}</div>
          </div>

          <Timer timeLeft={timeLeft} total={60} />
        </div>
      </div>

      <div style={{ marginTop: 8 }}>
        <div className="question">{cur.question}</div>

        <div className="options">
          {cur.options.map((opt, i) => {
            const isSelected = selected === i;
            const classes = "option-btn" + (isSelected ? " selected" : "");
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={classes}
                aria-pressed={isSelected}
              >
                <div className="option-letter">{String.fromCharCode(65 + i)}</div>
                <div style={{ flex: 1 }}>{opt}</div>
              </button>
            );
          })}
        </div>

        <div className="controls">
          <div>
            <button className="btn" onClick={onHome}>Quit</button>
          </div>

          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{ color: "var(--muted)", fontSize: 13, textAlign: "right" }}>
              Time per question: 60s
            </div>
            <div>
              <button
                className="btn primary"
                onClick={handleNext}
                aria-label="Next question"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
