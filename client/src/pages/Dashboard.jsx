import Group48 from "../assets/Group 48.png";
import Group_Default from "../assets/Group_Default.png";
import Group_Visual from "../assets/Group_Visual.png";
import Group_Kinestetik from "../assets/Group_Kinestetik.png";
import Navbar from "../component/navbar";
import ProgressBar from "../component/progress_bar";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import axios from "axios";
import Chat from "../component/chat";
import { GrFormNextLink } from "react-icons/gr";

function Dashboard() {
  const currentDate = dayjs();
  const [progress, setProgress] = useState("");
  const [selectDate, setSelectDate] = useState(currentDate);
  const [loading, setLoading] = useState(true);
  const [userID, setUserID] = useState("");
  const d = dayjs().date();
  const m = dayjs().month() + 1; //karena range 0-11. 0=januari dan 11=desember.
  const y = dayjs().year();

  useEffect(() => {
    const id = localStorage.getItem("userID");
    setUserID(id);
    (async () => {
      try {
        const response = await axios.post(
          "http://localhost:3001/journal/" + y + "/" + m + "/" + d,
          {
            _id: userID,
          }
        );

        // if (Array.isArray(response.data)) {
        // // setData(response.data);
        //     setProgress(response.data.progressByDay);
        // } else if (typeof response.data === 'object') {
        // // setData(Object.values(response.data));
        //     setProgress(Object.values(response.data.progressByDay));
        // }
        setProgress(response.data.progressByDay * 100);
        console.log(response.data.progressByDay);
        // console.log(progress);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    })();
  }, [userID, selectDate]);

  useEffect(() => {
    // lakukan sesuatu dengan progress yang baru
    console.log(progress);
  }, [progress]); // array dependensi

  var Name = localStorage.getItem("name");
  var LearningStyle = localStorage.getItem("learningStyle");
  var UserID = localStorage.getItem("userID");

  return (
    <div className="items-center">
      <Navbar />
      <Chat />
      <div className="flex pt-20 space-x-3 items-center pl-40">
        <div className="text-2xl flex-col space-y-10 my-30 pl-20 font-medium h-60 w-3/5 px-5 py-5 rounded-lg">
          <p className="text-2xl text-left h-[16px] py-1">Welcome, {Name}</p>
          {(LearningStyle == 0 && (
            <p className="text-xl text-left  h-[16px] py-1">
              Sudah tahu gaya belajarmu?
              <br />
              Cek gaya belajarmu dengan ikut test gaya belajar, yuk!
              <br />
            </p>
          )) ||
            (LearningStyle == 1 && (
              <p className="text-xl text-left  h-[16px] py-1">
                Hello, Sobat Auditori!
                <br />
                Sudah produktifkah kamu hari ini??
                <br />
                Yuk, catat kegiatan belajarmu di Fitur Jurnal!
                <br />
              </p>
            )) ||
            (LearningStyle == 2 && (
              <p className="text-xl text-left  h-[16px] py-1">
                Hello, Sobat Visual!
                <br />
                Sudah produktifkah kamu hari ini??
                <br />
                Yuk, catat kegiatan belajarmu di Fitur Jurnal!
                <br />
              </p>
            )) ||
            (LearningStyle == 3 && (
              <p className="text-xl text-left  h-[16px] py-1">
                Hello, Sobat Kinestetik!
                <br />
                Sudah produktifkah kamu hari ini??
                <br />
                Yuk, catat kegiatan belajarmu di Fitur Jurnal!
                <br />
              </p>
            ))}
        </div>
        {(LearningStyle == 0 && (
          <div className="ml-10">
            <img
              src={Group_Default}
              alt="Logo"
              class="h-[350px] w-[350px] ..."
            />
          </div>
        )) ||
          (LearningStyle == 1 && (
            <div className="ml-10">
              <img
                src={Group48}
                alt="Logo"
                class="h-[350px] w-[350px] scale-50 ..."
              />
            </div>
          )) ||
          (LearningStyle == 2 && (
            <div className="ml-10">
              <img
                src={Group_Visual}
                alt="Logo"
                class="h-[350px] w-[350px] ..."
              />
            </div>
          )) ||
          (LearningStyle == 3 && (
            <div className="ml-10">
              <img
                src={Group_Kinestetik}
                alt="Logo"
                class="h-[350px] w-[350px] ..."
              />
            </div>
          ))}
      </div>
      <div className="flex-col ml-60 font-medium text-xl bg-yellow h-fit mr-40 rounded-lg">
        <div>
          <p className="text-xl text-center pt-4">Your Study Progress</p>
          <div className="px-2 pr-20">
            <ProgressBar
              bgcolor="lightblue"
              progress={loading || isNaN(progress) ? 0 : progress}
              height={30}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="flex text-2xl ml-10 text-left mb-5">Keep Studying! </p>
          <a href="/Jurnal">
            <button className="bg-lightyellow flex items-center gap-3 px-3 py-1 rounded">
              Fill Your Journal
              <GrFormNextLink />
            </button>
          </a>
          <div>
            <p className="text-2xl text-center">or</p>
          </div>
          <a href="/Rekomendasi">
            <button className="bg-lightyellow flex items-center gap-3 px-3 py-1 rounded mr-20">
              Check Strategy
              <GrFormNextLink />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
