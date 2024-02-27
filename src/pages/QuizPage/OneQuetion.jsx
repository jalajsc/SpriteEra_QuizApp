import React from "react";
import { useState } from "react";

function OneQuetion({
  quetions,
  ind,
  setScore,
  setSelectedAnswer,
  selectedAnswer,
}) {
  const { quetion, rightAnswer, Answer } = quetions;

  const [numberAnswer, setNumberAnswer] = useState(null);
  const hasAnswer = numberAnswer != null;
  const handleAnswer = (index) => {
    setNumberAnswer(index);
    const updateaAns = [...selectedAnswer];
    updateaAns[ind] = Answer[index];
    setSelectedAnswer(updateaAns);
    if (rightAnswer === Answer[index]) {
      setScore((prevScore) => prevScore + 1);
    }
  };
  const answerButton = Answer.map((Ans, index) => {
    return (
      <button
        key={index}
        className={`btn btn-primary  border-2 rounded-sm p-4 ${
          index === numberAnswer ? "bg-slate-400" : "bg-white"
        } `}
        onClick={() => handleAnswer(index)}
      >
        {Ans}
      </button>
    );
  });
  return (
    <div className="w-1/2 flex flex-col bg-transparent border-2 border-slate-500 rounded-l bg-green-100 shadow-xl">
      <p className="text-lg ">
        Question {ind + 1}: {quetion}
      </p>
      <div className="flex flex-col justify-around mt-2">
        <p className="flex flex-col p-4 m-2">{answerButton}</p>
      </div>
    </div>
  );
}

export default OneQuetion;
