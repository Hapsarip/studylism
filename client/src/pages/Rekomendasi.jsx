import React from "react";
import Group48 from "../assets/Group 48.png"
import Group_Default from "../assets/Group_Default.png"
import Group_Visual from "../assets/Group_Visual.png"
import Group_Kinestetik from "../assets/Group_Kinestetik.png"
import Navbar from "../component/navbar";
import Info_gb_audio  from "../component/info_gb_audio";
import Info_gb_visual from "../component/info_gb_visual";
import Info_gb_kinetik from "../component/info_gb_kinetik";
import Tips_audio from "../component/tips_audio";
import Tips_Visual from "../component/tips_visual";
import Tips_kinetik from "../component/tips_kinetik";



function Rekomendasi () {

    var LearningStyle = localStorage.getItem("learningStyle");
    var UserID = localStorage.getItem("userID");
return(
            
            <div>
            <Navbar></Navbar>
            <main>
            <div className="flex text-black justify-between font-bold text-4xl ml-2 ">
                    {LearningStyle==0 && (
                        <h1 style={{ color: "black", marginLeft: "20rem", marginTop: "10rem" }}>
                        Ingin Tahu Rekomendasi Gaya Belajar? Test Gaya Belajarmu Dulu, Yuk! 
                        </h1>
                    ) || (
                        LearningStyle==1 && (
                            <h1 style={{ color: "black", marginLeft: "20rem", marginTop: "10rem" }}>
                            Auditori 
                            </h1>
                        ) || (
	                        LearningStyle==2 && (
                                <h1 style={{ color: "black", marginLeft: "20rem", marginTop: "10rem" }}>
                                Visual 
                                </h1>
                        ) || (
	                            LearningStyle==3 && (
                                    <h1 style={{ color: "black", marginLeft: "20rem", marginTop: "10rem" }}>
                                    Kinestetik 
                                    </h1>
                            )
                        )))}    
            </div> 
            <div className="flex">
    
            {LearningStyle==0 && (
                        <div className="flex">
                        <div className="flex my-20 ml-[300px] font-medium text-xl bg-white h-80 w-[1500px] px-5 py-5 rounded-lg"></div>
                        <div className="ml-40"><img src={Group_Default} alt="Logo" class="object-cover h-[500px] w-[500px] ..."/></div>
                        </div>
                    ) || (
                        LearningStyle==1 && (
                            <div className="flex">
                            <Info_gb_audio></Info_gb_audio>
   	                        <div className="ml-40"><img src={Group48} 	alt="Logo" /></div>
                            </div>
                        ) || (
	                        LearningStyle==2 && (
                                <div className="flex">
                                <Info_gb_visual></Info_gb_visual>
   	                            <div className="ml-40"><img src={Group_Visual} 	alt="Logo" /></div>
                                </div>
                        ) || (
	                            LearningStyle==3 && (
                                    <div className="flex">
                                    <Info_gb_kinetik></Info_gb_kinetik>
                                       <div className="ml-40"><img src={Group_Kinestetik} 	alt="Logo" /></div>
                                    </div>
                            )
                        )))}
            </div>

            <div className="flex text-black justify-between font-bold text-4xl ml-2 my-5">
            {LearningStyle==0 && (
                            <div>
                            </div>
                    ) || (
                        LearningStyle==1 && (
                            <div>
                            <Tips_audio></Tips_audio>
                            <h2 style={{ color: "black", marginLeft: "20rem", marginTop: "10rem" }}>
                            Strategi Gaya Belajar 
                            </h2>
                            </div>
                        ) || (
	                        LearningStyle==2 && (
                                <div>
                                <Tips_Visual></Tips_Visual>
                                <h2 style={{ color: "black", marginLeft: "20rem", marginTop: "10rem" }}>
                                Strategi Gaya Belajar
                                </h2>
                                </div>
                        ) || (
	                            LearningStyle==3 && (
                                    <div>
                                    <Tips_kinetik></Tips_kinetik>
                                    <h2 style={{ color: "black", marginLeft: "20rem", marginTop: "10rem" }}>
                                    Strategi Gaya Belajar
                                    </h2>
                                    </div>
                            )
                        )))}  
            </div>
            </main>
            </div>
) 
}

export default Rekomendasi;