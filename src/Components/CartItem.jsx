import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
const CartItem = ({ prod, removeFunc }) => {
  const { product, count } = prod;
  return (
    <>
      {count !== 0 ? (
        <>
          <ul className="cartList">
            <li>
              <img src={product.images[0]} width="50px" height="60px" />
            </li>
            <li>
              <FontAwesomeIcon icon={faIndianRupeeSign} className="rupeeIcon" />
              {product.price}
            </li>
            <li>{product.availabilityStatus}</li>
            <li>{count}</li>
            <li>
              <button
                className="cartRemovebtn"
                onClick={() => removeFunc(product)}
              >
                <FontAwesomeIcon icon={faTrash} className="cartRemoveIcon" />
              </button>
            </li>
          </ul>
        </>
      ) : (
        <>
          <h1>Your Cart is Empty</h1>
        </>
      )}
    </>
  );
};
export default CartItem;
