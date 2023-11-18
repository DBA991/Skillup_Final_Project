import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import Popup from "reactjs-popup";

function Login({isAuth, setIsAuth}) {
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [regForm, setRegForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [isPopupROpen, setIsPopupROpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isTermsPopupOpen, setIsTermsPopupOpen] = useState(false);
  const navigate = useNavigate();

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  const handleLogin = () => {
    const dummyUser = {
      email: "dummy@user.com",
      password: "password",
    };

    if (email === dummyUser.email && password === dummyUser.password) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
      setEmail("");
      setPassword("");
      setIsPopupOpen(true);
    }
  };

  const handleRegistration = () => {
    if (isChecked === true) {
      if (
        regForm.name !== "" &&
        regForm.username !== "" &&
        regForm.email !== "" &&
        regForm.password !== ""
      ) {
        setIsAuth(true);
      } else {
        Object.entries(regForm).map(([name]) =>
          setRegForm((prevValue) => ({ ...prevValue, [name]: "" }))
        );
        setIsPopupROpen(true);
      }
    } else {
      setIsTermsPopupOpen(true)
      
    }
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <div className="text-center mb-3">
            <p>Sign in with:</p>
            <div
              className="d-flex justify-content-between mx-auto"
              style={{ width: "40%" }}
            >
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>
            <p className="text-center mt-3">or:</p>
          </div>
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="form1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form2"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <Link to="/forgot"> Forgot password?</Link>
            
          </div>
          <MDBBtn className="mb-4 w-100" onClick={handleLogin}>
            Sign in
          </MDBBtn>
          <Popup open={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
            {isAuth ? (
              navigate("/")
            ) : (
              <div
                style={{
                  color: "red",
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "5px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                No matching user!
              </div>
            )}
          </Popup>
        <div className="text-center">
          <p>
            Not a member? <span style={{color: "#1266f1", cursor:"pointer"}} onClick={() => handleJustifyClick("tab2")}>Register</span>
          </p>
          
          
          </div>
        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === "tab2"}>
          <div className="text-center mb-3">
            <p>Sign up with:</p>
            <div
              className="d-flex justify-content-between mx-auto"
              style={{ width: "40%" }}
            >
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>
            <p className="text-center mt-3">or:</p>
          </div>
          <MDBInput
            wrapperClass="mb-4"
            label="Name"
            id="form1"
            type="text"
            onChange={(e) =>
              setRegForm((prevValue) => ({
                ...prevValue,
                name: e.target.value,
              }))
            }
            value={regForm.name}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Username"
            id="form1"
            type="text"
            onChange={(e) =>
              setRegForm((prevValue) => ({
                ...prevValue,
                username: e.target.value,
              }))
            }
            value={regForm.username}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Email"
            id="form1"
            type="email"
            onChange={(e) =>
              setRegForm((prevValue) => ({
                ...prevValue,
                email: e.target.value,
              }))
            }
            value={regForm.email}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form1"
            type="password"
            onChange={(e) =>
              setRegForm((prevValue) => ({
                ...prevValue,
                password: e.target.value,
              }))
            }
            value={regForm.password}
          />
          <div className="d-flex justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="I have read and agree to the terms" 
              onChange={() => setIsChecked((prevValue) => !prevValue)}
            />
            <Link to="/terms">Read me!</Link>
          </div>
          <MDBBtn className="mb-4 w-100" onClick={handleRegistration}>
            Sign up
          </MDBBtn>
          <Popup open={isPopupROpen} onClose={() => setIsPopupROpen(false)}>
            {isAuth ? (
              navigate("/")
            ) : (
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
            )}
          </Popup>
          <Popup
          open={isTermsPopupOpen} onClose={() => setIsTermsPopupOpen(false)}>
        <div
          style={{
            color: "red",
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          You have to accept our terms!
        </div>
      </Popup>;
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}
export default Login;
