import React from "react";
import { Col, ListGroup } from "react-bootstrap";

function ShowManageAllOrder({ order, handleApprove, handleDelete }) {
	const { orderedBy, status, orderedEmail, orderedCar, _id, phone } = order;
	// destructuring data
	const { img, name, price } = orderedCar;
	return (
		<Col md={4}>
			<div style={{ boxShadow: "0px 0px 10px gray " }} className="p-2">
				<img className="img-fluid rounded" src={img} alt="order-img" />
				<h5 className="mt-2"> {name}</h5>
				<div className="blockquote-footer mt-3 ms-5">
					<b>{status}</b>
				</div>
				<ListGroup variant="flush">
					<ListGroup.Item>OrderedBy : {orderedBy}</ListGroup.Item>
					<ListGroup.Item>OrderedEmail : {orderedEmail}</ListGroup.Item>
					<ListGroup.Item>Phone : {phone}</ListGroup.Item>
					<ListGroup.Item>Price : {price}</ListGroup.Item>
				</ListGroup>
				<button
					onClick={() => handleApprove(_id)}
					className="btn btn-outline-primary me-2"
				>
					Approve
				</button>
				<button
					onClick={() => handleDelete(_id)}
					className="btn btn-outline-danger"
				>
					Delete
				</button>
			</div>
		</Col>
	);
}

export default ShowManageAllOrder;
