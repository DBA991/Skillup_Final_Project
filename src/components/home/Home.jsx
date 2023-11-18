
import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";
function Home ({cartItems, setCartItems}) {
  const options = {
    initial: { x: "-100%", opacity: "0" },
    whileInView: {
      x: "0",
      opacity: "100%",
    },
  };
  return (
    <>
      <section className="home">
        <div style={{backgroundColor:"rgba(255,255,255,0.3)"}}>
          <motion.h1 {...options}>Burger Shop</motion.h1>
          <motion.p
            {...options}
            transition={{
              delay: "0.2",
            }}
          >
            Give yourself a tasty burger.
          </motion.p>
        </div>
        <motion.a
          href="#menu"
          initial={{
            y: "-100%",
            opacity: "0",
          }}
          whileInView={{ y: "0", opacity: "100%" }}
          transition={{ delay: "0.6" }}
        >
          Explore Menu
        </motion.a>
      </section>
      <Menu cartItems={cartItems} setCartItems={setCartItems} />
      <Founder />
    </>
  );
};
export default Home;
