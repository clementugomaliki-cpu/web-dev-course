import { Link } from "react-router"

export default function Navbar() {
  return (
    <div className="bg-blue-500 text-white space-x-5 text-sm px-5 py-5 font-medium underline flex ">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
    </div>
  );
}