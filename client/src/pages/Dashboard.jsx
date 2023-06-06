import React from "react";
import Group48 from "../assets/Group 48.png"
import Navbar from "../component/navbar";
import Progress_bar from "../component/progress_bar"


function Dashboard () {
    return (
                <div>
                <Navbar></Navbar>
                <main>
                <div className="flex pt-60">
                <div className="text-4xl flex-col space-y-40 my-300 ml-[300px] font-medium h-60 w-3/5 px-5 py-5 rounded-lg"> 
                    <p className="text-3xl text-left  h-[16px] py-1">Welcome, Name</p>
                    <p className="text-2xl text-left  h-[16px] py-1">
                        Sudah tahu gaya belajarmu?<br />
                        Cek gaya belajarmu dengan ikut test gaya belajar, yuk!<br />
                    </p>
                </div>
                            <div className="ml-40"><img src={Group48} alt="Logo" /></div>
            </div>
                
            <div className="flex-col space-y-10 my-[100px] ml-[300px] font-medium text-xl bg-yellow h-[250px] w-[1800px] px-5 py-5 rounded-lg">
                <div>
                    <p className="text-4xl text-center  h-[16px] py-1">Your Study Progress</p>
                    <div className="px-20">
                        < Progress_bar bgcolor="lightblue" progress='30'  height={30} />
                    </div>
                </div>
                    <div className="flex space-x-10 px-40">
                        <p className="flex text-4xl text-left">Keep Studying! </p>
                        <div className="flex bg-lightyellow rounded-lg w-[500px] h-[40px]">
                            <p className="text-2xl text-center  h-[16px] px-5 py-1">Fill Your Journal</p>
                        </div>
                        <div>
                            <p className="text-4xl text-center  h-[16px]">or</p>
                        </div>
                        <div className="flex bg-lightyellow rounded-lg w-[500px] h-[40px]">
                            <p className="text-2xl text-center  h-[16px] px-5 py-1">Check Strategy</p>
                        </div>
                    </div>
            </div>
            </main>
            </div>
    )}

export default Dashboard