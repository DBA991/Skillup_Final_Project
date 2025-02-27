import React from "react";
import { motion } from "framer-motion";
import burger from "../../assets/burger2.png";
import burger1 from "../../assets/burger3.png";
import Popup from "reactjs-popup";
function Contact() {
  const [fields, setFields] = React.useState ({name:"", email:"", message:""})
  return (

    <>
      <section className="contact">
        <motion.form
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileInView={{
            x: "0",
            opacity: "100%",
          }}
        >
          <h2>Contact Us</h2>
          <input type="text" placeholder="Name" value={fields.name} onChange={(e) => setFields((prevValue) => ({...prevValue, name: e.target.value}))} />
          <input type="email" placeholder="Email" value={fields.email} onChange={(e) => setFields((prevValue) => ({...prevValue, email: e.target.value}))}/>
          <textarea
            style={{ resize: "none" }}
            placeholder="Message..."
            cols="30"
            rows="10"
            value={fields.message} onChange={(e) => setFields((prevValue) => ({...prevValue, message: e.target.value}))}
          ></textarea>
          {fields.name ==="" && fields.email==="" && fields.message===""?
          <Popup trigger={<button type="button">Send</button>}>
            <div
              style={{
                color: "red",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              You have to fill all the fields!
            </div>
          </Popup>:
          <Popup trigger={<button type="button">Send</button>}>
            <div
              style={{
                color: "red",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Thank you for contacting us! We will get back to you shortly.
            </div>
          </Popup>}
        </motion.form>
        <motion.div
          className="formBorder"
          initial={{
            x: "100vw",
            opacity: 0,
          }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            initial={{
              y: "-100vh",
              x: "50%",
              opacity: 0,
            }}
            animate={{ x: "50%", y: "-50%", opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <img src={burger} alt="Burger" />
          </motion.div>
        </motion.div>
      </section>
      <section className="contact">
        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileInView={{
            x: "0",
            opacity: "100%",
          }}
        >
          <h2>Come to Us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10841.654540971947!2d76.6263609033313!3d16.11193444550072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1700222657098!5m2!1sit!2sit"
            style={{ border: 0, width: "450px", height: "450px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
        <motion.div
          className="formBorder"
          initial={{
            x: "100vw",
            opacity: 0,
          }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            initial={{
              y: "-100vh",
              x: "50%",
              opacity: 0,
            }}
            animate={{ x: "50%", y: "-50%", opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <img src={burger1} alt="Burger" />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
export default Contact;
