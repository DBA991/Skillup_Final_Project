import React from "react";
import { motion } from "framer-motion";
import Popup from "reactjs-popup";
import Ingredient from "./Ingredient";
import { Link } from "react-router-dom";

function MenuCard ({
  cartItems,
  itemNum,
  setCartItems,
  burgerSrc,
  price,
  title,
  ingredients,
  delay = 0,
}) {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const handleAddToCart = () => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [itemNum]: prevItems[itemNum] + 1,
    }));
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <motion.div
      className="menuCard"
      initial={{
        x: "-100%",
        opacity: "0%",
      }}
      whileInView={{
        x: "0",
        opacity: "1",
      }}
      transition={{
        delay: delay * itemNum,
      }}
    >
      <main>
        <img src={burgerSrc} alt={itemNum} />

        <h5>₹{price}</h5>

        <p>{title}</p>

        <Ingredient key={itemNum} ingredient={ingredients} />

        <button onClick={handleAddToCart}>Buy Now</button>

        <Popup open={isPopupOpen} onClose={closePopup}>
          <div
            style={{
              color: "red",
              transform: "translate(0%,-500%)",
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            Added to cart!
            <Link to="/cart">
              <button>View Cart</button>
            </Link>
          </div>
        </Popup>
      </main>
    </motion.div>
  );
};

export default MenuCard;
