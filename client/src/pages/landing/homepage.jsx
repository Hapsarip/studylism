import React from "react";
import landing from "../../assets/landing.svg"
import CaretDown from "../../assets/CaretDown.png"
import Vector from "../../assets/Vector.png"

function Homepage () {
    return (
        <div className="bg-white h-screen w-full overflow-hidden">
            <div className="flex justify-between items-center bg-gradient-to-r from-blue to-bluelight rounded-b-lg">
                <div className="flex text-white justify-between font-bold text-4xl ml-10 my-10">
                    <div>
                        <img src={Vector} alt="Logo" />
                    </div>
                    <div className="mt-1 ml-5">
                        Studylism
                    </div>
                </div>
                <div>
                    <div className="font-semibold flex justify-between text-lg space-x-14">
                        <div className="flex text-white p-2 text-lg space-x-14">
                            <a href="/" className="hover:text-[#263238]">
                            <button>
                                Home
                            </button>
                            </a>
                            <a href="#section-2"
                            className="hover:text-[#263238]"
                            to="features">
                            <button>
                                Features
                            </button>
                            </a>
                            <a href="#section-3"
                            className="hover:text-[#263238]"
                            to="aboutus">
                            <button>
                                About Us
                            </button>
                            </a>
                        </div>
                        <div className="text-black flex space-x-14 px-10">
                            <a href='/login'>
                                <button className="bg-yellow px-3 py-2 rounded-lg hover:text-white">
                                    Login
                                </button>
                            </a>
                            <a href='/signup'>
                                <button className="bg-yellow px-3 py-2 rounded-lg hover:text-white">
                                    Sign Up
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex h-fit items-center pt-3 justify-between">
                <div className ="ml-10"> 
                    <img src={landing} alt="illustration" />
                </div>
                <div className="order-last mx-10">
                    <div className="text-black text-3xl text-center my-5 font-medium">
                        A web based application that can determine your learning style and optimize it
                    </div>
                    <div className="flex justify-center my-5 items-center">
                        <a href='/signup'>
                        <button class="bg-yellow justify-center font-medium py-3 px-7 rounded-lg text-xl hover:text-white">
                            Get Started
                        </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="items-center bg-gradient-to-r from-blue to-bluelight rounded-t-lg h-screen justify-between">
                <div className="text-white font-medium text-2px text-center mt-2 pt-5">
                    View More
                </div>
                <div className="flex item-center justify-center">
                    <img src={CaretDown} alt="CaretDown"/>
                </div>
            </div>
        </div>
    )
}

export default Homepage;