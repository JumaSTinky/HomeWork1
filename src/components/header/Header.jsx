import "./Header.css";
import logo from "../header/logo.png";

const Header = () => {
  return (
    <>
      <div className="container">
        <span className="icons">
          <img src={logo} alt="icon" className="icon" />
        </span>
        <div className="mainOfText">
          <a className="firstText">Features</a>

          <a className="secondText">Pricing</a>

          <a className="thirdText">Resources</a>
        </div>

        <button className="firstButton">Log in</button>
        <button className="secondButton">Sign up</button>
      </div>
    </>
  );
};

export default Header;
