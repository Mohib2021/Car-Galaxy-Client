import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function Header() {
	return (
		<Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand as={Link} to="/home" href="#home">
					Car's Show
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={Link} to="/home" className="active" href="#home">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/dashboard">
							Dashboard
						</Nav.Link>
						<Nav.Link as={Link} to="/myOrders">
							My Orders
						</Nav.Link>
						<Nav.Link as={Link} to="/pay">
							Pay
						</Nav.Link>
						<Nav.Link as={Link} to="/review">
							Review
						</Nav.Link>
						<Nav.Link as={Link} to="/login">
							Login
						</Nav.Link>
						<Nav.Link>LogOut</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
