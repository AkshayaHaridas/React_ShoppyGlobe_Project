import { useDispatch } from "react-redux";
import { addItems } from "../Utils/CartSlice";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
const ProductItem = ({ productInfo }) => {
  const [message, SetMessage] = useState("");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(addItems(productInfo));
    e.target.disabled = true;
    SetMessage("added");
  };
  return (
    <>
      <div className="productItem">
        <ul>
          <li>
            <img src={productInfo.thumbnail} width="50px" height="50px" />
          </li>
          <li>
            <div className="price">
              Price:{" "}
              <FontAwesomeIcon icon={faIndianRupeeSign} className="rupeeIcon" />
              {productInfo.price}
            </div>
            <div className="discount">
              Discount:
              {productInfo.discountPercentage} %
            </div>
          </li>
        </ul>
        <button className="btnItem" onClick={(e) => handleClick(e)}>
          Add to Cart
        </button>
        {message !== "" && <div className="addedToCart">Added to Cart</div>}
      </div>
    </>
  );
};
export default ProductItem;
