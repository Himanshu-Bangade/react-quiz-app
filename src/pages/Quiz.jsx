import React, { useEffect, useState, useRef } from "react";
import Timer from "../components/Timer";

export default function Quiz({ category, onFinish, onHome }) {
  const questions = category.questions;
  const totalQuestions = questions.length;

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null); // current (editable) selection
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [locked, setLocked] = useState(false); // prevents double-advance
  const timerRef = useRef();

  // Reset selection, locked state and timer whenever index changes
  useEffect(() => {
    setSelected(null);
    setTimeLeft(60);
    setLocked(false);

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [index]);

  // When timer expires, finalize current selection and advance
  useEffect(() => {
    if (timeLeft <= 0 && !locked) {
      handleNext();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  // User can change selection while the question is active (not locked)
  function handleSelect(i) {
    if (locked) return; // defensive: don't allow when question already finalized
    setSelected(i);
    // Do NOT update score here; scoring is applied when Next / timeout happens.
  }

  // Finalize the answer (count score if selected is correct) and move next / finish
  function handleNext() {
    if (locked) return; // prevent re-entry
    setLocked(true);

    // stop timer for this question
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    // If user selected an option, update score based on the final selection
    const cur = questions[index];
    if (selected !== null && selected === cur.correctIndex) {
      setScore(prev => prev + 1);
    }

    // Move to next question or finish
    if (index + 1 < totalQuestions) {
      // small delay helps visual feedback (optional)
      setTimeout(() => {
        setIndex(idx => idx + 1);
        // index change effect will reset locked/select/timer
      }, 150);
    } else {
      // finish immediately
      // pass final score and total number of questions
      setTimeout(() => {
        onFinish({ score: selected !== null && selected === cur.correctIndex ? score + 1 : score, total: totalQuestions });
      }, 80);
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
            // visual style: selected class is applied while editable; once locked you might optionally show correctness
            const classes = "option-btn" + (isSelected ? " selected" : "");
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={classes}
                aria-pressed={isSelected}
                // do NOT disable; allow changing selection until Next or timeout
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
                // Optionally disable Next until the user selects an option:
                // disabled={selected === null}
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
