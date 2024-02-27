import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "../img/bg.jpg";

function FinalPage({
  score,
  selectedAnswer,
  data,
  saveTime,
  saveAnswer,
  saveScore,
  setSelectedAnswer,
  setTime,
}) {
  const navigate = useNavigate();
  const submitTime = 300 - Number(saveTime);
  const minute = Math.floor(submitTime / 60);
  const seconds = submitTime % 60;

  const quetions = data.map((value, index) => {
    return value.quetion;
  });

  const rightAns = data.map((value, index) => {
    return value.rightAnswer;
  });

  const answers = quetions.map((value, index) => {
    return (
      <div key={index} className="bg-green-200 border-2 border-slate-400">
        <p>{value}</p>
        <p className="text-sm">
          Your Answer:{saveAnswer[index]}{" "}
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Right Answer:
          {rightAns[index]}
        </p>
      </div>
    );
  });

  function handleReset() {
    localStorage.clear();
    navigate("/");
    setSelectedAnswer([]);
    setTime(300);
  }

  return (
    <div
      className="h-screen w-full flex flex-col justify-center items-center text-3xl text-white"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="text-5xl text-red-400 gap-x-48">
        Congratulations ! You have completed the quiz.
      </div>
      <div className="border-2 w-66 p-4 ">Your Score: {saveScore}</div>
      <div className="w-1/2 text-xl text-white">
        Answered Quetions:
        <div className=" border-2 border-slate-800 text-black ">{answers}</div>
      </div>
      <div className="border-2 border-slate-500">
        Time Taken: {minute}min:{seconds}sec
      </div>
      <button
        className="w-64 p-2 border-1 border-black rounded-lg bg-blue-400 hover:bg-slate-500 hover:translate-y-0.5 hover:shadow-xl hover:shadow-black"
        onClick={handleReset}
      >
        Reset Quiz!
      </button>
    </div>
  );
}

export default FinalPage;
