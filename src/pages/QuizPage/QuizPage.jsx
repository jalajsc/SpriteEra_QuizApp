import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import OneQuetion from "./OneQuetion";
import Timer from "../../components/Timer";
import Logo from "../../img/logo.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function QuizPage({
  score,
  setScore,
  setSelectedAnswer,
  selectedAnswer,
  data,
  time,
  setTime,
  setSaveTime,
  setSaveAnswer,
  setSaveScore,
}) {
  const navigate = useNavigate();

  const quetionElement = data.map((quetions, index) => {
    return (
      <OneQuetion
        key={index}
        quetions={quetions}
        ind={index}
        setScore={setScore}
        setSelectedAnswer={setSelectedAnswer}
        selectedAnswer={selectedAnswer}
      />
    );
  });

  function handleSubmit() {
    setSaveTime(time);
    setSaveAnswer(selectedAnswer);
    setSaveScore(score);
    navigate("/final");
  }

  return (
    <>
      <Header />
      <div
        className="h-screen w-full bg-gray-700 flex flex-col items-center overflow-auto"
        style={{
          height: "81vh",
          // backgroundImage: `url(${Logo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-1/2 flex flex-col items-center border-l-indigo-300 bg-indigo-100">
          {quetionElement}
        </div>
        <button
          onClick={handleSubmit}
          className="w-36 bg-blue-500 text-white rounded-lg p-4 flex justify-center mt-4 hover:bg-blue-700"
        >
          Submit
        </button>
        <div className="absolute right-20 top-20 z-10">
          <Timer time={time} setTime={setTime} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default QuizPage;
