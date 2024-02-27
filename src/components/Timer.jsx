import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TimerPage({ time, setTime }) {
  const navigate = useNavigate();
  const minute = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (time === 0) {
      navigate("/final");
    }
  }, [time, navigate]);

  return (
    <div
      className={`p-3 bg-slate-200 text-3xl border-2 border-slate-700 rounded-full ${
        time < 60 ? "text-red-500" : "text-slate-900"
      }`}
    >
      {minute < 10 && "0"}
      {minute}: {seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default TimerPage;
