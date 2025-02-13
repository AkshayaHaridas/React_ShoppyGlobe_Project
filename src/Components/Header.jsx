import { Link } from "react-router-dom";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const products = useSelector((state) => state.shoppingCart.items);
  const count = products.length;
  return (
    <div className="header">
      <div className="appHeading">
        <h1>ShoppyGlobe</h1>
      </div>
      <ul className="uList">
        <Link to="/" className="routerLink">
          <li>Home</li>
        </Link>
        <Link to="/Cart" className="routerLink">
          <FontAwesomeIcon icon={faCartShopping} className="cartIcon" />
          <span className="countCart">{count}</span>
        </Link>
      </ul>
    </div>
  );
};
export default Header;
