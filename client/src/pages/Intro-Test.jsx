import React from 'react'
import Test from '../assets/test.png'

export default function IntroTest(){
    return (
        <div className="flex justify-center items-center w-full h-screen px-[80px]">
            
            <div className='grid grid-cols-1 w-full flex items-center justify-center lg:w-3/5 mr-5'>
                
                <div className="w-full text-black text-2xl text-left my-5 font-muli">
                    Penasaran dengan gaya belajar terbaik Anda? Lakukan tes terlebih dahulu di sini! Tenang, cepat kok! Tidak lama dan pastinya mudah!
                </div>
                <button className="place-items-start bg-yellow w-[120px] px-3 py-2 rounded-xl font-muli text-lg">
                    Mulai Test
                </button>
            </div>
            <div className="hidden lg:flex h-full w-2/5 items-center justify-center">
                <img class="justify-center items-center mx-10 mt-10" src={Test} alt="bgImg"/>
            </div>
        </div>
    )
}