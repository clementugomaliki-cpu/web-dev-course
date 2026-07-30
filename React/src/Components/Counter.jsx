import { useState } from "react";

/*const [number, addNumber] = useState(0);
return(
    <div>
        <button onClick={() => addNumber(number + 1)}>
            {number}
        </button>
    </div>
)
*/
export default function Counter() {
const [input, setInput] = useState("Clement");
return (
    <div>
        <p>Hello</p>
        <form action="">
            <label htmlFor="">Name:
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            </label>
        </form>
    </div>
)
}

/*const [input, setInput] = useState("");
function handleChange(event) {
    setInput(event.target.value)
}
return (
    <div>
        <form action="">
            <input type="text" value={input} onChange={handleChange} />
        </form>
    </div>
)
    */
