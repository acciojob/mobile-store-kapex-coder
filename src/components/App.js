
import React from "react";
import './../styles/App.css';
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import AdminPanel from "./AdminPanel/AdminPanel";
import ProductList from "./ProductList/ProductList";
import ProductDetails from "./ProductDetails/ProductDetails";
import AdminProductDetails from "./AdminPanel/ProductDetails/ProductDetails";

const App = () => {
  return (
    <>
      <header>
        <nav>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/admin">Admin</NavLink></li>
        </nav>
      </header>

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />}></Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminPanel />}></Route>
        <Route path="/admin/products/:id" element={<AdminProductDetails />}></Route>

        {/* Product Routes */}
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>

        <Route path="*" element={() => (<h1>Page Not Found</h1>)} />
      </Routes>
    </>
  )
}

export default App
