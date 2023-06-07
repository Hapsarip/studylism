// import React, { useState , useEffect } from "react";
import axios from 'axios';
import dayjs from "dayjs";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { axiosInstance, toastifyConfig, URI } from "./component-config";
import "react-toastify/dist/ReactToastify.css";
import React, { useState , useEffect } from "react";

export default function TaskCard({title, description, isDone, taskID}) {
    // const [status, setStatus] = useState(true);
    const [checked, setChecked] = useState(isDone === 1 ? false : true);

    var userID = "";

    useEffect(() => {
        setChecked(isDone === 1 ? false : true);
    }, [isDone]);

    const handleChange = async () => {
        setChecked(!checked);
        // userID = localStorage.getItem("userID");
        var status = "";
        if (checked) {
            status = 1 //sngaja diganti untuk mengakomodasi setChecked yang belum terupdate.
        } else { status = 3 }
        status = parseInt(status);
        const res = await axios.put("http://localhost:3001/journal/edit", {
            _id : taskID,
            status : status
        });
        window.location.reload(false);
    };
    
    
    // const changeChecked = () => {
    //     if (isDone === 1 ) {
    //         return false
    //     }
    //     else { return true } 
    //     // return isDone === 1 ? false : true
    // }

    return (
        <div className="h-16 bg-white rounded-lg flex">
            <input type="checkbox" checked={checked} onChange={() => handleChange("status")} className="ml-3 accent-yellow"/> 
            <div className="items-center flex-col ml-3 mt-2 justify-between">
                <div className="font-medium">
                    {title}
                </div>
                <div>
                    {description}
                </div>
            </div>
        </div>
    );
}