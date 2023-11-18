import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import Popup from "reactjs-popup";

function Forgotpassword() {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setShowPopup(true);
  };

  return (
    <MDBContainer
      className="p-3 my-5 d-flex flex-column w-50"
      style={{ height: "100vh" }}
    >
      <form onSubmit={handleFormSubmit}>
        <MDBTabs
          pills
          justify
          className="mb-3 d-flex flex-row justify-content-between"
        >
          <MDBTabsItem>
            <MDBTabsLink>Retrieve your password</MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBInput
          wrapperClass="mb-4"
          label="Email address"
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />

        <MDBBtn type="submit" color="primary">
          Send me a mail
        </MDBBtn>
        <Link to="/"> Return to the Home Page </Link>
      </form>
      <Popup open={showPopup} onClose={() => setShowPopup(false)}>
        <div
          style={{
            color: "red",
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          Email sent!
        </div>
      </Popup>
    </MDBContainer>
  );
}

export default Forgotpassword;
