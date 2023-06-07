import React, { useState } from "react";
import { generateDate, months } from "../component/calendar";
import dayjs from "dayjs";
import cn from "../component/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import AddJurnal from "../component/addjurnal";
import Navbar from "../component/navbar";
import { useEffect } from "react";
import axios from "axios";
import TaskCard from "../component/taskCard";

export default function Jurnal() {
    console.log(generateDate());
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);
    const [selectDate, setSelectDate] = useState(currentDate);
    const [status, setStatus] = useState(true);
    const [showAddJurnal, setShowAddJurnal] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [apiEndpoint, setApiEndpoint] = useState('');
    // const [userID, setUserID] = useState('');
    const [progress, setProgress] = useState('');
    const [dataToShow, setDataToShow] = useState({data:{
        _id: ""
      }})

  const BASE_API_URL = "http://localhost:3001";

    const handleOnClose = () => setShowAddJurnal(false);

    const handleClick = (data) => (
        setDataToShow(data)
    )
    
    const handleChange=(data)=>{
        console.log(data)
    }

    useEffect(() => {
        // const ep = BASE_API_URL.join("/").join(today.year).join("/").join(today.month).join("/").join(today.date);
        // const ep = `${BASE_API_URL}/journal/${today.year}/${today.month}/${today.day}`
        const userID = localStorage.getItem("userID");
        // setUserID(id);
        console.log(userID);

        // const y = today.get('year');
        // const m = today.get('month')+1;
        // const d = today.get('date');
        const y = selectDate.$d;
        const m = selectDate.$m;
        const d = selectDate.$y;
        const ep = `${BASE_API_URL}/journal/${selectDate.get('year')}/${selectDate.get('month')+1}/${selectDate.get('date')}`
        // setApiEndpoint(ep);
        console.log(ep);
        
        (async () => {
            try {
                const response = await axios.post(ep , {
                    _id: userID
                });
                // console.log(response.data);
                // console.log(response.data.resultByDay);
                // console.log(response.data.progressByDay);
                if (Array.isArray(response.data)) {
                    setData(response.data.resultByDay);
                } else if (typeof response.data === 'object') {
                    setData(Object.values(response.data.resultByDay));
                    // setProgress(Object.values(response.data.progressByDay));
                }
                setProgress(response.data.progressByDay)
                // console.log(progress)
                // console.log(selectDate);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
          })()
    }, [selectDate] );

  return (
    <div>
        <Navbar></Navbar>
        <div className="flex w-1/2 mx-auto divide-x-2 gap-10 h-screen pt-20 items-center">
            <div className="w-96 h-96">
                <div className="flex justify-between">
                    <h1 className="font-semibold">
                        {months[today.month()]}, {today.year()} 
                    </h1>
                    <div className="flex items-center gap-5">
                        <GrFormPrevious 
                            className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                            onClick={() => {
                                setToday(today.month(today.month()-1));
                            }}
                        />
                        <h1 className="cursor-pointer hover:scale-105 transition-all"
                            onClick={() => {
                                setToday(currentDate)
                                setSelectDate(currentDate);
                            }}
                        >
                            Today
                        </h1>
                        <GrFormNext 
                            className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                            onClick={() => {
                                setToday(today.month(today.month() +1));
                            }}
                        />
                    </div>
                </div>
                <div className="w-full grid grid-cols-7 font-medium">
                    {days.map((day,index) => {
                        return (
                            <h1 key={index} className="h-14 w-14 grid place-content-center text-sm text-center">
                                {day}
                            </h1>
                        );
                    })}
                </div>
                <div className="w-full grid grid-cols-7">
                    {generateDate(today.month(), today.year()).map(
                        ({ date, currentMonth, today }, index) => {
                            return (
                                <div 
                                    key={index}
                                    className="p-2 h-14 border-t grid place-content-center text-sm"
                                >
                                    <h1 
                                    className={cn(
                                        currentMonth ? "" : "text-gray",
                                        today 
                                            ? "bg-yellow text-white"
                                            : "",
                                        selectDate
                                            .toDate()
                                            .toDateString() ===
                                            date.toDate().toDateString()
                                            ? "bg-yellow text-white"
                                            : "",
                                        "h-10 w-10 rounded-full grid place-content-center transition-all cursor-pointer select-none"
                                    )}
                                    onClick={() => {
                                        setSelectDate(date);
                                    }}
                                >
                                    {date.date()}
                                </h1>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="h-96 w-96 px-5 py-5 bg-lightblue rounded-lg items-center">
                <div className="flex justify-between">
                    <div>
                        <h1 className="font-medium text-2xl">
                        Today Task
                        </h1>
                        {selectDate.toDate().toDateString()}
                    </div>
                    <div className="font-medium text-xl">
                        <div>
                            Progress
                        </div>
                        <h1>
                            {loading || isNaN(progress) ? 0 :  progress*100}%
                        </h1>
                    </div>
                </div>
                <button 
                    onClick={() => setShowAddJurnal(true)}
                    className="h-8 w-14 bg-white flex items-center rounded-lg mt-3">
                    <AiOutlinePlus className="ml-1" />
                    <div>
                        Add
                    </div>
                </button>
                <div className="overflow-y-scroll w-full h-56 flex-cols mt-3">
                    <div className="space-y-4">
                        {loading ? (
                                <p>Loading data...</p>
                            ) : data.length > 0 ? (
                                data.map((data) => (
                                <TaskCard
                                    key={data._id}
                                    title={data.title}
                                    description={data.description}
                                />
                                ))
                            ) : (
                                <p>No data available</p>
                            )
                        }
                    </div>
                </div>
            </div>
        <AddJurnal onClose={handleOnClose} visible={showAddJurnal} />
        </div>
    </div>
  );
}
