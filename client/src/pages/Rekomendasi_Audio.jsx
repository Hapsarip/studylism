import React from "react";
import Group48 from "../assets/Group 48.png"
import Navbar from "../component/navbar"
import Info_gb  from "../component/info_gb";
import Tips from "../component/tips";



function Rekomendasi_Audio () {
return(
            
            <div>
            <Navbar></Navbar>
            <main>
            <div className="flex text-black justify-between font-bold text-4xl ml-2 ">
                <h1 style={{ color: "black", marginLeft: "20rem", marginTop: "10rem" }}>
                    Auditori
                </h1>
            </div> 
            <div className="flex">
            <Info_gb></Info_gb>
                            <div className="ml-40"><img src={Group48} alt="Logo" /></div>
            </div>

            <div className="flex text-black justify-between font-bold text-4xl ml-2 my-5">
                <h2 style={{ color: "black", marginLeft: "20rem", marginTop: "5rem" }}>
                    Strategi Gaya Belajar
                </h2>
            </div>
            <Tips></Tips>
            </main>
            </div>
) 
}

export default Rekomendasi_Audio;