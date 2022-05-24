import React, { useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import storeContext from "../../store-context/storeContext";
import "./AddProduct.scss";

export const AddProduct = () => {
  const { products, setProducts } = useContext(storeContext);

  const [product, addProduct] = useState({
    title: "",
    image: "",
    description: "",
    price: "",
    rating: {},
  });

  const handleProductName = (e) => {
    const value = e.target.value;
    addProduct({
      ...product,
      title: value,
    });
  };

  const handleProductImage = (e) => {
    addProduct({
      ...product,
      image: e.target.value,
    });
  };

  const handleProductDescription = (e) => {
    addProduct({
      ...product,
      description: e.target.value,
    });
  };

  const handleProductPrice = (e) => {
    addProduct({
      ...product,
      price: e.target.value,
    });
  };

  const createProduct = (e) => {
    e.preventDefault();

    const productToBeCreated = { ...product, id: uuid() };

    console.log(productToBeCreated);
    setProducts([...products, productToBeCreated]);
    resetValues();
  };

  const resetValues = () => {
    addProduct({ title: "", image: "", description: "", price: "" });
  };
  return (
    <>
    <div className="form-wrapper">
      <form className="form" onSubmit={createProduct}>
        <h3>Add new product</h3>

        <label className="form-label" htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder={"Product name: "}
          value={product.title || ""}
          onChange={handleProductName}
        />

        <label className="form-label" htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          placeholder={"Product image: "}
          value={product.image || ""}
          onChange={handleProductImage}
        />

        <label className="form-label" htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          placeholder={"Product description: "}
          value={product.description || ""}
          onChange={handleProductDescription}
        />

        <label className="form-label" htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          placeholder={"Product price: "}
          value={product.price || ""}
          onChange={handleProductPrice}
        />
        <button className="form-btn">Add product</button>
      </form>
      </div>
    </>
  );
};
