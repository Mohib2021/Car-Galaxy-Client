import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";

function MakeAdmin() {
	const emailRef = useRef();
	const handleMakeAdmin = (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		const updateUserEmail = {
			email: email,
			role: "admin",
		};
		fetch("https://powerful-wave-61022.herokuapp.com/users", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(updateUserEmail),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
		e.target.reset();
	};
	return (
		<Row className="align-items-center">
			<Col md={6} sm={12}>
				<div>
					<img
						className="img-fluid"
						src="https://image.freepik.com/free-vector/app-development-concept-illustration_114360-5164.jpg"
						alt="update-profile-img"
					/>
				</div>
			</Col>
			<Col md={6} sm={12}>
				<div>
					<form onSubmit={handleMakeAdmin}>
						<h3 className="mb-3 text-center text-primary">
							Make Another Admin
						</h3>
						<div className="mb-3">
							<label htmlFor="email" className="mb-2">
								Email Address
							</label>
							<input
								ref={emailRef}
								className="form-control"
								type="email"
								placeholder="Enter Email"
							/>
						</div>
						<button className="btn btn-primary">Make Admin</button>
					</form>
				</div>
			</Col>
		</Row>
	);
}

export default MakeAdmin;
