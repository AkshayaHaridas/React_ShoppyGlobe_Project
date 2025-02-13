import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../Utils/CartSlice";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
const Cart = () => {
  const products = useSelector((state) => state.shoppingCart.items);
  const dispatch = useDispatch();
  console.log("cart prodycts in cart.jsx", products);
  const removeProduct = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <>
      {products.length !== 0 ? (
        <div className="cart">
          <div className="cartOuter">
            {products.map((product) => {
              return (
                <div key={product.product.id}>
                  <CartItem prod={product} removeFunc={removeProduct} />
                </div>
              );
            })}
          </div>
          <div className="checkOut">
            <Link to="/CheckOut" className="routerLink btnCheckOut">
              <button className="btnCheckOut">CheckOut</button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h1>Your Cart is Empty</h1>
        </>
      )}
    </>
  );
};
export default Cart;
