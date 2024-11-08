import { useProductStore } from "../store/product";
import { useState } from "react";
import ProdCSS from "./productCard.module.css";

const ProductCard = ({ product }) => {
	const [updatedProduct, setUpdatedProduct] = useState(product);
	const { deleteProduct, updateProduct } = useProductStore();
	const [isModalOpen, setModalOpen] = useState(false);

	const handleDeleteProduct = async (pid) => {
		const { success, message } = await deleteProduct(pid);
		alert(success ? `Success: ${message}` : `Error: ${message}`);
	};

	const handleUpdateProduct = async (pid, updatedProduct) => {
		const { success, message } = await updateProduct(pid, updatedProduct);
		setModalOpen(false);
		alert(success ? "Product updated successfully" : `Error: ${message}`);
	};

	return (
		<div className={ProdCSS.card}>
			<img src={product.image} alt={product.name} className={ProdCSS.cardImage} />
			<div className={ProdCSS.cardBody}>
				<h3 className={ProdCSS.cardTitle}>{product.name}</h3>
				<p className={ProdCSS.cardPrice}>${product.price}</p>
				<div className={ProdCSS.cardButtons}>
					<button onClick={() => setModalOpen(true)} className={ProdCSS.editButton}>Edit</button>
					<button onClick={() => handleDeleteProduct(product._id)} className={ProdCSS.deleteButton}>Delete</button>
				</div>
			</div>

			{isModalOpen && (
				<div className={ProdCSS.modalOverlay}>
					<div className={ProdCSS.modal}>
						<h2>Update Product</h2>
						<button onClick={() => setModalOpen(false)} className={ProdCSS.modalClose}>×</button>
						<div className={ProdCSS.modalBody}>
							<input
								type="text"
								placeholder="Disease Name"
								value={updatedProduct.name}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
							/>
							<input
								type="number"
								placeholder="Stage"
								value={updatedProduct.price}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
							/>
							<input
								type="text"
								placeholder="Food Image URL"
								value={updatedProduct.image}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
							/>
						</div>
						<div className={ProdCSS.modalFooter}>
							<button onClick={() => handleUpdateProduct(product._id, updatedProduct)} className={ProdCSS.updateButton}>Update</button>
							<button onClick={() => setModalOpen(false)} className={ProdCSS.cancelButton}>Cancel</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductCard;
