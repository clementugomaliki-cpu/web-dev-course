import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import UserProfile from './subscription-tracker/UserProfile';
import SubscribeForm from './subscription-tracker/SubscribeForm';

function App() {
    const [usersList, setUsersList] = useState([]);
    
    function subscriptionList (newUser) {
      setUsersList([...usersList, newUser])
    }
    
  return (
    <div>
      
      <BrowserRouter>
        <header>
        <Link to='/subscribe-page'>Click to Subscribe</Link>
        </header>
        <div>
          {usersList.map((user, index) => (
              <UserProfile key={index} name={user.name} price={user.price} date={user.renewal} />
          ))}
        </div>
        <Routes>
          <Route path='/subscribe-page' element={<SubscribeForm onSubscribe={subscriptionList}/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App