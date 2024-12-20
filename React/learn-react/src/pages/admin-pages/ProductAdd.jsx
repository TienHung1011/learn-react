import { useForm } from "react-hook-form";
const ProductAdd = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
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
            {...register("description", { required: true})}
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
            {...register("price", { required: true})}
          />
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
            {...register("stock", { required: true})}
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
            {...register("image", { required: true})}
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
          Add Product
        </button>
      </form>
    </div>
  </>
  )
}

export default ProductAdd
