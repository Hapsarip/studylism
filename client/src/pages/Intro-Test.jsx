import React from 'react'
import Test from '../assets/test.png'
import Navbar from '../component/navbar'
import { useNavigate } from "react-router-dom";

export default function IntroTest(){
    const navTest = useNavigate();
    const navigateToTest = () => {
        navTest('/test');
    };
    const navigateToTestInstan = () => {
        navTest('/testinstan');
    };

    return (
        <div>
            <Navbar/>
        <div className="flex justify-center items-center w-full h-screen pl-[220px] pt-[100px]">
            
            <div className='grid grid-cols-1 w-full flex items-center justify-center lg:w-3/5'>
                
                <div className="w-full text-black text-2xl text-left my-5 font-muli">
                    Penasaran dengan gaya belajar terbaik Anda? Lakukan tes terlebih dahulu di sini! Tenang, cepat kok! Tidak lama dan pastinya mudah!
                </div>
                <div className='flex '>
                    <button
                        className="place-items-start bg-yellow w-[120px] px-3 py-2 mr-5 rounded-xl font-muli text-lg hover:bg-[#D99D04]"
                        onClick={navigateToTest}>
                        Mulai Test
                    </button>
                    <button 
                        className="place-items-start bg-yellow w-[120px] px-3 py-2 rounded-xl font-muli text-lg hover:bg-[#D99D04]"
                        onClick={navigateToTestInstan}>
                        Test Instan
                    </button>
                </div>
                
            </div>
            <div className="hidden lg:flex h-full w-2/5 items-center justify-center pr-10">
                <img class="justify-center items-center mx-10 mt-10" src={Test} alt="bgImg"/>
            </div>
        </div>
        </div>
    )
}