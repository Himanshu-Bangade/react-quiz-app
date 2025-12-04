import React, { useMemo, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import QUESTIONS from "./data/questions";

export default function App() {
  const categories = useMemo(() => QUESTIONS, []);
  const [view, setView] = useState("home"); // 'home' | 'quiz' | 'result'
  const [activeCategory, setActiveCategory] = useState(null);
  const [result, setResult] = useState(null);

  function startCategory(catId) {
    const cat = categories.find(c => c.id === catId);
    setActiveCategory(cat);
    setView("quiz");
  }

  function handleFinish(res) {
    setResult(res);
    setView("result");
  }

  function goHome() {
    setActiveCategory(null);
    setResult(null);
    setView("home");
  }

  function retry() {
    // restart same category
    if (activeCategory) {
      setResult(null);
      setView("quiz");
    } else {
      goHome();
    }
  }

  return (
    <div className="app">
      <Header onHome={goHome} showHome={view !== "home"} />

      {view === "home" && <Home categories={categories} onStart={startCategory} />}

      {view === "quiz" && activeCategory && (
        <Quiz category={activeCategory} onFinish={handleFinish} onHome={goHome} />
      )}

      {view === "result" && result && (
        <Result result={result} onRestart={retry} onHome={goHome} />
      )}
    </div>
  );
}
