import React from "react";
import { Col, Row } from "react-bootstrap";

function ShowMyOrder({ order }) {
	const { orderedCar, status, _id } = order;
	const { img, name, price, desc } = orderedCar;
	console.log(order);
	const handleCancelOrder = () => {
		const confirmation = window.confirm(
			"Are you sure that you want to cancel?"
		);
		if (confirmation) {
			fetch(`https://powerful-wave-61022.herokuapp.com/ordered/${_id}`, {
				method: "DELETE",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(order),
			})
				.then((res) => res.json())
				.then((data) => console.log(data));
		}
	};
	return (
		<>
			<Row className="align-items-center g-4 mt-2">
				<Col md={6} sm={12}>
					<div>
						<img src={img} className="img-fluid" />
					</div>
				</Col>
				<Col md={6} sm={12}>
					<div>
						<h4>{name}</h4>
						<p>{desc}</p>
						<h5>${price}</h5>
						<p>
							<b>{status}</b>{" "}
						</p>
						<button onClick={handleCancelOrder} className="btn btn-danger">
							Cancel
						</button>
					</div>
				</Col>
			</Row>
		</>
	);
}

export default ShowMyOrder;
