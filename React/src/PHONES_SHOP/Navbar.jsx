import { Link } from "react-router";
import logo from "./Images/logo.png";
export default function Navbar() {
    return (
        <div className="flex justify-between px-10 py-2 items-center">
            <div>
                <img src={logo} alt="Logo" 
                className="w-24 "/>
            </div>
            <div>
                <div className="flex gap-4">
                <Link to="/login" className="border rounded-full border-blue-600 hover:bg-blue-500 leading-none hover:text-white hover:border-none cursor-pointer px-5 text-center py-2">Sign in</Link>
                <Link to="/register" className=" rounded-full text-white bg-blue-600 px-5 py-2 hover:bg-white hover:text-blue-600 hover:border cursor-pointer">Create account</Link>
                </div>
            </div>
        </div>
    )
}