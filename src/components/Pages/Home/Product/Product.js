import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ShowProduct from "./ShowProduct";

function Product() {
	const [cars, setCars] = useState([]);
	useEffect(() => {
		fetch("https://powerful-wave-61022.herokuapp.com/cars")
			.then((res) => res.json())
			.then((data) => setCars(data));
	}, []);
	// making six cars for home page
	cars.splice(6, cars.length);
	return (
		<div className="my-5">
			<Container>
				<div className="text-center">
					<h3>TOP OF THE CARS</h3>
				</div>
				<div className="mt-4">
					<Row className=" g-4">
						{cars.map((car) => (
							<ShowProduct key={car._id} car={car} />
						))}
					</Row>
				</div>
			</Container>
		</div>
	);
}

export default Product;
