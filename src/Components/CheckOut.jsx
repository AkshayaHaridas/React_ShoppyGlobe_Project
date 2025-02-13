import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const CheckOut = () => {
  const products = useSelector((state) => state.shoppingCart.items);
  const total = products.reduce((acc, item) => {
    acc = acc + item.count * item.product.price;
    return acc;
  }, 0);
  if (products.length) {
    return (
      <>
        <h1
          style={{
            marginTop: "100px",
            width: "20%",
            margin: "auto",
          }}
        >
          CheckOut
        </h1>{" "}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            margin: "25px",
          }}
        >
          {products.map((item) => {
            return (
              <ul
                key={item.product.id}
                style={{
                  border: "1px solid black",
                  width: "20%",
                  margin: "auto",
                }}
              >
                <li className="price">
                  Price:
                  <FontAwesomeIcon
                    icon={faIndianRupeeSign}
                    className="rupeeIcon"
                  />
                  {item.product.price}
                </li>{" "}
                <li style={{ color: "green" }}>
                  {item.product.availabilityStatus}
                </li>
                <li>No: {item.count}</li>
              </ul>
            );
          })}
          <div
            style={{
              width: "20%",
              margin: "auto",
            }}
          >
            Total :{" "}
            <FontAwesomeIcon icon={faIndianRupeeSign} className="rupeeIcon" />
            {total}
          </div>
        </div>
      </>
    );
  } else {
    return <Link to="/">Explore more products</Link>;
  }
};
export default CheckOut;
