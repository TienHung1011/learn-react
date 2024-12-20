import { useEffect, useState } from "react";
import instance from "../axios";
import { Link } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([])
useEffect(()=>{
  const fetchProd = async ()=> {
    try {
      const { data } = await instance.get("/products");
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };
  fetchProd();
}, []);
  return (
    <>
    <h1>Product List</h1>

    <div className="container">
  <h1 className="text-center my-4">Product List</h1>
  <div className="row g-4">
    {products.map((item) => (
      <div key={item.id} className="col-md-3">
        <div className="card h-100 shadow">
          <Link to={`/product-detail/${item.id}`}>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
          </div>
          </Link>
          <div className="card-footer text-center">
            <span className="text-danger fw-bold">{item.price} $</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </>
  );
 
}

export default Product;
