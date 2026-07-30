import { useState } from "react";
import Navbar from "./Navbar";

export default function SubscribeForm({ onSubscribe }) {
  const [newSubscription, setNewSubscription] = useState({
    name: "", price: 0, subscribeDate: ""
  });

    const [isSubmitted, setIsSubmitted] = useState(false);

  const addSubscription = (e) => {
    setNewSubscription({ ...newSubscription, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col pb-24 px-4 pt-4">
      <h2 className="text-xl font-bold mb-5">Add Subscription</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        onSubscribe(newSubscription);
        setNewSubscription({ name: "", price: 0, subscribeDate: "" });
        setIsSubmitted(!isSubmitted);
        

      }} className="flex flex-col">
        <div className="my-5 space-y-2">
          <label htmlFor="name" className="block">Package Name:</label>
          <input type="text" id="name" name="name"
            placeholder="E.g. Netflix" onChange={addSubscription}
            value={newSubscription.name}
            className="border rounded-sm p-1 w-full" />
        </div>
        <div className="mb-5">
          <label htmlFor="price" className="block">Monthly Price:</label>
          <input type="number" id="price" name="price"
            placeholder="Enter amount" onChange={addSubscription}
            value={newSubscription.price}
            className="border rounded-sm p-1 w-full" />
        </div>
        <div>
          <label htmlFor="date" className="block">Subscribe Date:</label>
          <input type="date" id="date" name="subscribeDate"
            onChange={addSubscription}
            value={newSubscription.subscribeDate}
            className="border rounded-sm p-1 w-full" />
        </div>
        <button type="submit"
          className="mt-5 border bg-purple-500 text-white w-full py-1 rounded-xl font-medium cursor-pointer hover:opacity-[0.8]">
          Submit
        </button>
        {isSubmitted === true && (
          <p className="text-green-900 font-medium mt-2 flex center "> Submitted Successfully!</p>
          
        )}
      </form>

      <Navbar />
    </div>
  );
}