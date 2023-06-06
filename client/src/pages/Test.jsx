import React, {useState, useEffect} from 'react'
import Navbar from '../component/navbar';

export default function IntroTest() {
    
    return(
        <div>
        <Navbar/>
        <div className="justify-items-center w-full h-screen pl-[110px] pt-[120px]">
            <div className='flex flex-col items-center'>
                <div className="justify-center flex items-center text-center h-[30px] w-[250px] bg-blue rounded-full text-white">
                    TEST SEDANG BERJALAN
                </div>
            </div>
            <div>
                {/* Pertanyaan 1 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 1
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya dapat mengingat dengan baik dengan mendengarkan seorang guru. Hal yang diingat mencakup informasi, penjelasan dan diskusi.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-1" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-1" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-1" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-1" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Auditory" name="radio-1" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Auditory" name="radio-1" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Auditory" name="radio-1" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div>
                {/* Pertanyaan 2 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 2
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya lebih suka melihat informasi tertulis di papan tulis dan dilengkapi dengan alat bantu visual dan bacaan yang ditugaskan.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-2" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-2" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-2" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-2" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Visual" name="radio-2" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Visual" name="radio-2" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Visual" name="radio-2" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div>
                {/* Pertanyaan 3 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 3
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya suka menulis sesuatu atau membuat catatan untuk tinjauan visual.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-3" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-3" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-3" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-3" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Visual" name="radio-3" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Visual" name="radio-3" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Visual" name="radio-3" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div>
                {/* Pertanyaan 4 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 4
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya lebih suka menggunakan poster, model, atau praktik nyata dan aktivitas lain di kelas.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-4" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-4" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-4" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-4" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Kinesthetic" name="radio-4" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Kinesthetic" name="radio-4" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Kinesthetic" name="radio-4" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div> 
                {/* Pertanyaan 5 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 5
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya memerlukan penjelasan tentang diagram, grafik, atau arah visual.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-5" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-5" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-5" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-5" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Auditory" name="radio-5" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Auditory" name="radio-5" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Auditory" name="radio-5" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div> 
                {/* Pertanyaan 6 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 6
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya senang bekerja dengan tangan saya atau membuat sesuatu.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-6" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-6" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-6" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-6" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Kinesthetic" name="radio-6" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Kinesthetic" name="radio-6" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Kinesthetic" name="radio-6" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div> 
                {/* Pertanyaan 7 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 7
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya terampil dan menikmati mengembangkan pembuatan grafik dan bagan.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-7" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-7" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-7" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-7" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Visual" name="radio-7" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Visual" name="radio-7" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Visual" name="radio-7" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div> 
                {/* Pertanyaan 8 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 8
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya dapat mengetahui apakah suara cocok saat disajikan dengan pasangan suara.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-8" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-8" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-8" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-8" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Auditory" name="radio-8" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Auditory" name="radio-8" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Auditory" name="radio-8" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div> 
                {/* Pertanyaan 9 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 9
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya dapat mengingat dengan baik dengan menulis beberapa kali.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-9" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-9" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-9" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-9" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Kinesthetic" name="radio-9" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Kinesthetic" name="radio-9" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Kinesthetic" name="radio-9" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div> 
                {/* Pertanyaan 10 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 10
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya dapat dengan mudah memahami dan mengikuti petunjuk di peta.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-10" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-10" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-10" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-10" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Visual" name="radio-10" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Visual" name="radio-10" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Visual" name="radio-10" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div> 
                {/* Pertanyaan 11 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 11
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya melakukan yang terbaik dalam mata pelajaran akademik dengan mendengarkan ceramah dan kaset.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-11" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-11" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-11" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-11" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Auditory" name="radio-11" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Auditory" name="radio-11" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Auditory" name="radio-11" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div> 
                {/* Pertanyaan 12 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 12
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya bermain dengan koin atau kunci di saku saya.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-12" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-12" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-12" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-12" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Kinesthetic" name="radio-12" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Kinesthetic" name="radio-12" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Kinesthetic" name="radio-12" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div> 
                {/* Pertanyaan 13 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 13
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya belajar mengeja lebih baik dengan mengulangi kata-kata dengan keras daripada dengan menulis kata-kata di atas kertas.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-13" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-13" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-13" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-13" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Auditory" name="radio-13" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Auditory" name="radio-13" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Auditory" name="radio-13" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div> 
                {/* Pertanyaan 14 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 14
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya dapat memahami sebuah artikel berita lebih baik dengan membacanya di koran atau online daripada dengan mendengarkan laporan tentangnya di radio atau internet.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-14" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-14" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-14" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-14" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Visual" name="radio-14" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Visual" name="radio-14" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Visual" name="radio-14" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div> 
                {/* Pertanyaan 15 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 15
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya memegang benda di tangan saya selama periode belajar.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-15" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-15" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-15" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-15" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Kinesthetic" name="radio-15" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Kinesthetic" name="radio-15" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Kinesthetic" name="radio-15" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div>         
            </div>
            <div className='flex flex-col items-center my-5'>
                <button className="bg-yellow w-[120px] px-3 py-2 rounded-xl font-muli text-lg" >
                    Selesai Test
                </button>
            </div>
        </div>
        </div>
    )
}