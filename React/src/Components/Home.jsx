import { useState } from "react";

export default function Home() {
    const [users, setUsers] = useState([])
    const getUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data)
            console.log(data)
    };
    getUsers();
    
    return (
       <div></div> 
    );
}

