import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

function Menu ({cartItems, setCartItems }) {
  const menu = [
    {
      item: 1,
      burgerSrc: burger1,
      price: 200,
      title: "Cheese Burger",
      ingredients: {
        bread: "yes",
        meat: "yes",
        tomato: "yes",
        cheese: "yes",
        beacon: "no",
        salad: "no",
        onion: "no",
        fries: "no",
      },
    },
    {
      item: 2,
      burgerSrc: burger2,
      price: 500,
      title: "Veg Cheese Burger",
      ingredients: {
        bread: "yes",
        meat: "double",
        tomato: "double",
        cheese: "double",
        beacon: "yes",
        salad: "yes",
        onion: "yes",
        fries: "no",
      },
    },
    {
      item: 3,
      burgerSrc: burger3,
      price: 1800,
      title: "Cheese Burger w French Fries",
      ingredients: {
        bread: "yes",
        meat: "double",
        tomato: "double",
        cheese: "double",
        beacon: "yes",
        salad: "yes",
        onion: "yes",
        fries: "yes",
      },
    },
  ];

  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        {menu.map((burger, index) => {
          return (
            <MenuCard
              key={burger.item}
              itemNum={burger.item}
              burgerSrc={burger.burgerSrc}
              price={burger.price}
              title={burger.title}
              ingredients={burger.ingredients}
              setCartItems={setCartItems}
              cartItems={cartItems}
              delay="0.2"
            />
          );
        })}
      </div>
    </section>
  );
};
export default Menu;
