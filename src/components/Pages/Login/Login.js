import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useHistory, useLocation } from "react-router";

function Login() {
	const {
		error,
		getUserEmail,
		getUserPassword,
		loginWithEmailAndPassword,
		setIsLoading,
		setError,
	} = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirectURL = location?.state?.from || "/home";
	const handleLogin = (e) => {
		e.preventDefault();
		loginWithEmailAndPassword()
			.then(() => {
				e.target.reset();
				history.push(redirectURL);
			})
			.catch((err) => setError(err.message))
			.finally(setIsLoading(false));
	};
	return (
		<div>
			<Container>
				<Row className="align-items-center">
					<Col md={6} sm={12}>
						<Form onSubmit={handleLogin}>
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
