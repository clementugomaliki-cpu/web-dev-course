import { Link } from "react-router";

export default function UpcomingPayments({ subscriptionsList }) {

  const totalPrice = () => {
    return subscriptionsList.reduce((total, item) => total + Number(item.price), 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Link to="/add-subscriptions">Add New</Link>

      <div className="flex items-center justify-between p-4 bg-white border-b">
        <button className="text-xl">☰</button>
        <h1 className="text-lg font-semibold">Upcoming Payments</h1>
        <div />
      </div>

      <div className="flex gap-3 overflow-x-auto p-4 bg-white">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">All</button>
        <button className="bg-gray-100 px-4 py-2 rounded-lg">Next 7 days</button>
        <button className="bg-gray-100 px-4 py-2 rounded-lg">Next 30 days</button>
        <button className="bg-gray-100 px-4 py-2 rounded-lg">Next 3 months</button>
      </div>

      <div className="bg-white mt-2">
        {subscriptionsList.map((sub, index) => (
          <div key={index}
            className="flex justify-between border m-3 rounded-xl items-center p-4">
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center font-bold">
                {sub.icon || "📦"}
              </div>
              <div>
                <h3 className="font-medium">{sub.name}</h3>
                <p className="text-sm text-gray-500">{sub.renewalDate}</p>
              </div>
            </div>
            <p className="font-semibold">₦{Number(sub.price).toLocaleString()}</p>
          </div>
        ))}
      </div>

      <div className="m-4 p-5 bg-green-600 rounded-xl">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">Total Upcoming</h3>
            <p className="text-gray-600 text-sm">{subscriptionsList.length} payments</p>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-bold">₦{totalPrice().toLocaleString()}</h2>
            <p className="text-gray-600 text-sm">All subscriptions</p>
          </div>
        </div>
      </div>

      <div className="mt-auto bg-white border-t flex justify-around py-3">
        <Link to="/">🏠</Link>
        <Link to="/add-subscriptions">💳</Link>
        <Link to="/subscriptions-list">📅</Link>
      </div>
    </div>
  );
}