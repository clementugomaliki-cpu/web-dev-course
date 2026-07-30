import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router";
import DecodeToken from "../Components/DecodeToken";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const token = localStorage.getItem("token");
    const user = token ? DecodeToken(token) : null;
    const isSeller = user?.role === "Seller";
    const currentUserId = user?.id;

    

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("https://web-dev-course-1nr1.onrender.com/products/");
                const data = await response.json();
                if (!response.ok) {
                    setErrorMessage(data.message || "Failed to load products.");
                    return;
                }
                setProducts(data.products);
            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    async function deleteProduct(productId) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`https://web-dev-course-1nr1.onrender.com/products/${productId}`, {
            method: "DELETE",
            headers: { authorization: `Bearer ${token}` }
        });
        const data = await response.json();
        if (!response.ok) {
            setErrorMessage(data.message || "Failed to delete product.");
            return;
        }
        setProducts(products.filter(prod => prod._id !== productId));
    } catch (error) {
        setErrorMessage(error.message);
    }
}

    return (
        <>
        <div className="flex justify-between mx-10 my-5">
            <Link to="/" className="underline">Back to Home</Link>
            <div className="flex gap-5">
                {isSeller && (
                    <Link to="/add-product"
                        className="border border-blue-600 rounded-3xl py-1 px-6">
                        Add Product
                    </Link>
                )}
                <button className="bg-blue-600 text-white rounded-3xl py-1 px-6">Cart</button>
            </div>
        </div>

        {loading && <p className="text-center">Loading products...</p>}
        {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}

        <div className="grid grid-cols-3 gap-3 m-2">
        {products.map((product) => (
            <ProductCard
                key={product._id}
                productId={product._id}
                name={product.name}
                description={product.description}
                category={product.category}
                image={product.image}
                price={product.price.toLocaleString()}
                stock={product.stock}
                seller={product.seller}
                currentUserId={currentUserId}
                onDelete={deleteProduct}
            />
        ))}
        </div>
        </>
    )
}