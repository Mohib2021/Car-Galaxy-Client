import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";

function Register() {
	const {
		error,
		getUserName,
		getUserEmail,
		getUserPassword,
		getConfirmPassword,
		registerWithEmailAndPassword,
	} = useAuth();

	return (
		<div>
			<Container>
				<Row className="align-items-center">
					<Col md={6} sm={12}>
						<div>
							<img
								src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
								alt="register-img"
								className="img-fluid"
							/>
						</div>
					</Col>
					<Col md={6} sm={12}>
						<Form onSubmit={registerWithEmailAndPassword}>
							<h3 className="text-center">Please Register</h3>
							<Form.Group className="mb-3" controlId="formBasicName">
								<Form.Label>Full Name</Form.Label>
								<Form.Control
									onChange={getUserName}
									type="text"
									placeholder="Enter Name"
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									onChange={getUserEmail}
									type="email"
									placeholder="Enter email"
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									onChange={getUserPassword}
									type="password"
									placeholder="Password"
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicConfirmPassword">
								<Form.Label>Confirm Password</Form.Label>
								<Form.Control
									onChange={getConfirmPassword}
									type="password"
									placeholder="Confirm Password"
								/>
							</Form.Group>

							<Button variant="primary" type="submit">
								Register
							</Button>
							<p className="my-3">
								Already have an account? <Link to="/login">Login</Link>
							</p>
							{error && <p className="text-danger"> {error} </p>}
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Register;
