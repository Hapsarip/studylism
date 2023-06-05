import React from "react";
import Group48 from "../assets/Group 48.png"
import Navbar from "../component/navbar"



function Rekomendasi () {
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
            <div className="flex my-1 ml-[300px] font-medium text-xl bg-lightblue h-80 w-3/5 px-5 py-5 rounded-lg">
            Jika anda seorang pelajar dengan gaya belajar auditori, anda belajar dengan mendengarkan. <br />
            Anda memahami dan mengingat hal dari apa yang telah Anda dengarkan. <br />
            Seseorang dengan gaya belajar auditori akan menyimpan informasi sesuai dengan bunyi serta lebih mudah memahami instruksi lisan dibandingkan yang tertulis. <br />
            Ciri-ciri lainnya adalah mereka yang sering belajar dengan membaca secara keras sehingga dapat mendengar yang ia ucapkan dan perlu untuk mengucapkannya ulang. <br />
            Pelajar dengan tipe auditori cukup sering berbicara kepada diri sendiri atau orang lain dan cenderung menjadi pendengar yang baik terhadap sesamanya. <br />
            
            </div>
                            <div className="ml-40"><img src={Group48} alt="Logo" /></div>
            </div>

            <div className="flex text-black justify-between font-bold text-4xl ml-2 my-5">
                <h2 style={{ color: "black", marginLeft: "20rem", marginTop: "5rem" }}>
                    Strategi Gaya Belajar
                </h2>
            </div>
            <div className="flex my-1 ml-[300px] font-medium text-xl bg-yellow w-4/5 h-3/7 px-10 py-5 rounded-lg">
                1. Duduklah di tempat Anda bisa mendengar. <br />
                2. Periksakan pendengaran Anda secara teratur. <br />
                3. Gunakan kartu flash untuk mempelajari kata-kata baru serta membacanya dengan lantang.<br />
                4. Bacakan cerita, tugas, atau arahan dengan keras.<br />
                5. Rekam diri Anda mengeja kata-kata dan kemudian dengarkan rekamannya.<br />
                6. Mintalah pertanyaan tes dibacakan untuk Anda dengan lantang.<br />
                7. Pelajari materi baru dengan membacanya keras-keras.<br />

            </div>
            </main>
            </div>
) 
}

export default Rekomendasi;