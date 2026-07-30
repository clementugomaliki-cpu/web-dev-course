import { Link } from "react-router";
import { FaWallet, FaCalendarDays } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import Navbar from "./Navbar";

export default function SubTrackerDashboard({ subscriptionsList, dueSoon, daysUntilRenewal }) {
  return (
    <div className="flex flex-col  px-5 justify-between pb-24">
      <h2 className="font-medium text-xl m-5">Welcome, Clement!</h2>

      {dueSoon.length > 0 && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-5">
          <p className="font-semibold">⚠️ Upcoming Renewals</p>
          {dueSoon.map((sub, index) => {
            const days = daysUntilRenewal(sub.renewalDate);
            return (
              <p key={index} className="text-sm mt-1">
                <span className="font-medium">{sub.name}</span> is due in{" "}
                {days === 0 ? "today!" : `${days} day${days > 1 ? "s" : ""}!`}
              </p>
            );
          })}
        </div>
      )}

      <div className="flex flex-col mb-3 items-center bg-purple-200 p-10 space-y-3 text-3xl uppercase font-bold rounded-lg">
        <GiMoneyStack className="text-5xl" />
        <p className="text-2xl">Total Monthly Cost</p>
        <p>₦{subscriptionsList.reduce((total, sub) => total + Number(sub.price), 0).toLocaleString()}</p>
      </div>

      <div className="flex justify-between text-xl space-x-3 border-y-2 border-purple-200 items-center">
        <div className="flex flex-col bg-white font-bold items-center px-3 py-5 space-y-2 rounded-lg">
          <FaWallet className="text-4xl" />
          <p className="text-[16px]">Total Subscriptions</p>
          <p >{subscriptionsList.length}</p>
        </div>
        <div className="flex flex-col bg-white text-black font-bold items-center px-3 py-5 space-y-2 rounded-lg">
          <FaCalendarDays className="text-4xl" />
          <p className="text-[16px]">Upcoming Renewals</p>
          <p>{dueSoon.length}</p>
        </div>
      </div>

      <Navbar />
    </div>
  );
}