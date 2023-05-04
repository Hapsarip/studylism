import React from "react"
import CoolGuy from "../../assets/CoolGuy.png"

const features = () => {
    return (
        <div className="bg-gradient-to-r from-blue to-purple h-screen w-full">
            <div className="text-center text-4xl font-bold text-white">
                Our Features
            </div>
            <div className="flex flex-row items-center justify-between">
                <div className ="ml-10 basis-1/2 justify-between"> 
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
                <div className="mx-10 basis-1/2">
                    <div className="place-items-center">
                        <img src={CoolGuy} alt="Illustration"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default features;