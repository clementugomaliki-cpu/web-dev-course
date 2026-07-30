import { MdDelete } from "react-icons/md";

export default function Subscriptions({ name, price, date, daysLeft, onDelete }) {
  const isUrgent = daysLeft <= 3 && daysLeft >= 0;

  return (
    <div className={`flex items-center border rounded-2xl p-4 ${
      isUrgent ? "border-red-400 bg-red-50" : "border-gray-200 bg-purple-50"
    }`}>

      <div className="w-10 h-10 rounded-xl bg-violet-200 flex items-center justify-center text-violet-700 font-bold text-lg shrink-0">
        {name?.charAt(0).toUpperCase() || "?"}
      </div>

      <div className="ml-3 flex-1">
        <h2 className="font-bold text-sm">{name || "Unknown"}</h2>
        <p className="text-gray-500 text-xs">{date || "No date"}</p>
        <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-md ${
          isUrgent ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
        }`}>
          {isUrgent ? `Due in ${daysLeft} day${daysLeft === 1 ? "" : "s"}!` : "Active"}
        </span>
      </div>

      <div className="text-right flex flex-col items-end gap-2">
        <h3 className="font-semibold text-sm">₦{Number(price || 0).toLocaleString()}</h3>
        <button onClick={onDelete} className="flex items-center gap-1 bg-red-600 text-white text-xs px-3 py-1 rounded-lg">
          <MdDelete size={14} />
          Delete
        </button>
      </div>

    </div>
  );
}