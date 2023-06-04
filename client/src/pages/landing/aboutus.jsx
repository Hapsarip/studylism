import React from "react"
import Mern from "../../assets/MERN-logo.png"

function AboutUs () {
    return (
    <div 
        id="section-3"
        name="aboutus"
        className="bg-white h-screen w-full overflow-hidden">
        <div className="flex justify-between items-center bg-gradient-to-r from-blue to-bluelight rounded-b-lg">
            <div className="flex text-white justify-between font-bold text-4xl ml-10 my-10">
            </div>
            <div>
                <div className="font-semibold flex justify-between text-lg space-x-14">
                </div>
            </div>
        </div>
        <div className="h-3/4 items-center flex flex-col place-self-center pt-10 justify-center">
            <div className="mt-12 text-center text-3xl font-bold"> 
                About Us
            </div>
            <div className="w-1/2 mt-10 text-center text-2xl text-medium">
                Studylism is a website application used to determine user’s learning style and optimize it. It is a project made by our team as an outcome of Senior Project class in a semester. Studylism used MERN stack technology as it is fast and easy with only JavaScript language for a full-stack development.
            </div>
            <div className="h-fit align-middle">
                <img src={Mern} className="scale-50" alt="logo Mern Stack" />
            </div>
        </div>
        <div className="items-center bg-gradient-to-r from-blue to-bluelight rounded-t-lg h-screen justify-between">
            <div className="text-white font-medium text-2px text-center mt-2 pt-5">
                © 2023 Studylism. All Rights Reserved
            </div>
        </div>
    </div>
    )
}

export default AboutUs;