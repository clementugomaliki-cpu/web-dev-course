import { useState } from "react";

export default function CreateNewAccount() {
    const [formInput, setFormInput] = useState({
        name: "", email: "", role: "", address: "", phone: "", password: "", confirmPassword: ""
    });
    const [isRegistered, setIsRegistered] = useState(false);
    const [error, setError] = useState("");

    const setInput = (e) => setFormInput(prev => ({...prev, [e.target.name]: e.target.value}));
    async function createAccount() {
        if (formInput.password !== formInput.confirmPassword) {
            setError("Passwords do not match");
            return
        }
        try {
            const {confirmPassword, ...payload} = formInput;
            const response = await fetch("https://web-dev-course-1nr1.onrender.com/users/register", {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        if (!response.ok) {
            setError(data.message || "Something went wrong. Try again.");
            return
        }
        setIsRegistered(true);
        setError("");
        setFormInput({name: "", email: "", role: "", address: "", phone: "", password: "", confirmPassword: ""});
        
        } catch (e) {
            console.log(e)
        }
        
    }

    return (
        <div >
            <form action="" className="flex flex-col justify-center gap-5 my-10 mx-20"
                onSubmit={(e)=> {
                    e.preventDefault();
                    createAccount();
                    
                }}>
                <label htmlFor="username">Full Name:
                    <input type="text" name="name" id="username" required className="border rounded-sm block w-100 border-blue-600 outline-none"
                        onChange={setInput} value={formInput.name}/>
                </label>
                <label htmlFor="email">Email Address:
                    <input type="email" name="email" id="email" required className="border rounded-sm block w-100 border-blue-600 outline-none" 
                        onChange={setInput} value={formInput.email}/>
                </label>
                <label htmlFor="role">
                    <select name="role" id="role" required onChange={setInput} className="border rounded-sm block w-100 border-blue-600 outline-none">
                        <option value="">Select a role</option>
                        <option value="Buyer" >Buyer</option>
                        <option value="Seller">Seller</option>
                    </select>
                </label>
                <label htmlFor="address">Current Address:
                    <input type="tel" name="address" id="address" required className="border rounded-sm block w-100 border-blue-600 outline-none"
                        onChange={setInput} value={formInput.address}/>
                </label>
                <label htmlFor="phone">Phone Number:
                    <input type="tel" name="phone" id="phone" required className="border rounded-sm block w-100 border-blue-600 outline-none"
                        onChange={setInput} value={formInput.phone}/>
                </label>
                <label htmlFor="password">Create Password
                    <input type="password" name="password" id="password" required className="border rounded-sm block w-100 border-blue-600 outline-none"
                        onChange={setInput} value={formInput.password}/>
                </label>
                <label htmlFor="confirmPassword">Confirm Password
                    <input type="password" name="confirmPassword" id="confirmPassword" required className="border rounded-sm block w-100 border-blue-600 outline-none"
                        onChange={setInput} value={formInput.confirmPassword}/>
                </label>
                <button type="submit" className="bg-blue-600 text-white w-100 font-semibold py-2 rounded-xl cursor-pointer">Create Account</button>
        </form>
        {isRegistered && (
            <p>Account successfully created. Congratulations!</p>
        )} 
        {error && (
            <p>{error}</p>
        )}
        
        </div>
    )
}