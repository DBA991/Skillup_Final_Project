import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import MyOrders from "./components/myOrders/MyOrders";
import OrderDetails from "./components/myOrders/OrderDetails";
import About from "./components/about/About";
import Forgotpassword from "./components/login/Forgotpassword"
import Terms from "./components/login/Terms"
import React from "react";


import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/about.scss";

function App() {
  const [cartItems, setCartItems] = React.useState({
    1:0,
    2:0,
    3:0
  });
  const [isAuth, setIsAuth] = React.useState(false)

  return (
    <Router>
      <Header isAuth={isAuth} setIsAuth={setIsAuth}/>
      <Routes>
        <Route path="/" element={<Home cartItems={cartItems} setCartItems={setCartItems}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth}/>} />
        <Route path="/me" element={<Profile />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/order/:id" element={<OrderDetails />} /> 
        <Route path="/forgot" element={<Forgotpassword />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
