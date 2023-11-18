import React from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import Popup from "reactjs-popup";
import CartItem from "./CartItem";

function Cart ({ cartItems, setCartItems }) {
  const cartItemsData = [
    {
      title: "Cheese Burger",
      img: burger1,
      nuItems: cartItems[1],
      increment: () => increment(1),
      decrement: () => decrement(1),
    },
    {
      title: "Veg Cheese Burger",
      img: burger2,
      nuItems: cartItems[2],
      increment: () => increment(2),
      decrement: () => decrement(2),
    },
    {
      title: "Cheese Burger w French Fries",
      img: burger3,
      nuItems: cartItems[3],
      increment: () => increment(3),
      decrement: () => decrement(3),
    },
  ];

  const increment = (item) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [item]: (prevItems[item] || 0) + 1,
    }));
  };

  const decrement = (item) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [item]: prevItems[item] > 0 ? prevItems[item] - 1 : 0,
    }));
  };
  return (
    <section className="cart">
      <main>
        {cartItemsData.map((item, index) => (
          <CartItem
            key={index}
            title={item.title}
            img={item.img}
            nuItems={item.nuItems}
            increment={item.increment}
            decrement={item.decrement}
          />
        ))}

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>
              ₹{cartItems[1] * 200 + cartItems[2] * 500 + cartItems[3] * 1800}
            </p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>
              ₹
              {(cartItems[1] * 200 + cartItems[2] * 500 + cartItems[3] * 1800) *
                0.18}
            </p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p id="total">
              ₹
              {cartItems[1] * 200 +
                cartItems[2] * 500 +
                cartItems[3] * 1800 +
                (cartItems[1] * 200 +
                  cartItems[2] * 500 +
                  cartItems[3] * 1800) *
                  0.18 +
                200}
            </p>
          </div>
          <button>
            {cartItems[1] * 200 +
              cartItems[2] * 500 +
              cartItems[3] * 1800 +
              (cartItems[1] * 200 + cartItems[2] * 500 + cartItems[3] * 1800) *
                0.18 ===
            0 ? (
              <Popup trigger={<span> Checkout </span>}>
                <div
                  style={{
                    color: "red",
                    backgroundColor: "#fff",
                    padding: "10px",
                    borderRadius: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Your cart is empty!
                </div>
              </Popup>
            ) : (
              <Link to="/shipping">Checkout</Link>
            )}
          </button>
        </article>
      </main>
    </section>
  );
};

export default Cart;
