import React, { useCallback, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ShowManageProduct from "./ShowManageProduct";

function ManageProducts() {
	const [products, setProducts] = useState([]);
	// delete product
	const handleDeleteProduct = (_id) => {
		const confirmation = window.confirm(
			"Are you sure that you want to delete?"
		);
		if (confirmation) {
			fetch(`https://powerful-wave-61022.herokuapp.com/cars/${_id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {});
		}
	};
	const backCall = useCallback(() => {
		//body
	}, [handleDeleteProduct]);
	useEffect(() => {
		fetch("https://powerful-wave-61022.herokuapp.com/cars")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, [backCall]);

	return (
		<Row className="g-4">
			<div className="text-center">
				{" "}
				<h3> Manage All Of The Products</h3>{" "}
			</div>
			{products.map((product) => (
				<ShowManageProduct
					key={product._id}
					product={product}
					handleDeleteProduct={handleDeleteProduct}
				/>
			))}
		</Row>
	);
}

export default ManageProducts;
