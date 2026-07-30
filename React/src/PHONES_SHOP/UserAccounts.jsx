import { useState } from "react";
import { Link } from "react-router";

export default function UserAccounts() {
    const [userDetails, setUserDetails] = useState({email: "", password: ""});
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState("");
    
    const setInput = (e) => setUserDetails(prev => ({...prev, [e.target.name]: e.target.value}));
    async function signIn() {
        try {
        const response = await fetch("https://web-dev-course-1nr1.onrender.com/users/profile", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userDetails)
        })
        const data = await response.json();
        if (!response.ok) {
            setError(data.message || "Something went wrong. Check your details and try again.");
            return
        }
        localStorage.setItem("token", data.token);
        setSubmit(true);
        setUserDetails({email: "", password: ""})
        setError("")
        
        } catch (err) {
            console.log(err)
        } 
    }
    
    return (
        <div>
            <form action=""
                onSubmit={(e) => {
                    e.preventDefault();
                    signIn()
                }}>
                    <input type="email" name="email" required placeholder="Enter your registered email address" className="border rounded-sm block w-100 border-blue-600 outline-none" 
                        onChange={setInput} value={userDetails.email}/>
                
                    <input type="password" name="password" placeholder="Enter your password" className="border rounded-sm block w-100 border-blue-600 outline-none"
                        onChange={setInput} value={userDetails.password}/>
                <button type="submit" className="bg-blue-600 text-white w-100 mx-20 font-semibold py-2 rounded-xl cursor-pointer">Log in</button>
            </form>
            {submit && (
            <p className="text-green-600">Login Successful! <Link to="/products" className="underline font-semibold">Start Shopping</Link></p>
            )}
            {error && (
                <p>{error}</p>
            )}
        </div>
    )
}