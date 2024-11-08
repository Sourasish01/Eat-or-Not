import { useState } from "react";
import { useProductStore } from "../store/product";
import CreateCSS from "./createPage.module.css";

const CreatePage = () => {
	const [newProduct, setNewProduct] = useState({
		name: "",
		price: "",
		image: "",
	});

	const { createProduct } = useProductStore();

	const handleAddProduct = async () => {
		const { success, message } = await createProduct(newProduct);
		alert(success ? `Success: ${message}` : `Error: ${message}`);
		setNewProduct({ name: "", price: "", image: "" });
	};

	return (
		<div className={CreateCSS.container}>
			<h1 className={CreateCSS.heading}>Create New Product</h1>
			<div className={CreateCSS.box}>
				<input
					className={CreateCSS.input}
					placeholder="Disease Name"
					name="name"  /*same as the name field we used in use state*/
					value={newProduct.name}   /*will acess the value of name in use state newProduct */
					onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} /* https://chatgpt.com/c/672d09f4-4f50-8008-9790-278046a261f5 */
				/>
				<input
					className={CreateCSS.input}
					placeholder="Stage"
					name="price"
					type="number"
					value={newProduct.price}
					onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
				/>
				<input
					className={CreateCSS.input}
					placeholder="Food Image URL"
					name="image"
					value={newProduct.image}
					onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
				/>
				<button className={CreateCSS.button} onClick={handleAddProduct}>
					Add Product
				</button>
			</div>
		</div>
	);
};

export default CreatePage;
