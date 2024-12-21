import { useForm } from "react-hook-form";
import instance from "../../axios";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLocation, useNavigate } from "react-router-dom";


const productSchema = z.object({
  title: z.string().min(5).max(100),
  description: z.string().optional(),
  price: z.number().min(0),
  stock: z.number().min(1, "Stock must be at least 1"),
  image: z.string().url("Invalid URL format").optional(),
  category: z.string().nonempty("Category is required"),
})
const ProductAdd = ( ) => {
  const navigator = useNavigate();
  const location = useLocation ();
  const { state } = location || {};
  const { product } = state || {};
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
     resolver: zodResolver(productSchema), 
     defaultValues: product || {},
    });



    const onSubmit = async (data) => {
      try {
        if(product){
          await instance.put(`/products/${product.id}`, data );
          alert("Updated successfully");
        }else{
          await instance.post("/products", data);
          alert("Added successfully");
        }
        navigator("/admin")
      } catch (error) {
        console.error(error);
      }
    }

  return (
  <>
  <div className="container mt-5">
      <h2 className="mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">
            Product Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Enter product title"
            {...register("title", { required: true})}
          />
          {errors.title?.message && <span className="text-danger">{errors.title?.message}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Product Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            placeholder="Enter product description"
            {...register("description")}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price ($)
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            placeholder="Enter product price"
            {...register("price", { required: true , valueAsNumber: true})}
          />
          {errors.price?.message && <span className="text-danger">{errors.price?.message}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="stock" className="form-label">
            Stock Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="stock"
            name="stock"
            placeholder="Enter stock quantity"
            {...register("stock", { required: true, valueAsNumber: true})}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Product Image URL
          </label>
          <input
            type="url"
            className="form-control"
            id="image"
            name="image"
            placeholder="Enter product image URL"
            {...register("image")}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            className="form-select"
            id="category"
            name="category"
            {...register("category", { required: true})}
          >
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="cosmetics">Cosmetics</option>
            <option value="home">Home</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  </>
  )
}

export default ProductAdd
