import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProducts] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get(`/products/${id}`);
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);
  console.log(id);
  return (
    <div className="container">
      <h1>Product Detail</h1>
      <div className="row" key={product.id}>
        <div className="col-md-6">
          <img
            src={product.images}
            alt={product.images}
            className="img-fluid h-100 w-100 shadow"
          />
        </div>
        <div className="col-md-4 ms-auto mt-5">
          {" "}
          <h2 className="fw-bold fs-3">{product.title}</h2>
            <div className="tags">
                {Array.isArray(product.tags) && product.tags.map((tag, index)=> (
                <span key={index} className="badge my-2 ms-1 bg-secondary">{tag}</span>
                ))}
            </div>
          <span className="fw-bold d-block w-25 my-1 fs-4 badge bg-danger">
            {product.price} $
          </span>
          <div className="d-flex align-items-center mt-3">
          <input
            type="number"
            className="border h-10 w-10 pl-4"
            min={1}
            defaultValue={1}
            name="quantity"
            id=""
          />
          <p className="ms-4">Stock: {product.stock}</p>
          </div>
         
          <div className="button mt-4">
            <div className="mt-4 d-flex w-100">
              <button className="btn btn-primary fw-bold w-50">Mua ngay</button>
              <button className="btn btn-success fw-bold ms-3 w-50">
                Thêm vào giỏ hàng
              </button>
            </div>
            <button className="btn btn-info mt-2 w-100 fw-bold">Xem chi tiết</button>

          </div>
          <p className="mt-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
