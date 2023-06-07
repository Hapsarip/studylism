import React from "react";
import Group48 from "../assets/Group 48.png";
import Group_Default from "../assets/Group_Default.png";
import Group_Visual from "../assets/Group_Visual.png";
import Group_Kinestetik from "../assets/Group_Kinestetik.png";
import Navbar from "../component/navbar";
import Info_gb_audio from "../component/info_gb_audio";
import Info_gb_visual from "../component/info_gb_visual";
import Info_gb_kinetik from "../component/info_gb_kinetik";
import Tips_audio from "../component/tips_audio";
import Tips_Visual from "../component/tips_visual";
import Tips_kinetik from "../component/tips_kinetik";

function Rekomendasi() {
  var LearningStyle = localStorage.getItem("learningStyle");
  var UserID = localStorage.getItem("userID");
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <div className="flex text-black w-3/5 justify-between font-bold text-2xl pl-2 ">
          {(LearningStyle == 0 && (
            <h1
              style={{
                color: "black",
                marginLeft: "12rem",
                marginTop: "8rem",
                marginBottom: "1rem",
              }}
            >
              Ingin Tahu Rekomendasi Gaya Belajar? Test Gaya Belajarmu Dulu,
              Yuk!
            </h1>
          )) ||
            (LearningStyle == 1 && (
              <h1
                style={{
                  color: "black",
                  marginLeft: "12rem",
                  marginTop: "8rem",
                  marginBottom: "1rem",
                }}
              >
                Auditori
              </h1>
            )) ||
            (LearningStyle == 2 && (
              <h1
                style={{
                  color: "black",
                  marginLeft: "12rem",
                  marginTop: "8rem",
                  marginBottom: "1rem",
                }}
              >
                Visual
              </h1>
            )) ||
            (LearningStyle == 3 && (
              <h1
                style={{
                  color: "black",
                  marginLeft: "12rem",
                  marginTop: "8rem",
                  marginBottom: "1rem",
                }}
              >
                Kinestetik
              </h1>
            ))}
        </div>
        <div className="flex">
          {(LearningStyle == 0 && (
            <div className="flex">
              <div className="flex my-20 ml-[300px] font-medium text-xl bg-white h-80 w-[1500px] px-5 py-5 rounded-lg"></div>
              <div className="ml-40">
                <img
                  src={Group_Default}
                  alt="Logo"
                  class="object-cover h-[500px] w-[500px] ..."
                />
              </div>
            </div>
          )) ||
            (LearningStyle == 1 && (
              <div className="flex">
                <Info_gb_audio/>
                <div className="px-10">
                  <img className="w-[350px]" src={Group48} alt="Logo" />
                </div>
              </div>
            )) ||
            (LearningStyle == 2 && (
              <div className="flex">
                <Info_gb_visual/>
                <div>
                  <img className="w-[400px]" src={Group_Visual} alt="Logo" />
                </div>
              </div>
            )) ||
            (LearningStyle == 3 && (
              <div className="flex">
                <Info_gb_kinetik/>
                <div>
                  <img className="w-[400px]" src={Group_Kinestetik} alt="Logo" />
                </div>
              </div>
            ))}
        </div>

        <div className="flex text-black justify-between font-bold text-2xl pl-2">
          {(LearningStyle == 0 && <div></div>) ||
            (LearningStyle == 1 && (
              <div>
                <h2
                  style={{
                    color: "black",
                    marginLeft: "12rem",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  Strategi Gaya Belajar
                </h2>
                <Tips_audio></Tips_audio>
              </div>
            )) ||
            (LearningStyle == 2 && (
              <div>
                <h2
                  style={{
                    color: "black",
                    marginLeft: "12rem",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  Strategi Gaya Belajar
                </h2>
                <Tips_Visual></Tips_Visual>
              </div>
            )) ||
            (LearningStyle == 3 && (
              <div>
                <h2
                  style={{
                    color: "black",
                    marginLeft: "12rem",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  Strategi Gaya Belajar
                </h2>
                <Tips_kinetik></Tips_kinetik>
                
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}

export default Rekomendasi;
