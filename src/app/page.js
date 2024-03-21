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
                <div className="p-2 overflow-auto">
                    <table>
                        <thead>
                            <tr>
                                <th>Serial ID</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>hdjhsjhsj</th>
                                <th>anshdjce</th>
                                <th>Pjejej</th>
                                <th>Pjekekeece</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(item => (
                                <tr>
                                    <td>{item._id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
                                    <td>akhdj</td>
                                    <td>jksjsks</td>
                                    <td>hjebejee</td>
                                    <td>ghehjehe</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
};

export default Home;
