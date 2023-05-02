import React from "react";
import landing from "../../assets/landing.svg"

function Homepage () {
    return (
        <div className="bg-white h-screen w-full overflow-hidden">
            <div className="flex justify-between items-center bg-blue">
                <div className="text-white font-bold text-4xl ml-10 my-10">
                    Studylism
                </div>
                <div>
                    <div className="font-semibold flex justify-between text-lg space-x-14">
                        <div className="flex text-white p-2 text-lg space-x-14">
                            <div>
                                Home
                            </div>
                            <div>
                                Features
                            </div>
                            <div>
                                About Us
                            </div>
                        </div>
                        <div className="text-black flex space-x-14 px-10">
                            <div className="bg-yellow px-3 py-2 rounded-lg">
                                Login
                            </div>
                            <div className="bg-yellow px-3 py-2 rounded-lg">
                                Sign Up
                            </div>
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
                        <button class="bg-yellow justify-center font-medium py-3 px-7 rounded-lg text-xl">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;