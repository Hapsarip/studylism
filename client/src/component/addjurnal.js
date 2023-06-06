import React, { useState , useEffect } from "react";
import axios from 'axios';
import dayjs from "dayjs";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { axiosInstance, toastifyConfig, URI } from "../component/component-config";
import "react-toastify/dist/ReactToastify.css";
import { use } from "react";


export default function AddJurnal({visible, onClose}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus]=useState(false);
    const currentDate = dayjs();
    const [selectDate, setSelectDate] = useState(currentDate);
	//Task status digunakan sebagai penanda apakah tugas sudah selesai dikerjakan atau belum. 1=belum. 3=sudah.
    const [taskStatus, setTaskStatus] = useState(1);
    const [userId, setUserId] = useState("UserId");
    
	useEffect(() => {
        setUserId(localStorage.getItem("userID"));
		console.log(status);
        if(status){
          	setTaskStatus(3);
        } else {
          	setTaskStatus(1);
        }
    }, [status]);
    
	const navigate = useNavigate();

    const handleChange=()=>{
        setStatus(!status);
    }
    if (!visible) return null;

    const handleOnClose = (e) => {
        if(e.target.id === "container") onClose();
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        // try {
        //     const response = await axios.post('http://localhost:3001/auth/login', { email, password });
        //     setCookies("access_token", response.data.token);
        //     window.localStorage.setItem("userID", response.data.userID);
        //     navigate("/");
        // } catch (err) {
        //     console.error(err);
        // }
        try{
            const res = await axiosInstance.post("http://localhost:3001/journal/add",  
                {
                    title: title,
                    description: description,
                    date: selectDate,
                    status: taskStatus,
                    userId: userId
                })
            console.log(res.data.message);
            toast(res.data.message);
        } catch (err) {
            console.error(err.response.data.message);
            toast.error(err.response.data.message)
        }
    };
    return (
    <div
		onClick={handleOnClose}
		id="container"
		className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center"
    >
    <ToastContainer/>
        <form onSubmit={onSubmit} className="bg-gradient-to-r from-blue to-bluelight p-5 rounded-lg w-[22rem] h-[28rem] flex flex-col">
        <div className="space-y-2 mt-6">
            <div className="font-bold text-xl text-center text-white">
                Add Jurnal
            </div>
            <label htmlFor="" className="font-medium text-white">
                Title
            </label>
            <div className="items-center">
                <input
                    className="h-10 py-0.5 px-2 w-full border border-black rounded-lg text-gray-700 outline-offset-0"
                    id="title"
                    value={title}
                    type="text"
                    placeholder="Add Title"
                    onChange={(event) => setTitle(event.target.value)}>
                </input>
            </div>
        </div>
        <div className="space-y-2 mt-4">
            <label className="font-medium text-white">
                Description
            </label>
            <div>
                <textarea
                    className="h-36 py-2 px-2 w-full border border-black rounded-lg text-gray-700 outline-offset-0"
                    id="title"
                    type="text"
                    value={description}
                    placeholder="Add Description"
                    onChange={(event) => setDescription(event.target.value)}>
                </textarea>
            </div>
        </div>
        <div>
        <input type="checkbox" value={status} onChange={() => handleChange()} className="mr-3 mt-4 accent-yellow"/> 
            Mark as Done
        </div>

        <div className="mt-3 flex justify-between">
            <button
                onClick={onClose}
                className="h-8 w-14 bg-white rounded-lg mt-3">
                Cancel
            </button>
            <button type='submit' className="h-8 w-14 bg-yellow rounded-lg mt-3 text-white">
                Save
            </button>
        </div>
      </form>
    </div>
  );
}