import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./Footer.css";
function Footer() {
	return (
		<footer className="py-5 bg-primary text-white">
			<Container>
				<Row className="g-3">
					<Col md={2} sm={4} xs={6}>
						<div className="footer-item">
							<h5>Shop</h5>
							<ul>
								<li>
									<span>Brows by category</span>
								</li>
								<li>
									<span>View all inventory</span>
								</li>
								<li>
									<span>Find a store</span>
								</li>
							</ul>
						</div>
					</Col>
					<Col md={2} sm={4}>
						<div className="footer-item">
							<h5>Sell/Trade</h5>
							<ul>
								<li>
									<span>Get an online offer</span>
								</li>
							</ul>
						</div>
					</Col>
					<Col md={2} sm={4}>
						<div className="footer-item">
							<h5>Finance</h5>
							<ul>
								<li>
									<span>How it works</span>
								</li>
								<li>
									<span>Car's show finance </span>
								</li>
							</ul>
						</div>
					</Col>
					<Col md={2} sm={4}>
						<div className="footer-item">
							<h5>About</h5>
							<ul>
								<li>
									<span>About Car's Show</span>
								</li>
								<li>
									<span>Contact us</span>
								</li>
								<li>
									<span>Social responsibility</span>
								</li>
								<li>
									<span>Our foundation</span>
								</li>
								<li>
									<span>Media center</span>
								</li>
								<li>
									<span>Investor relation</span>
								</li>
							</ul>
						</div>
					</Col>
					<Col md={2} sm={4}>
						<div className="footer-item">
							<h5>Careers</h5>
							<ul>
								<li>
									<span>Search job</span>
								</li>
							</ul>
						</div>
					</Col>
					<Col md={2} sm={4}>
						<div className="footer-item">
							<h5>More</h5>
							<ul>
								<li>
									<span>Service && repairs</span>
								</li>
								<li>
									<span>FAQ & support </span>
								</li>
								<li>
									<span>Research Article</span>
								</li>
								<li>
									<span>Warranties maxCare</span>
								</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
