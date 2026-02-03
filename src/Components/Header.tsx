// import Login from "./Login";
// import Signup from "./Signup";
// import { useState } from "react";
import HeelsLogo from '../assets/Heels-logo.png';
import UserIcon from '../assets/user-icon.webp';
export default function Header() {
  // const [isLoginClicked, setIsLoginClicked] = useState(false);
  // const [isSignupClicked, setIsSignupClicked] = useState(false);
  // const { isLoggedIn, logout, userInfo } = useAuth();

  // setIsLoginClicked(false);
  // const handleLoginClick = () => {
  //   setIsLoginClicked(true);
  //   setIsSignupClicked(false);
  // };

  // const handleClosePopupWithForm = () => {
  //   setIsLoginClicked(false);
  //   setIsSignupClicked(false);
  // };

  return (
    <div className="header">
      <nav className="headernav">
        <div className="headernav-logo">
          <img
            className="headernav-logo-photo"
            src={HeelsLogo}
            alt="tacones-logo"
          />
          <a className="headernav-logo-name" href="#hero">
            Heels Bucaramanga
          </a>
        </div>

        <div className="headernav-items">
          <a className="headernav-item" href="#hero">
            Home
          </a>
          <a className="headernav-item" href="#classes">
            Clases
          </a>
          <a className="headernav-item" href="#horarios">
            Horarios
          </a>
          <a className="headernav-item" href="#contacto">
            Contacto
          </a>
          <div className="header__access" >
            
            <button className="header__access-login" >
              Log in
            </button>
            <button
              className="header__access-signup"
            >
              Log Out
            </button>
            <img className="header__access-icon" src={UserIcon} alt="user-icon" />
          </div>
        </div>
      </nav>
      {/* {isLoginClicked ? <Login onClose={handleClosePopupWithForm} /> : ""}
      {isSignupClicked ? <Signup onClose={handleClosePopupWithForm} /> : ""} */}
    </div>
  );
}
