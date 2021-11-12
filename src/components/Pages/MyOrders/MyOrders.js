import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth/useAuth";
import ShowMyOrder from "./ShowMyOrder";

function MyOrders() {
	const { user } = useAuth();
	const [myOrder, setMyOrder] = useState([]);
	useEffect(() => {
		fetch("https://powerful-wave-61022.herokuapp.com/ordered")
			.then((res) => res.json())
			.then((data) => setMyOrder(data));
	}, []);
	const currentUserOrder = myOrder.filter(
		(order) => order.orderedEmail === user.email
	);

	return (
		<Container>
			<div>
				<h3 className="text-center">
					Hello {currentUserOrder[0]?.orderedBy}, here is your order{" "}
				</h3>
				{currentUserOrder.map((order) => (
					<ShowMyOrder key={order._id} order={order} />
				))}
			</div>
		</Container>
	);
}

export default MyOrders;
