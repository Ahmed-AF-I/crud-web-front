import { useState } from "react";
import { useNavigate } from "react-router";

function AddProduct() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");

    const navigate = useNavigate();

    const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        fetch("http://localhost:9000/products", {
            method: "POST",
            body: JSON.stringify({
                title,
                description,
                price,
                category
            })
        })
        .then((res) => res.json())
        .then(() => {
            navigate("/products");
        });
    };

  return (
    <>
      <h1>Add Product</h1>
      <form onSubmit={formSubmitHandler}>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter product title"
            id="exampleInputEmail1"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter product description"
            id="exampleInputPassword1"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter product price"
            id="exampleInputPassword1"
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter product category"
            id="exampleInputPassword1"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}

export default AddProduct;
