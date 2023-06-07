import React, { useState, useEffect } from "react";
import Vector from "../assets/Vector.png";
import Home from "../assets/Home.svg";
import Test from "../assets/Test.svg";
import Strategy from "../assets/Strategy.svg";
import Journal from "../assets/Jurnal.svg";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";

const navbar = () => {
  const LogOut = () => {
    localStorage.clear();
  };
  var Name = localStorage.getItem("name");
  return (
    <div>
      <div className="fixed grid text-center text-white justify-between font-medium h-full bg-blue w-36 items-center pt-20">
        <div className="pl-10 space-y-8">
          <div>
            <a href="/dashboard">
              <button className="hover:text-yellow">
                <img src={Home} alt="home logo" className="scale-50" />
                Home
              </button>
            </a>
          </div>
          <div>
            <a href="/introtest">
              <button className="hover:text-yellow">
                <img src={Test} alt="home logo" className="scale-50" />
                Test
              </button>
            </a>
          </div>
          <div>
            <a href="/rekomendasi">
              <button className="hover:text-yellow">
                <img src={Strategy} alt="home logo" className="scale-50" />
                Strategy
              </button>
            </a>
          </div>
          <div>
            <a href="/jurnal">
              <button className="hover:text-yellow">
                <img src={Journal} alt="home logo" className="scale-50" />
                Journal
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="h-1/8 fixed w-full flex justify-between items-center bg-gradient-to-r from-blue to-bluelight rounded-b-lg">
        <div className="flex text-white justify-between font-bold text-3xl ml-10 my-5">
          <div>
            <img src={Vector} alt="Logo" className="scale-50" />
          </div>
          <div className="mt-1 ml-1">Studylism</div>
        </div>
        <div>
          <div className="font-semibold flex justify-between text-lg space-x-14">
            <div className="bg-yellow flex items-center mr-8 gap-3 px-3 py-2 rounded-lg text-white">
              <a href="/login">
                <div onClick={() => LogOut()}>Log Out</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
