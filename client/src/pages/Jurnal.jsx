import React, { useState } from "react";
import { generateDate, months } from "../component/calendar";
import dayjs from "dayjs";
import cn from "../component/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function Jurnal() {
    console.log(generateDate());
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);

    return (
    <div className="flex w-1/2 mx-auto divide-x-2 gap-10 h-screen items-center">
        <div className="w-96 h-96">
            <div className="flex justify-between">
                <h1 className="font-semibold">
                    {months[today.month()]}, {today.year()} 
                </h1>
                <div className="flex items-center gap-5">
                    <GrFormPrevious className="w-5 h-5 cursor-pointer"/>
                        <h1 className="cursor-pointer">Today</h1>
                    <GrFormNext className="w-5 h-5 cursor-pointer"/>
                </div>
            </div>
            <div className="w-full grid grid-cols-7 font-medium">
                {days.map((day,index) => {
                    return (
                        <h1 key={index} className="h-14 grid place-content-center text-sm">
                            {day}
                        </h1>
                    );
                })}
            </div>
            <div className="w-full grid grid-cols-7">
                {generateDate().map(({ date, currentMonth, today }, index) => {
                    return (
                        <div 
                            key={index}
                            className="h-14 border-t grid place-content-center text-sm"
                        >
                            <h1 
                                className={cn(
                                    currentMonth ? "" : "text-gray",
                                    today ? "bg-red text-white" : "",
                                    "h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer"
                                )}
                            >
                                {date.date()}
                            </h1>
                        </div>
                    );
                })}
            </div>
        </div>
        <div className="h-96 w-96 px-5 py-5 bg-lightblue rounded-lg place-content-center">
            <div className="flex justify-between">
                <h1 className="font-medium text-2xl">
                    Today Task
                </h1>
                <div className="font-medium text-xl">
                    <div>
                        Progress
                    </div>
                </div>
            </div>
            There's no task today.
        </div>
    </div>
    )
}