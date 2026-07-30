import { useState } from "react"
import StatusBadge from "../StatusBadge"
import { IoToggle } from "react-icons/io5"
export default function MissionCard({ name, destination, crew, isActive }) {

    const [status, setStatus] = useState(isActive)

    function handleStatus() {
        setStatus(!status)
    }
    
    return (
        <div className="bg-gray-200 w-80 h-50 p-5 text-xl rounded-xl border-[2px] border-gray-600">
            <h3 className="font-bold">{ name }</h3>
            <p> Destination: { destination }</p>
            <p>Crew Members: { crew }</p>
            <p>{ isActive }</p>

            <div className="flex justify-between mr-5 mt-9 items-center">
                <button onClick={handleStatus} className="bg-black text-white px-5 py-1 rounded-3xl 
                    cursor-pointer hover:bg-white hover:text-black">Mission Status:</button>
                <StatusBadge isActive={status}/>
            </div>
        </div>
    )
}