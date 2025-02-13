import { useEffect, useState } from "react";

const CustomFetchProducts = (url) => {
  //create state variables to deliver the products and error
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  //api call to get products.Use useEffect as it is asynchronous
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `http error,
            ${response.status}
            http status,
            ${response.statusText}`
          );
        }
        const products = await response.json();
        console.log("thisis api calll result", products);
        setProducts(products.products);
      } catch (error) {
        setError(error);
        console.log("this is a erro", error);
      }
    };
    fetchProducts();
  }, [url]);
  console.log("this is the rerturning objects product", products);
  return { products, error };
};
export default CustomFetchProducts;
