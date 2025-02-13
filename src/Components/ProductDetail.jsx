import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "./ProductItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import date from "../Utils/Date";
const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const param = useParams();
  const id = param.id;
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status}-${response.statusText}`);
        } else {
          return response.json();
        }
      })
      .then((response) => {
        const product = response.products.find((x) => x.id == id);
        setProduct(product);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [id]);
  if (error) {
    return (
      <>
        <h1>{error}</h1>
        <p>Something is not working!!! Resolving soon...</p>
      </>
    );
  }
  if (product) {
    return (
      <div className="productDetails">
        <ul className="productDetailList">
          <li className="productTitle">{product.title}</li>
          <li style={{ color: "orange", fontWeight: "800" }}>
            {product.brand}
          </li>
          <li style={{ color: "green" }}>{product.availabilityStatus}</li>
          <li className="imgList">
            <img src={product.images[0]} />
          </li>
          <li style={{ height: "100px" }}>
            <i>{product.description}</i>
          </li>

          <li style={{ color: "rgb(71, 175, 227)" }}>
            {product.shippingInformation}
          </li>

          <li>{product.warrantyInformation}</li>
          <li>Quantity Left : {product.minimumOrderQuantity}</li>
          <li style={{ color: "rgb(29, 34, 37)", fontWeight: "800" }}>
            {product.returnPolicy}
          </li>
        </ul>
        <ul className="reviewBlock">
          <li
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              gap: "7%",
            }}
          >
            <h1>Reviews</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                gap: "7%",
              }}
            >
              {" "}
              {product.reviews.map((x, index) => {
                return (
                  <ul key={index}>
                    <li style={{ color: "rgb(39, 95, 75)", fontWeight: "800" }}>
                      <span className="spanReview">Rating:</span> {x.rating}
                    </li>
                    <li>
                      <span className="spanReview">Comments:</span> {x.comment}
                    </li>
                    <li>
                      <span className="spanReview">Date:</span> {date(x.date)}
                    </li>
                  </ul>
                );
              })}
            </div>
          </li>
        </ul>

        <ProductItem productInfo={product} />
      </div>
    );
  }
};
export default ProductDetail;
