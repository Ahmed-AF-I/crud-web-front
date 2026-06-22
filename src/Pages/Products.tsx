import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./Products.css";

import Swal from 'sweetalert2'

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
 
  const getAllProducts = () => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && Array.isArray(data[0])) {
          setProducts(data[0]);
        } else {
          setProducts(data);
        }
      });
  };

  const deleteProduct = (product: Product) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#30d657',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:9000/products/${product.id}`,{ method: "DELETE" }
        ).then((res) => {res.json()})
        .then(() => {getAllProducts()})
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  };

   useEffect(() => {
    getAllProducts()
  }, []);

  return (
    <>
      <h1> Products Page</h1>

      <Link to="/products/add" className="btn btn-success mt-3">
        Add Product
      </Link>

      <table className="table table-striped mt-5 products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description.slice(0, 25)}...</td>
                <td>${product.price.toFixed(2)}</td>
                <td>
                  <button className="btn btn-primary btn-sm" onClick={() => console.log("Edit product", product.id)}>
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteProduct(product)}>
                    Delete
                  </button>
                  <Link to={`/products/${product.id}`} className="btn btn-info btn-sm">
                    View
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Products;
