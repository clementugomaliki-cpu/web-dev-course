import { useEffect, useState } from "react"
import { Link } from "react-router";

export default function RickMortyCharacters() {
    const [characters, setCharacters] = useState([]);
    const [filtered, setFiltered] = useState([]);
    useEffect(() => {
        async function characters() {
            const response = await fetch ("https://rickandmortyapi.com/api/character")
            const data = await response.json();
            setCharacters(data.results);
            setFiltered(data.results);
        }
        characters()
    }, [])

    function searchCharacter(e) {
        const input = e.target.value;
        const searchValue = characters.filter((character) => {
            return character.name.toLowerCase().includes(input);
        })
        setFiltered(searchValue);
    }
    
    return (
        <>
            <div className="flex justify-between items-center mx-2 mr-4 bg-green-900 fixed top-0 right-0 left-0">
            <h2 className="text-2xl ml-6 text-white">The Rick and Morty Characters</h2>
            <input type="text" placeholder="Search character" className="bg-gray-300 rounded-3xl px-15 py-2" onChange={searchCharacter}/>
            <Link to="/" className="flex justify-end m-5 text-white font-medium">Back to Home</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 mt-17 space-x-2 space-y-2">
                {filtered.map((char) => (
                    <>
                    <Link to={`/characters/${char.id}`} key={char.id}>
                        <div className="flex flex-col items-center">
                            <img className="cursor-pointer" src={char.image} alt="Profile photo" />
                            <p key={char.id}>{char.name}</p>
                        </div>
                    </Link>
                    </>
                ))}
                
            </div>
            <Link to="/" className="flex justify-end m-2 text-red-700 font-medium">Back to Home</Link>
        </>
    )
}