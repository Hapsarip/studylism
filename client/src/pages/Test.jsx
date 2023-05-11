import React, {useState, useEffect} from 'react'

export default function IntroTest() {
    const [filled, setFilled] = useState(0);
    return(
        <div className="flex justify-center w-full h-screen mx-[80px]">
            <div className=' mt-[20px]'>
                <div className="flex justify-center text-center w-[200px] bg-blue rounded-full text-white">
                    TEST SEDANG BERJALAN
                </div>
                <div className='justify-between w-screen'>
                    <div className='text-left'>
                        Progress
                    </div>
                    <div>
                        <div style={{
                            height: "100%",
                            width: `${filled}%`,
                            backgroundColor: "#a66cff",
                            transition:"width 0.5s"
                            }}>
                        </div>
			            <span className="progressPercent">{ filled }%</span>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}