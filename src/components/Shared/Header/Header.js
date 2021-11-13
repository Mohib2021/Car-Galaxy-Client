import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
function Header() {
	const { user, logOut } = useAuth();

	return (
		<Navbar
			sticky="top"
			collapseOnSelect
			expand="lg"
			bg="primary"
			variant="dark"
		>
			<Container>
				<Navbar.Brand as={Link} to="/home" href="#home">
					<div className="d-flex align-items-center">
						<img
							style={{ width: "55px" }}
							src="https://i.ibb.co/RhJnQxM/car-icon-1.png"
							alt="car-logo"
						/>
						<h5 className="ms-3">CAR GALAXY</h5>
					</div>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav
						style={{
							fontWeight: "500",
							textTransform: "uppercase",
						}}
						className="ms-auto text-center text-md-start"
					>
						<Nav.Link as={Link} to="/home" className="active" href="#home">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/allCars">
							Products
						</Nav.Link>
						{user.email && (
							<Nav.Link as={Link} to="/dashboard">
								Dashboard
							</Nav.Link>
						)}

						{!user.email && (
							<Nav.Link as={Link} to="/login">
								Login
							</Nav.Link>
						)}
						{user.email && (
							<Button variant="danger" onClick={logOut}>
								LogOut
							</Button>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
