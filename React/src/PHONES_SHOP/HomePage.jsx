import { useState, useEffect } from "react";
import { Link } from "react-router";
import Navbar from "./Navbar";
import AnimationBar from "../Components/AnimationBar";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function HomePage() {
    const [activeIndex, setActiveIndex] = useState(0);
    // Auto-advance to the next product every 3 seconds
     useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % products.length)
        }, 5000)

    // Clear the timer when the component unmounts, so it doesn't keep running (and trying to update state) after it's gone
        return () => clearInterval(timer)
    }, [])

    const message = "Your one-stop marketplace for all your modern phones, tabs, computers and accessories. Visit us at no. 69 Excellent Life Avenue, Port Harcourt or call: 09169227867, 09162727739 or send us an email: clevisgajz@clevis.com. Thank you for trusting us always."
     
    const products = [
     {name: "Apple iPhone 15 Pro", description: "6.1-inch Super Retina XDR display, A17 Pro chip, 256GB storage, Triple camera system.",
        price: 1199000, category: "Smartphones", stock: 15, image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569"
     },
        {
            name: "Samsung Galaxy S24 Ultra", description: "6.8-inch Dynamic AMOLED display, Snapdragon 8 Gen 3, 512GB storage.",
            price: 1299000, category: "Smartphones", stock: 20, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf"
        },
        {
            name: "Dell XPS 15", description: "15.6-inch OLED display, Intel Core i7, 16GB RAM, 1TB SSD.",
            price: 1699000, category: "Laptops", stock: 8, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
        },
        ]


    return (
        <div>
            <Navbar/>
            <AnimationBar message={message}/>
            <div>
            <div className="relative w-full h-[400px] overflow-hidden border">
                {products.map((product, index) => (
                    <div key={index}
                        className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out 
                            ${index === activeIndex ? "opacity-100" : "opacity-0"}`}>
                        <img src={product.image} alt={product.name} className="h-52 object-contain"/>
                        <h2 className="mt-4 text-2xl font-bold">{product.name}</h2>
                        <p className="text-xl text-blue-600">₦{product.price.toLocaleString()}</p>
                    </div>
                ))}
                
            </div>
            <div className="flex justify-center gap-15">
            <Link to="/products" className="flex items-center"
                >View all products<IoIosArrowRoundForward/></Link>
            <Link to="/register" className=""
                >Become a Seller</Link>
            </div>
            </div>
            </div>
        
    )
}