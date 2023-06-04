import React from "react"
import CoolGuy from "../../assets/CoolGuy.png"

const features = () => {
    return (
        <div 
            id="section-2"
            name="features"
            className="bg-gradient-to-r from-blue to-bluelight h-screen w-full">
            <div className="text-center text-4xl font-bold text-white">
                Our Features
            </div>
            <div className="flex items-center justify-between">
                <div className ="ml-10 basis-1/2 justify-between text-center"> 
                    <div className="my-5 font-medium text-3xl bg-yellow px-3 py-2 rounded-lg">
                        Determine your learning style.
                    </div>
                    <div className="my-5 font-medium text-3xl bg-yellow px-3 py-2 rounded-lg">
                        Get the recommendation.
                    </div>
                    <div className="my-5 font-medium text-3xl bg-yellow px-3 py-2 rounded-lg">
                        Track your study.
                    </div>
                </div>
                <div className="mr-10 ml-20 basis-1/2 items-center flex">
                    <div className="items-center">
                        <img src={CoolGuy} alt="Illustration"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default features;