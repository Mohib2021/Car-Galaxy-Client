import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";

function ConfirmOrder() {
	const [car, setCar] = useState({});
	const { id } = useParams();
	useEffect(() => {
		fetch(`http://localhost:5000/cars/${id}`)
			.then((res) => res.json())
			.then((data) => setCar(data));
	}, []);
	return (
		<Container>
			<h2> this is confirm order {car.name}</h2>
		</Container>
	);
}

export default ConfirmOrder;
