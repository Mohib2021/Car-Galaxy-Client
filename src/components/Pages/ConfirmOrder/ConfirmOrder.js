import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth/useAuth";

function ConfirmOrder() {
	const { user } = useAuth();
	const [car, setCar] = useState({});
	const { name, img, desc, price } = car;
	const { id } = useParams();
	const history = useHistory();
	const phoneRef = useRef();
	useEffect(() => {
		fetch(`https://powerful-wave-61022.herokuapp.com/cars/${id}`)
			.then((res) => res.json())
			.then((data) => setCar(data));
	}, [id]);

	const handleOrderSubmit = (e) => {
		e.preventDefault();
		const phone = phoneRef.current.value;
		const orderedCarInfo = {
			orderedBy: user.displayName,
			orderedEmail: user.email,
			status: "Pending",
			phone: phone,
			orderedCar: {
				name: car.name,
				img: car.img,
				price: car.price,
				desc: car.desc,
			},
		};
		fetch("https://powerful-wave-61022.herokuapp.com/ordered", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(orderedCarInfo),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
		e.target.reset();
	};
	return (
		<Container>
			<div className="my-5">
				<Row className="">
					<Col md={6}>
						<Row>
							<div>
								<img src={img} className="img-fluid" alt="single-car" />
							</div>

							<div>
								<h5 className="mt-2">{name}</h5>
								<p>{desc}</p>
								<h5> ${price} </h5>
								<button
									onClick={() => history.push(`/home`)}
									className="btn btn-outline-primary"
								>
									Go Back
								</button>
							</div>
						</Row>
					</Col>
					<Col md={6}>
						<div>
							<Form onSubmit={handleOrderSubmit}>
								<h3 className="text-center">Confirm Purchase</h3>

								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Your Name</Form.Label>
									<Form.Control defaultValue={user.displayName} type="text" />
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Your Email</Form.Label>
									<Form.Control defaultValue={user.email} type="email" />
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Your Phone</Form.Label>
									<Form.Control
										ref={phoneRef}
										type="number"
										placeholder="phone number"
									/>
								</Form.Group>

								<Form.Group
									className="mb-3"
									controlId="exampleForm.ControlTextarea1"
								>
									<Form.Label>Address</Form.Label>
									<Form.Control
										as="textarea"
										rows={3}
										placeholder="Your address"
										required
									/>
								</Form.Group>

								<Button variant="primary" type="submit">
									Confirm
								</Button>
							</Form>
						</div>
					</Col>
				</Row>
			</div>
		</Container>
	);
}

export default ConfirmOrder;
