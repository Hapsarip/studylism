// import React, { useState , useEffect } from "react";
import axios from 'axios';
import dayjs from "dayjs";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { axiosInstance, toastifyConfig, URI } from "./component-config";
import "react-toastify/dist/ReactToastify.css";
import React, { useState , useEffect } from "react";

export default function TaskCard({title, description}) {
    const [status, setStatus] = useState(false);
    
    const handleChange = () => {

    }
    
    return (
        <div className="h-16 bg-white rounded-lg flex">
            <input type="checkbox" value={status} onChange={() => handleChange("status")} className="ml-3 accent-yellow"/> 
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