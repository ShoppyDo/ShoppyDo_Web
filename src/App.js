import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { loadUser } from "./features/actions/userActions";
import './styles/App.css';
import './styles/Home.css';
import './styles/Layouts.css';
import './styles/Signup.css';
import './sass/Style.scss';
import Header from "./components/layouts/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Shipping from "./components/pages/Shipping";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Footer from "./components/layouts/Footer";
import ProductsForm from "./components/admin/ProductsForm";
import ProtectedRoute from "./components/routes/ProtectedRoute";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser);
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
          <Route path="/shipping" element={<ProtectedRoute><Shipping /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/adminproductsform" element={<ProtectedRoute><ProductsForm /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
