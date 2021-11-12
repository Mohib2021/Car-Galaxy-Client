import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
function Header() {
	const { user, logOut } = useAuth();
	console.log(user, logOut);
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
					Car Galaxy
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={Link} to="/home" className="active" href="#home">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/allCars">
							All Cars
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
							<Button variant="light" onClick={logOut}>
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
