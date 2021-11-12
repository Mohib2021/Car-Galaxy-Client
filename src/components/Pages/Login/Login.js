import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useLocation } from "react-router";

function Login() {
	const location = useLocation();
	const redirectURL = location?.state?.from;
	console.log(redirectURL);
	const { error, getUserEmail, getUserPassword, loginWithEmailAndPassword } =
		useAuth();
	return (
		<div>
			<Container>
				<Row className="align-items-center">
					<Col md={6} sm={12}>
						<Form onSubmit={loginWithEmailAndPassword}>
							<h3 className="text-center">Please Login</h3>
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

							<Button variant="primary" type="submit">
								Login
							</Button>
							<p className="my-3">
								Don't have an account? <Link to="/register">Register</Link>{" "}
							</p>
							{error && <p> {error} </p>}
						</Form>
					</Col>
					<Col md={6} sm={12}>
						<div>
							<img
								src="https://image.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg"
								alt="register-img"
								className="img-fluid"
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Login;
