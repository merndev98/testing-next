"use client";
import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
    const [product, setProduct] = useState({
        title: "",
        description: "",
        price: ""
    });

    const handleInputChange = e => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", product.title);
        formData.append("description", product.description);
        formData.append("price", product.price);

        try {
            await axios.post("/api/products", formData);
            alert("Product Added Successfully");
        } catch (error) {
            console.error("Error adding product:", error);
            alert("failed to add product");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-2 flex flex-col gap-2">
            <label className="text-sm">Title</label>
            <input
                type="text"
                name="title"
                placeholder="Product Title"
                value={product.title}
                onChange={handleInputChange}
            />

            <label className="text-sm">Description</label>
            <textarea
                rows={3}
                placeholder="Product Description"
                name="description"
                value={product.description}
                onChange={handleInputChange}
            />

            <label className="text-sm">Price</label>
            <input
                type="text"
                placeholder="Product Price"
                name="price"
                value={product.price}
                onChange={handleInputChange}
            />

            <button className="bg-red-500 text-white p-2 rounded" type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;
