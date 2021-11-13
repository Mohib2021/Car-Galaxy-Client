import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ShowManageAllOrder from "./ShowManageAllOrder";

function ManageAllOrders() {
	const [allOrders, setAllOrders] = useState([]);
	const handleApprove = (id) => {
		const approvedProduct = allOrders.find((order) => order._id === id);
		approvedProduct.status = "Shipped";
		fetch(`https://powerful-wave-61022.herokuapp.com/ordered/${id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(approvedProduct),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};
	const handleDelete = (id) => {
		const confirmation = window.confirm(
			"Are you sure that you want to delete?"
		);
		if (confirmation) {
			fetch(`https://powerful-wave-61022.herokuapp.com/ordered/${id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => console.log(data));
		}
	};
	useEffect(() => {
		fetch("https://powerful-wave-61022.herokuapp.com/ordered")
			.then((res) => res.json())
			.then((data) => setAllOrders(data));
	}, [handleDelete]);

	return (
		<Row className="g-4">
			<div className="text-center">
				<h3>Manage All Of The Orders</h3>
			</div>
			{allOrders.map((order) => (
				<ShowManageAllOrder
					key={order._id}
					order={order}
					handleApprove={handleApprove}
					handleDelete={handleDelete}
				/>
			))}
		</Row>
	);
}

export default ManageAllOrders;
