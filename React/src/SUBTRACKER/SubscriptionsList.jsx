import { Link } from "react-router";
import Navbar from "./Navbar";
import Subscriptions from "./Subscriptions";
import { FaSearch, FaSlidersH, FaHome, FaPlusCircle } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { useState } from "react";

export default function SubscriptionsList({ subscriptionsList, daysUntilRenewal, onDelete }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Entertainment", "Music", "Productivity", "Other"];

  const filtered = subscriptionsList.filter((sub) => {
    const matchesSearch = sub.name?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || sub.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">

      <div className="flex items-center justify-between px-5 py-5">
        <h1 className="text-2xl font-bold">Subscriptions</h1>
        <Link to="/add-subscriptions" className="bg-black text-white px-3 py-1 rounded-xl text-sm">
          + Add New
        </Link>
      </div>

      <div className="px-5 flex gap-3 mb-4">
        <div className="flex flex-1 items-center gap-2 border rounded-xl px-4 py-2">
          <FaSearch size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search subscriptions..."
            className="outline-none w-full text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="border rounded-xl px-4">
          <FaSlidersH size={18} />
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto px-5 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-xl whitespace-nowrap text-sm ${
              activeCategory === cat ? "bg-violet-600 text-white" : "bg-gray-100 text-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3 px-3 pb-28">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 mt-10">No subscriptions found.</p>
        ) : (
          filtered.map((sub, index) => (
            <Subscriptions
              key={index}
              name={sub.name}
              price={sub.price}
              date={sub.subscribeDate}
              daysLeft={daysUntilRenewal(sub.subscribeDate)}
              onDelete={() => onDelete(index)}
            />
          ))
        )}
      </div>

      <Navbar/>

    </div>
  );
}