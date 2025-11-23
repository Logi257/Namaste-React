import { LOGO } from "../../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div className="img-container">
        <img src={LOGO} alt="" />
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
