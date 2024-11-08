import React from 'react'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

import HomeCSS from "./homePage.module.css"

const HomePage = () => {

    const { fetchProducts, products } = useProductStore();

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);
	console.log("products", products);

  return (
    <div className={HomeCSS.container}>
			<div className={HomeCSS.vStack}>
				<h1 className={HomeCSS.pageTitle}>To Avoid </h1>

				<div className={HomeCSS.grid}>
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>

				{products.length === 0 && (
					<p className={HomeCSS.noProductsText}>
						Not found 😢{" "}
						<Link to="/create" className={HomeCSS.createLink}>
							Create a product
						</Link>
					</p>
				)}
			</div>
		</div>
	);
}

export default HomePage