import { Link } from "react-router-dom";
import CustomFetchProducts from "../Utils/CustomFetchProducts";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [validateSearch, setValidateSearch] = useState(false);
  // using custom hook to get the product list
  const { products, error } = CustomFetchProducts(
    "https://dummyjson.com/products"
  );
  useEffect(() => {
    products && setProductList(products);
  }, [products, error]);

  const handleClick = () => {
    if (searchText == "") {
      setValidateSearch(true);
    } else {
      const filteredList = productList.filter((product) => {
        if (product.brand || product.ca) {
          return (
            product.brand.toLowerCase().includes(searchText.toLowerCase()) ||
            product.category.toLowerCase().includes(searchText.toLowerCase())
          );
        } else {
          setFilteredList(null);
          return null;
        }
      });
      filteredList && setProductList(filteredList);
    }
  };
  return (
    <>
      {productList.length !== 0 && (
        <>
          {/* search product */}
          <div className="SearchProduct">
            <div>
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              {validateSearch && <p>Enter your product</p>}
            </div>

            <button onClick={handleClick}>Search</button>
          </div>
          {/* display products */}
          <div className="products">
            {productList.map((product) => {
              return (
                <ul key={product.id} className="productList">
                  <Link
                    className="routerLink"
                    to={`/ProductDetail/${product.id}`}
                  >
                    <li className="productTitle">{product.title}</li>
                    <li className="imgList">
                      <img src={product.images[0]} />
                    </li>
                    <li className="priceDiscount">
                      <div className="price">
                        Price:{" "}
                        <FontAwesomeIcon
                          icon={faIndianRupeeSign}
                          className="rupeeIcon"
                        />
                        {product.price}
                      </div>
                      <div className="discount">
                        Discount:
                        {product.discountPercentage} %
                      </div>
                    </li>
                  </Link>
                </ul>
              );
            })}
          </div>
        </>
      )}
      {productList.length == 0 && filteredList == null && <>Not Found</>}
    </>
  );
};
export default ProductList;
