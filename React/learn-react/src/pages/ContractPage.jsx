import { useEffect, useState } from "react";
import instance from "../axios";
import { Link } from "react-router-dom";

function ContractPage() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const { data } = await instance.get("/carts");
        setCart(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCart();
  }, []);
  return (
    <>
      <div className="container">
        <h1>List Cart</h1>
        <div className="row g-4">
          {cart.map((cart) => (
            <div key={cart.id} className="col-md-3">
              <div className="card h-100 shadow">
                {cart.products.map((product) => (
                  <div key={product.id} className="text-center uppercase">
                    <Link to={`/product-detail/${product.id}`}>
                    <h3 className="card-header badge bg-success">{product.title}</h3>
                    </Link>
                    <Link to={`/product-detail/${product.id}`}>
                    <div className="card-body">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="product-thumbnail"
                      />
                    </div>
                    </Link>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                      <p className="text-danger fw-bold">{product.price} $</p>
                      <p className="product-quantity">
                        Quantity: {product.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ContractPage;
