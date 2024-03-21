"use client";

import React, { useState, useEffect } from "react";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/products");

                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {loading ? (
                <div className="h-40">Loading...</div>
            ) : (
                <div className="container mx-auto p-2">
                    {products.map(product => (
                        <div key={product._id}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Title:</td>
                                        <td>{product.title}</td>
                                    </tr>
                                    <tr>
                                        <td>Description:</td>
                                        <td>{product.description}</td>
                                    </tr>
                                    <tr>
                                        <td>Price:</td>
                                        <td>{product.price}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Home;
