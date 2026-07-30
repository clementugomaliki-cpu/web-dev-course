import { BrowserRouter, Routes, Route } from "react-router"
import RickMortyHome from "./Components/RickMortyHome";
import RickMortyCharacters from "./Components/RickMortyCharacters";
import RickMortyCharacterProfile from "./Components/RickMortyCharacterProfile";
import RickMortyError from "./Components/RickMortyError";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <RickMortyHome/> } /> 
        <Route path="/characters" element={ <RickMortyCharacters/> } />
        <Route path="/characters/:id" element={ <RickMortyCharacterProfile/> } />
        <Route path="*" element={ <RickMortyError/> } />
      </Routes>
    </BrowserRouter>
  );
};
export default App