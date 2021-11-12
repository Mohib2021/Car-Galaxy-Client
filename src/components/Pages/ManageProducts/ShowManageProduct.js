import React from "react";
import { Col } from "react-bootstrap";

function ShowManageProduct({ product, handleDeleteProduct }) {
	const { name, img, desc, price, _id } = product;
	return (
		<Col md={4} sm={6}>
			<div className="p-2" style={{ boxShadow: "0px 0px 10px gray" }}>
				<img src={img} alt="car-img" className="img-fluid rounded" />
				<h5 className="mt-2">{name}</h5>
				<p>{desc}</p>
				<h5> ${price} </h5>
				<button
					onClick={() => handleDeleteProduct(_id)}
					className="btn btn-danger"
				>
					Delete
				</button>
			</div>
		</Col>
	);
}

export default ShowManageProduct;
