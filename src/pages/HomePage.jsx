import React from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo from "../img/logo.png";

function HomePage() {
  return (
    <>
      <Header />
      <div
        className=" w-full  flex flex-col justify-center items-center"
        style={{
          height: "81vh",
          backgroundImage: `url(${Logo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="text-5xl text-slate-700 ">Welcome to Quiz!</div>
        <div className="text-2xl text-clip mb-10">5 Quetions, 5 Minutes</div>
        <div className="border-2 border-slate-300">
          <div className="h-30 w-66 m-1 flex justify-center items-center border-2 border-black">
            <Link
              to="/quiz"
              className="h-12 w-40 m-0 text-4xl text-center text-white rounded-sm bg-blue-600 shadow-lg shadow-slate-700 text-shadow hover:bg-slate-700 hover:shadow-black hover:shadow-md"
            >
              Start Quiz
            </Link>
          </div>
        </div>
        <div className="absolute top-2 right-10 border-2 border-slate-300">
          <div className="h-30 w-66 m-1 flex justify-center items-center border-2 border-black">
            <Link
              to="https://github.com/jalajsc/SpriteEra_QuizApp"
              className="h-12 w-60 m-0 text-4xl text-center text-white rounded-sm bg-slate-500 shadow-lg shadow-slate-700 text-shadow hover:bg-blue-700 hover:shadow-black hover:shadow-md"
            >
              GitHub Link
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
