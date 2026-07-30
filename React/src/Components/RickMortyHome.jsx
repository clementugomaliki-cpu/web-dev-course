import { Link } from "react-router"
//import profileImage from '../assets/

export default function RickMortyHome() {
    return (
        <div className="h-screen flex flex-col justify-between">
            <div>
            <div className="flex items-center justify-between">
                <h1 className="text-[36px] m-5">React Router and the Rick and Morty API Exercise</h1>
                <div className="m-5 space-x-5 text-red-700 font-medium">
                    <Link to="/characters" className="">Characters</Link>
                </div>
            </div>
            <p className="m-5 w-250 ">This is an exercise to test ability on how to use the React Router functions, including the correct use of Routes to navigate between several pages of a website.
                Included in the exercise is the use of Hooks to perform functions such as a GET request, using the Rick and Morty API.
            </p>
            </div>
            
            <footer>
                <div className="bg-green-900 text-white h-25 flex justify-center items-center font-medium">&copy; Clement 2026</div>
            </footer>
        </div>
    )
}