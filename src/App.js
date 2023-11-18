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
  const arr = [
    {
      address: "sjda 12-32ss dsad",
      name: "Stuart",
      phone: "2564644646",
      oStatus: "Delivered",
      pAt: "23-02-2022",
      dAt: "25-02-2022",
      pMeth: "COD",
      id: "891080182",
      payAt: "23-02-2022",
      item1: 10,
      item2: 20,
      item3: 30,
    },
    {
      address: "sjda 12-32ss dsad",
      name: "Stuart",
      phone: "2564644646",
      oStatus: "Processing",
      pAt: "2-03-2022",
      dAt: "2-03-2022",
      pMeth: "PayPal",
      id: "564654654",
      payAt: "2-03-2022",
      item1: 10,
      item2: 15,
      item3: 30,
    },
    {
      address: "sjda 12-32ss dsad",
      name: "Stuart",
      phone: "2564644646",
      oStatus: "Processed",
      pAt: "19-04-2022",
      dAt: "19-04-2022",
      pMeth: "Cash",
      id: "754645645",
      payAt: "20-04-2022",
      item1: 10,
      item2: 20,
      item3: 22,
    },
    {
      address: "sjda 12-32ss dsad",
      name: "Stuart",
      phone: "534645435343",
      oStatus: "Sent",
      pAt: "30-05-2022",
      dAt: "31-05-2022",
      pMeth: "CryptoCoins",
      id: "644656469",
      payAt: "30-05-2022",
      item1: 30,
      item2: 15,
      item3: 30,
    },
  ];
  const orderRoutes = arr.map((e, index) => (
    <Route
      key={index}
      path={`/order/${e.id}`}
      element={<OrderDetails arr={arr[index]} isAuth={isAuth} />}
    />
  ));

  return (
    <Router>
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/shipping" element={<Shipping isAuth={isAuth} />} />
        <Route path="/login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route path="/me" element={<Profile isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route path="/myorders" element={<MyOrders arr={arr} isAuth={isAuth} />} />
        {orderRoutes}
        <Route path="/forgot" element={<Forgotpassword />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;