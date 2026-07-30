import { useEffect } from "react";
import { useParams } from "react-router";

export default function Details() {
    const { id } = useParams()
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(jsonplaceholder.typicode.com/users)

                const selectedUser = users.find((user) => )

            } catch {}
        }
    }, [])
}

const tabs = [
    {id: 1, name: Felix, age:24 }
]
const [activeTab, setActiveTab] = useState(1)
return (
    <div>
        <button onClick={() => {setActiveTab(t.id)}} className={`p-2 {activeTab === ti.d ? "bg-red-500 text-white"}`}></button>
    </div>
)