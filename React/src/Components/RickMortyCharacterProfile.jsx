import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

export default function RickMortyCharacterProfile() {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function userProfile() {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                const data = await response.json();
                setProfile(data);
            } catch (error) {
                setError("Profile not found")
            } finally {
                setLoading(false);
            }
        }
        userProfile();
    }, [id])

    if (isLoading) return <p>Page loading, please wait...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <>
            <div className="grid grid-cols-4">
                <div className="bg-green-900 h-screen"></div>
                <div className="flex flex-col pt-4 col-span-2 rounded-3xl items-center">
                    <img src={profile.image} alt="User profile photo" className="w-100 rounded-full"/>
                    <div className="mt-4 text-xl space-y-1">
                        <h2 className="font-bold bg-gray-200">{profile.name}</h2>
                        <p>Status: <span className="ml-5">{profile.status}</span></p>
                        <p>Species: <span className="ml-5">{profile.species}</span></p>
                        <p>Gender: <span className="ml-5">{profile.gender}</span></p>
                        <p>Origin: <span className="ml-5">{profile.origin.name}</span></p>
                        <p>Location: <span className="ml-5">{profile.location.name}</span></p>
                    </div>
                </div>
                <div className="bg-green-900">
                    <Link to="/characters" className="text-white font-medium flex justify-end m-4 ">Back to Characters</Link>
                    <Link to="/" className="flex justify-end m-5 text-white font-medium">Back to Home</Link>
                </div>
            </div>
        </>
    )
}