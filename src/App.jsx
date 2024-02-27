import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import FinalPage from "./pages/FinalPage";
import useLocalStorage from "./Hooks/useLocalStorage";

const data = [
  {
    quetion: "How many faces does a decahedron have?",
    rightAnswer: "12",
    Answer: ["10", "8", "14", "12"],
  },
  {
    quetion: "What is the largest animal in the world?",
    rightAnswer: "blue whale",
    Answer: ["elephant", "blue whale", "brown bear", "giraffe"],
  },
  {
    quetion: "How long is an hour in minutes?",
    rightAnswer: "60",
    Answer: ["10", "100", "60", "1000"],
  },
  {
    quetion: "What is the 6th letter in the alphabet?",
    rightAnswer: "F",
    Answer: ["F", "E", "G", "M"],
  },
  {
    quetion: "How many days make up a week?",
    rightAnswer: "Seven",
    Answer: ["Six", "Five", "Ten", "Seven"],
  },
];

function App() {
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [time, setTime] = useState(300);
  const [saveTime, setSaveTime] = useLocalStorage("time", 0);
  const [saveAnswer, setSaveAnswer] = useLocalStorage("answer", [
    "",
    "",
    "",
    "",
    "",
  ]);
  const [saveScore, setSaveScore] = useLocalStorage("score", 0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/quiz"
          element={
            <QuizPage
              score={score}
              setScore={setScore}
              setSelectedAnswer={setSelectedAnswer}
              selectedAnswer={selectedAnswer}
              data={data}
              time={time}
              setTime={setTime}
              setSaveTime={setSaveTime}
              setSaveAnswer={setSaveAnswer}
              setSaveScore={setSaveScore}
            />
          }
        />
        <Route
          path="/final"
          element={
            <FinalPage
              score={score}
              selectedAnswer={selectedAnswer}
              data={data}
              saveTime={saveTime}
              saveAnswer={saveAnswer}
              saveScore={saveScore}
              setSelectedAnswer={setSelectedAnswer}
              setTime={setTime}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
