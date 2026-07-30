import { useState } from "react";
import { useNavigate, Link } from "react-router";

export default function AddProduct() {
    const navigate = useNavigate();
    const [newProduct, setNewProduct] = useState({
        name: "", description: "", category: "", image: "", price: "", stock: ""});
    
    const [errorMessage, setErrorMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const setInput = (e) =>
        setNewProduct(prev => ({ ...prev, [e.target.name]: e.target.value }));

    async function addProduct() {
        setSubmitting(true);
        setErrorMessage("");
        try {
            const token = localStorage.getItem("token");
            const response = await fetch("https://web-dev-course-1nr1.onrender.com/products/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    ...newProduct,
                    price: Number(newProduct.price),
                    stock: Number(newProduct.stock)
                })
            });
            const data = await response.json();
            if (!response.ok) {
                setErrorMessage(data.message || "Something went wrong.");
                return;
            }
            navigate("/products");
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="max-w-lg mx-auto my-10">
            <Link to="/products" className="underline">Back to Products</Link>
            <h1 className="text-2xl font-semibold mt-4 mb-6">Add a Product</h1>

            <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                    e.preventDefault();
                    addProduct();
                }}
            >
                <input type="text" name="name" required placeholder="Product name"
                    className="border rounded-sm p-2 border-blue-600 outline-none"
                    onChange={setInput} value={newProduct.name} />

                <textarea name="description" required placeholder="Description"
                    className="border rounded-sm p-2 border-blue-600 outline-none"
                    onChange={setInput} value={newProduct.description} />

                <select name="category" required
                    className="border rounded-sm p-2 border-blue-600 outline-none bg-white"
                    onChange={setInput} value={newProduct.category}>
                    <option value="" disabled>Select a category</option>
                    <option value="Smartphones">Smartphones</option>
                    <option value="Laptops">Laptops</option>
                    <option value="Audio">Audio</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Monitors">Monitors</option>
                    <option value="Storage">Storage</option>
                    <option value="Phone Accessories">Phone Accessories</option>
                    <option value="Gaming">Gaming</option>
                </select>

                <input type="url" name="image" required placeholder="Image URL"
                    className="border rounded-sm p-2 border-blue-600 outline-none"
                    onChange={setInput} value={newProduct.image} />

                <input type="number" name="price" required min="0" placeholder="Price"
                    className="border rounded-sm p-2 border-blue-600 outline-none"
                    onChange={setInput} value={newProduct.price} />

                <input type="number" name="stock" required min="0" placeholder="Stock quantity"
                    className="border rounded-sm p-2 border-blue-600 outline-none"
                    onChange={setInput} value={newProduct.stock} />

                <button type="submit" disabled={submitting}
                    className="bg-blue-600 text-white font-semibold py-2 rounded-xl cursor-pointer disabled:opacity-50">
                    {submitting ? "Adding..." : "Add Product"}
                </button>
            </form>

            {errorMessage && <p className="text-red-600 mt-4">{errorMessage}</p>}
        </div>
    )
}