import { useContext, useState } from "react";
import { LOGO } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedUser } = useContext(UserContext);
  // console.log(loggedUser);

  //Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <header className="flex justify-between items-center m-3 outline-2 shadow-xl">
      <div className="w-52">
        <Link to="/">
          <img src={LOGO} alt="" />
        </Link>
      </div>
      <nav>
        <ul className="flex px-4 gap-5">
          <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          {/* <li>
            <Link to="/about" className="nav-links">
              About Us
            </Link>
          </li> */}
          <li>
            <Link to="/contact" className="nav-links">
              Contact Us
            </Link>{" "}
          </li>
          {/* <li>
            <Link to="/grocery" className="nav-links">
              Grocery
            </Link>
          </li> */}
          <li className="nav-links">
            {" "}
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li className="nav-links">{loggedUser}</li>
           <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button> 
        </ul>
      </nav>
    </header>
  );
};

export default Header;
