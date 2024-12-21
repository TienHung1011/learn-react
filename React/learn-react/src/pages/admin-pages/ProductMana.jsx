import { useEffect, useState } from "react";
import instance from "../../axios"
import { useNavigate } from "react-router-dom";

const ProductMana = () => {
    const [ products, setProducts ] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            try {
                const { data } = await instance.get("/products");
                setProducts(data);
            } catch (error) {
                console.error(error);  
            }
        })()
    },[]);

    const handleDelete = async (id) => {
        try {
            const res = await instance.delete(`/products/${id}`);
            alert("Delete Successfully", res.data);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }

    const handleEdit = async (id) => {
        try {
            const res = await instance.get(`/products/${id}`);
            const product = res.data;
            navigate("/product-add", { state: { product } });
            
        } catch (error) {
            console.error(error);
        }
    }
  return (
<>
<div className="container mt-3">
  <h2>Product Manager</h2>
  <table className="table table-bordered table-sm">
    <thead>
      <tr>
        <th>Title</th>
        <th>Image</th>
        <th>Price</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {products.map((items)=> (
      <tr key={items.id}>
        <td>{items.title}</td>
        <td><img src={items.thumbnail} alt="" /></td>
        <td>{items.price} $</td>
        <td>{items.description || "Đang cập nhật"}</td>
        <td className="d-flex">
            <button className="btn btn-primary" onClick={()=> handleEdit(items.id)} >Edit</button>
            <button className="ms-1 btn btn-danger" onClick={() => handleDelete(items.id)}>Delete</button>
        </td>
      </tr>
       ))}
    </tbody>
  </table>
</div>
</>
  )
}

export default ProductMana
