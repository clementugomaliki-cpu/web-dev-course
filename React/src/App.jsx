import HomePage from "./PHONES_SHOP/HomePage";
import { BrowserRouter, Routes, Route } from "react-router";
import UserAccounts from "./PHONES_SHOP/UserAccounts";
import CreateNewAccount from "./PHONES_SHOP/CreateNewAccount";
import Products from "./PHONES_SHOP/Products";
import AddProduct from "./PHONES_SHOP/AddProduct";
import EditProduct from "./PHONES_SHOP/EditProduct";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<UserAccounts/>}/>
        <Route path="/register" element={<CreateNewAccount/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/add-product" element={<AddProduct/>} />
        <Route path="/edit-product/:id" element={<EditProduct/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App