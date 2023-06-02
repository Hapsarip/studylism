import React, { useState } from "react";

export default function AddJurnal({visible, onClose}) {
    const [done,setDone]=useState(true);
    const handleChange=(data)=>{
        console.log(data)
    }
    if (!visible) return null;
    const handleOnClose = (e) => {
        if(e.target.id === "container") onClose();
    };
    return (
    <div
    onClick={handleOnClose}
    id="container"
    className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center"
    >
        <div className="bg-gradient-to-r from-blue to-bluelight p-5 rounded-lg w-[22rem] h-[28rem] flex flex-col">
        <div className="font-bold text-xl text-center text-white">
            Add Jurnal
        </div>
        <div className="space-y-2 mt-6">
            <div  className="font-medium text-white">
                Title
            </div>
            <div className="items-center">
                <input
                    className="h-10 py-0.5 px-2 w-full border border-black rounded-lg text-gray-700 outline-offset-0"
                    id="title"
                    type="text"
                    placeholder="Add Title"
                ></input>
            </div>
        </div>
        <div className="space-y-2 mt-4">
            <div className="font-medium text-white">
                Description
            </div>
            <div>
                <input
                    className="h-36 py-0.5 px-2 w-full border border-black rounded-lg text-gray-700 outline-offset-0"
                    id="title"
                    type="text"
                    placeholder="Add Description"
                ></input>
            </div>
        </div>
        <div>
        <input type="checkbox" value={done} onChange={() => handleChange("done")} className="mr-3 mt-4 accent-yellow"/> 
            Mark as Done
        </div>

        <div className="mt-3 flex justify-between">
            <button
                onClick={onClose}
                className="h-8 w-14 bg-white rounded-lg mt-3">
                Cancel
            </button>
            <button className="h-8 w-14 bg-yellow rounded-lg mt-3 text-white">
                Save
            </button>
        </div>
      </div>
    </div>
  );
}