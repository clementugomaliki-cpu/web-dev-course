import { useState } from "react";
import { Link } from "react-router";

export default function ProductCard({ productId, name, description, category, image, price, stock, seller, currentUserId, onDelete }) {
    const [adding, setAdding] = useState(false);
    const [message, setMessage] = useState("");

    const isOwner = currentUserId && seller?._id === currentUserId;
    const outOfStock = stock === 0;

    async function addToCart() {
        setAdding(true);
        setMessage("");
        try {
            const token = localStorage.getItem("token");
            const response = await fetch("https://web-dev-course-1nr1.onrender.com/cart/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ productId, quantity: 1 })
                
            });
            const data = await response.json();
            if (!response.ok) {
                setMessage(data.message || "Could not add to cart.");
                return;
            }
            setMessage("Added to cart!");
        } catch (error) {
            setMessage(error.message);
        } finally {
            setAdding(false);
        }
    }

    return (
        <div className="border border-blue-600 p-4 rounded-xl flex flex-col justify-between">
            <img className="w-100 h-80 object-cover" src={image} />
            <h4 className="font-bold">{name}</h4>
            <p className="pb-4">{description}</p>
            <p>Category: <span className="ml-5">{category}</span></p>
            <p>Price: <span className="ml-5">₦{price}</span></p>
            <p>Stock: <span className="ml-5">{stock}</span></p>
            <div className="flex justify-between mt-4">
                <button
                    className="bg-blue-600 text-white px-4 py-1 rounded-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={addToCart}
                    disabled={adding || outOfStock}
                >
                    {outOfStock ? "Out of Stock" : adding ? "Adding..." : "Add to Cart"}
                </button>
                {isOwner && (
                    <div className="flex gap-3">
                        <Link to={`/edit-product/${productId}`} className="bg-green-600 text-white px-4 py-1 rounded-sm cursor-pointer">Update</Link>
                        <button className="bg-red-600 text-white px-4 py-1 rounded-sm cursor-pointer"
                            onClick={() => {
                                if (window.confirm(`Delete "${name}"? This can't be undone.`)) {
                                    onDelete(productId);}}
                                }>Delete</button>
                    </div>
                )}
            </div>
            {message && <p className="text-sm mt-2">{message}</p>}
        </div>
    )
}