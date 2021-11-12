import React from "react";
import { Col } from "react-bootstrap";
import { useHistory } from "react-router";
function ShowAllCars({ car }) {
	const { name, img, desc, price, _id } = car;
	const history = useHistory();

	return (
		<Col md={4} sm={6}>
			<div className="p-2" style={{ boxShadow: "0px 0px 10px gray" }}>
				<img src={img} alt="car-img" className="img-fluid rounded" />
				<h5 className="mt-2">{name}</h5>
				<p>{desc}</p>
				<h5> ${price} </h5>
				<button
					onClick={() => history.push(`/confirmOrder/${_id}`)}
					className="btn btn-outline-primary"
				>
					Purchase
				</button>
			</div>
		</Col>
	);
}

export default ShowAllCars;
