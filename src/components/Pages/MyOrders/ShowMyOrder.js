import React from "react";
import { Col, Row } from "react-bootstrap";

function ShowMyOrder({ order, handleCancelOrder }) {
	const { orderedCar, status, _id } = order;
	const { img, name, price, desc } = orderedCar;
	return (
		<>
			<Row className="align-items-center g-4 mt-2">
				<Col md={6} sm={12}>
					<div>
						<img src={img} className="img-fluid" alt="my-order-img" />
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
						<button
							onClick={() => handleCancelOrder(_id)}
							className="btn btn-danger"
						>
							Cancel
						</button>
					</div>
				</Col>
			</Row>
		</>
	);
}

export default ShowMyOrder;
