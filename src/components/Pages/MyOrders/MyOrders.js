import React, { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth/useAuth";
import ShowMyOrder from "./ShowMyOrder";

function MyOrders() {
	const { user } = useAuth();
	const [myOrder, setMyOrder] = useState([]);
	// getting current user order
	const currentUserOrder = myOrder.filter(
		(order) => order.orderedEmail === user.email
	);

	// cancel order
	const handleCancelOrder = useCallback((_id) => {
		const confirmation = window.confirm(
			"Are you sure that you want to cancel?"
		);
		if (confirmation) {
			fetch(`https://powerful-wave-61022.herokuapp.com/ordered/${_id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					//deleted
				});
		}
	}, []);

	useEffect(() => {
		fetch("https://powerful-wave-61022.herokuapp.com/ordered")
			.then((res) => res.json())
			.then((data) => setMyOrder(data));
	}, [handleCancelOrder]);

	if (!currentUserOrder.length) {
		return (
			<div>
				<h3 className="text-center mb-3">You Have Purchased Nothing</h3>
				<img
					src="https://image.freepik.com/free-photo/portrait-confused-cute-brunette-girl-shrugging-shoulders-know-nothing-cant-tell-standing-indecisive-against-blue-background_1258-69932.jpg"
					alt="nothing-img"
					className="img-fluid w-100"
				/>
			</div>
		);
	}
	return (
		<Container>
			<div>
				<h3 className="text-center">
					Hello {user.displayName}, here is your order{" "}
				</h3>
				{currentUserOrder.map((order) => (
					<ShowMyOrder
						key={order._id}
						order={order}
						handleCancelOrder={handleCancelOrder}
					/>
				))}
			</div>
		</Container>
	);
}

export default MyOrders;
