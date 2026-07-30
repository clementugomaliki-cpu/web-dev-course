import { Link } from "react-router";
import { FaHome, FaPlusCircle } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-4">
      <Link to="/" className="flex flex-col items-center text-gray-500 text-xs">
        <FaHome size={22} />
        <span className="mt-1">Dashboard</span>
      </Link>
      <Link to="/subscriptions-list" className="flex flex-col items-center text-gray-500 text-xs">
        <FaCreditCard size={22} />
        <span className="mt-1">Subscriptions</span>
      </Link>
      <Link to="/add-subscriptions" className="flex flex-col items-center text-gray-500 text-xs">
        <FaPlusCircle size={22} />
        <span className="mt-1">Add New</span>
      </Link>
    </div>
  );
}