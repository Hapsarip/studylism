import React from "react";
import Group48 from "../assets/Group 48.png"
import Navbar from "../component/navbar"



function Rekomendasi_Visual () {
return(
            
            <div>
            <Navbar></Navbar>
            <main>
            <div className="flex text-black justify-between font-bold text-4xl ml-2 ">
                <h1 style={{ color: "black", marginLeft: "20rem", marginTop: "10rem" }}>
                    Visual
                </h1>
            </div> 
            <div className="flex">
            <div className="flex my-1 ml-[300px] font-medium text-xl bg-lightblue h-80 w-3/5 px-5 py-5 rounded-lg">
            Seseorang yang memiliki gaya belajar visual cenderung belajar dengan melihat gambar ataupun membaca tulisan. <br />
            Saat belajar, pembelajar dengan gaya visual lebih banyak berimajinasi dan membayangkan apa yang dipelajarinya serta sangat cocok dan efektif menggunakan metode belajar yang bersifat visual. <br />
            Ciri-ciri lain dari pemilik gaya belajar visual adalah orang yang terlihat rapi dan bersih. <br />
            Cenderung gemar menonton dan memvisualisasikan sesuatu untuk mengingatnya.  <br />
            Mereka lebih tertarik kepada warna dan bahasa lisan yang kaya akan citra dan cukup terganggu dengan petunjuk yang diucapkan serta suara. <br />
            
            </div>
                            <div className="ml-40"><img src={Group48} alt="Logo" /></div>
            </div>

            <div className="flex text-black justify-between font-bold text-4xl ml-2 my-5">
                <h2 style={{ color: "black", marginLeft: "20rem", marginTop: "5rem" }}>
                    Strategi Gaya Belajar
                </h2>
            </div>
            <div className="flex my-1 ml-[300px] font-medium text-xl bg-yellow w-4/5 h-3/7 px-10 py-5 rounded-lg">
                1. Duduk dekat depan kelas. <br />
                2. Periksakan penglihatan Anda secara teratur.<br />
                3. Gunakan kartu flash untuk mempelajari kata-kata baru.<br />
                4. Cobalah memvisualisasikan hal-hal yang Anda dengar atau hal-hal yang dibacakan untuk Anda.<br />
                5. Tuliskan kata kunci, ide, atau instruksi.<br />
                6. Buat gambar untuk membantu menjelaskan konsep baru dan kemudian jelaskan gambarnya.<br />
                7. Saat belajar, dapat menandai hal yang penting dengan menggunakan highlighter atau sesuatu yang berwarna. <br />
                8. Hindari gangguan selama waktu belajar.<br />

            </div>
            </main>
            </div>
) 
}

export default Rekomendasi_Visual;