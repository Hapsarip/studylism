import Group48 from "../assets/Group 48.png";
import Group_Default from "../assets/Group_Default.png"
import Group_Visual from "../assets/Group_Visual.png"
import Group_Kinestetik from "../assets/Group_Kinestetik.png"
import Navbar from "../component/navbar";
import Progress_bar from "../component/progress_bar";
import React, {useState, useEffect} from 'react';
import dayjs from "dayjs";
import axios from 'axios';

function Dashboard () {
    const currentDate = dayjs();
    const [progress, setProgress] = useState('');
    const [selectDate, setSelectDate] = useState(currentDate);
    const [loading, setLoading] = useState(true);
    const [userID, setUserID] = useState('');
    const d = dayjs().date();
    const m = dayjs().month()+1; //karena range 0-11. 0=januari dan 11=desember.
    const y = dayjs().year(); 

    useEffect(() => {
        const id = localStorage.getItem("userID");
        setUserID(id);
        (async () => {
            try {
                const response = await axios.post("http://localhost:3001/journal/" + y + "/" + m + "/" + d, {
                    _id: userID
            });
            
            // if (Array.isArray(response.data)) {
            // // setData(response.data);
            //     setProgress(response.data.progressByDay);
            // } else if (typeof response.data === 'object') {
            // // setData(Object.values(response.data));
            //     setProgress(Object.values(response.data.progressByDay));
            // }
            setProgress(response.data.progressByDay*100)
            console.log(response.data.progressByDay);
            // console.log(progress);
            setLoading(false);
            } catch (error) {
              console.error(error);
              setLoading(false);
            }
          })()
    },[userID, selectDate]);

    useEffect(() => {
        // lakukan sesuatu dengan progress yang baru
        console.log(progress);
    }, [progress]); // array dependensi

    var Name = localStorage.getItem("name");
    var LearningStyle = localStorage.getItem("learningStyle");
    var UserID = localStorage.getItem("userID");

    return (
                <div>
                <Navbar></Navbar>
                <main>
                <div className="flex pt-60 space-x-3">
                <div className="text-4xl flex-col space-y-40 my-300 ml-[300px] font-medium h-60 w-3/5 px-5 py-5 rounded-lg"> 
                    <p className="text-4xl text-left  h-[16px] py-1">Welcome, {Name}</p>
                    {LearningStyle==0 && (
                        <p className="text-4xl text-left  h-[16px] py-1">
                        Sudah tahu gaya belajarmu?<br />
                        Cek gaya belajarmu dengan ikut test gaya belajar, yuk!<br />
                        </p>
                    ) || (
                        LearningStyle==1 && (
                            <p className="text-4xl text-left  h-[16px] py-1">
                            Hello, Sobat Auditori!<br />
                            Sudah produktifkah kamu hari ini??<br />
                            Yuk, catat kegiatan belajarmu di Fitur Jurnal!<br />
                            </p>
                        ) || (
	                        LearningStyle==2 && (
                                <p className="text-4xl text-left  h-[16px] py-1">
                                Hello, Sobat Visual!<br />
                                Sudah produktifkah kamu hari ini??<br />
                                Yuk, catat kegiatan belajarmu di Fitur Jurnal!<br />
                                </p>
                        ) || (
	                            LearningStyle==3 && (
                                    <p className="text-4xl text-left  h-[16px] py-1">
                                    Hello, Sobat Kinestetik!<br />
                                    Sudah produktifkah kamu hari ini??<br />
                                    Yuk, catat kegiatan belajarmu di Fitur Jurnal!<br />
                                    </p>
                            )
                        )))}
                    
                    
                </div>
                    {LearningStyle==0 && (
                        <div className="ml-40"><img src={Group_Default} alt="Logo" class="object-cover h-[500px] w-[500px] ..."/></div>
                    ) || (
                        LearningStyle==1 && (
   	                        <div className="ml-40"><img src={Group48} 	alt="Logo" /></div>
                        ) || (
	                        LearningStyle==2 && (
                                <div className="ml-40"><img src={Group_Visual} 	alt="Logo" /></div>
                        ) || (
	                            LearningStyle==3 && (
   	                                <div className="ml-40"><img src={Group_Kinestetik} 	alt="Logo" /></div>
                            )
                        )))}
            </div>
                
            <div className="flex-col space-y-10 my-[100px] ml-[300px] font-medium text-xl bg-yellow h-[250px] w-[1800px] px-5 py-5 rounded-lg">
                <div>
                    <p className="text-4xl text-center  h-[16px] py-1">Your Study Progress</p>
                    <div className="px-20">
                        < Progress_bar 
                            bgcolor="lightblue" 
                            progress = {loading || isNaN(progress) ? 0 : progress}
                            height={30} 
                        />
                    </div>
                </div>
                    <div className="flex space-x-10 px-40">
                        <p className="flex text-4xl text-left">Keep Studying! </p>
                        <div className="flex bg-lightyellow rounded-lg w-[500px] h-[40px]">
                            <p className="text-2xl text-center  h-[16px] px-5 py-1">Fill Your Journal</p>
                        </div>
                        <div>
                            <p className="text-4xl text-center  h-[16px]">or</p>
                        </div>
                        <div className="flex bg-lightyellow rounded-lg w-[500px] h-[40px]">
                            <p className="text-2xl text-center  h-[16px] px-5 py-1">Check Strategy</p>
                        </div>
                    </div>
            </div>
            </main>
            </div>
    )}

export default Dashboard