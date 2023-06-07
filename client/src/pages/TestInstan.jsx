import Group48 from "../assets/Group 48.png";
import Group_Default from "../assets/Group_Default.png"
import Group_Visual from "../assets/Group_Visual.png"
import Group_Kinestetik from "../assets/Group_Kinestetik.png"
import Navbar from "../component/navbar";
import Progress_bar from "../component/progress_bar";
import React, {useState, useEffect} from 'react';
import dayjs from "dayjs";
import axios from 'axios';

function TestInstan () {

    return (
        <div>
            <Navbar/>
            <main>
            <div className="flex flex-col items-center pt-60 space-x-3">
            </div>

            <div className="flex flex-col justify-items-center w-full h-screen pl-[110px] pt-[120px]">
                
            
            <div className="flex-col space-y-10 my-[100px] ml-[300px] font-medium text-xl bg-yellow h-[250px] w-[1100px] px-5 py-5 rounded-lg">
                <div>
                    <p className="text-4xl text-center  h-[16px] py-1">Input a Description of Yourself!</p>
                    
                </div>
                    <div className="flex space-x-10 px-5">
                        <div className="flex bg-lightyellow rounded-lg w-[3000px] h-[150px]">
                        <p className="text-2xl text-center  h-[16px] px-5 py-1" >
                        </p>
                        </div>
                    </div>
            </div>
            <div>
                <button className="flex-col bg-black rounded-lg w-[200px] h-[40px] text-2xl text-white  px-60 py-1">
                Test
                </button>
            </div>
            <div className="flex-col space-y-10 mt-20 my-[100px] ml-[300px] font-medium text-xl bg-blue h-[200px] w-[1100px] px-5 py-5 rounded-lg">
                <div>
                    <p className="text-4xl text-center text-white  h-[16px] py-1">Result</p>
                    
                </div>
                    <div className="flex space-x-10 px-5">
                        <div className="flex bg-lightblue rounded-lg w-[3000px] h-[100px]">
                        <p className="text-2xl text-center  h-[16px] px-5 py-1" >
                        </p>
                        </div>
                    </div>
            </div>
            </div>
            </main>
            
        </div>
    )}

export default TestInstan;