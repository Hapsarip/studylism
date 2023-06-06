import React from "react";
import Group48 from "../assets/Group 48.png"
import Navbar from "../component/navbar"



function Rekomendasi_Kinestetik () {
return(
            
            <div>
            <Navbar></Navbar>
            <main>
            <div className="flex text-black justify-between font-bold text-4xl ml-2 ">
                <h1 style={{ color: "black", marginLeft: "20rem", marginTop: "10rem" }}>
                    Kinestetik
                </h1>
            </div> 
            <div className="flex">
            <div className="flex my-1 ml-[300px] font-medium text-xl bg-lightblue h-80 w-3/5 px-5 py-5 rounded-lg">
            Seseorang dengan gaya belajar tactile atau kinestetik lebih banyak belajar dengan melakukan sesuatu (fisik) dan menyentuh, biasanya menggunakan gerakan fisik untuk memahami dan mengingat sesuatu. <br />
            Mereka tergolong pembelajar autodidak secara langsung yang lebih suka menyentuh, memindahkan, membangun, menggambar, ataupun melakukan berbagai kegiatan atau aktivitas fisik lainnya. <br />
            Ciri-ciri lainnya adalah lebih banyak memvisualisasikan sesuatu dengan gerakan tubuh dan tangan dibandingkan dengan perkataan, kemungkinan sulit untuk diam, lebih aktif, sehingga membutuhkan istirahat yang lebih banyak dibandingkan dengan tipe gaya belajar lain.  <br />
            Pembelajar dengan tipe gaya belajar kinestetik memiliki kemampuan koordinasi dan atletik yang paling baik. <br />
            Mereka lebih mengingat sesuatu yang mereka lakukan dibandingkan dengan sesuatu yang mereka lihat atau dengar. <br />
            
            </div>
                            <div className="ml-40"><img src={Group48} alt="Logo" /></div>
            </div>

            <div className="flex text-black justify-between font-bold text-4xl ml-2 my-5">
                <h2 style={{ color: "black", marginLeft: "20rem", marginTop: "5rem" }}>
                    Strategi Gaya Belajar
                </h2>
            </div>
            <div className="flex my-1 ml-[300px] font-medium text-xl bg-yellow w-4/5 h-3/7 px-10 py-5 rounded-lg">
                1. Berpartisipasi dalam aktivitas yang melibatkan menyentuh, membangun, bergerak, atau menggambar. <br />
                2. Lakukan banyak aktivitas langsung seperti menyelesaikan proyek seni, berjalan-jalan, atau memerankan cerita.<br />
                3. Tidak apa-apa mengunyah permen karet, berjalan-jalan, atau bergoyang di kursi sambil membaca atau belajar.<br />
                4. Gunakan kartu flash dan susun dalam kelompok untuk menunjukkan hubungan antar gagasan.<br />
                5. Lacak kata dengan jari Anda untuk mempelajari ejaan (finger spelling).<br />
                6. Sering-seringlah beristirahat selama periode membaca atau belajar, tetapi jangan terlalu lama.<br />
                7. Tidak apa-apa untuk mengetuk pensil, menggoyangkan kaki, atau berpegangan pada sesuatu saat belajar.<br />
                8. Gunakan komputer untuk memperkuat pembelajaran melalui indra peraba..<br />

            </div>
            </main>
            </div>
) 
}

export default Rekomendasi_Kinestetik;