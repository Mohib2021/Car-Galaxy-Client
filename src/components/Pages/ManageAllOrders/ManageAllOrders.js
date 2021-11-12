import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ShowManageAllOrder from "./ShowManageAllOrder";

function ManageAllOrders() {
	const [allOrders, setAllOrders] = useState([]);
	useEffect(() => {
		fetch("https://powerful-wave-61022.herokuapp.com/ordered")
			.then((res) => res.json())
			.then((data) => setAllOrders(data));
	}, []);
	console.log(allOrders);
	return (
		<Row className="g-4">
			{allOrders.map((order) => (
				<ShowManageAllOrder key={order._id} order={order} />
			))}
		</Row>
	);
}

export default ManageAllOrders;
