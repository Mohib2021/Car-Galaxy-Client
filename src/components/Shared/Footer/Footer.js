import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
function Footer() {
	return (
		<footer className="p-4 bg-dark text-white">
			<Container>
				<Row className="gy-3">
					<Col md={2} sm={4}>
						<div className="footer-item">
							<h5>Shop</h5>
							<ul>
								<li>
									<a href="">Brows by category</a>
								</li>
								<li>
									<a href="">View all inventory</a>
								</li>
								<li>
									<a href="">Find a store</a>
								</li>
							</ul>
						</div>
					</Col>
					<Col md={2} sm={4}>
						<div className="footer-item">
							<h5>Sell/Trade</h5>
							<ul>
								<li>
									<a href="">Get an online offer</a>
								</li>
							</ul>
						</div>
					</Col>
					<Col md={2} sm={4}>
						<div className="footer-item">
							<h5>Finance</h5>
							<ul>
								<li>
									<a href="">How it works</a>
								</li>
								<li>
									<a href="">Car's show finance </a>
								</li>
							</ul>
						</div>
					</Col>
					<Col md={2} sm={4}>
						<div className="footer-item">
							<h5>About</h5>
							<ul>
								<li>
									<a href="">About Car's Show</a>
								</li>
								<li>
									<a href="">Contact us</a>
								</li>
								<li>
									<a href="">Social responsibility</a>
								</li>
								<li>
									<a href="">Our foundation</a>
								</li>
								<li>
									<a href="">Media center</a>
								</li>
								<li>
									<a href="">Investor relation</a>
								</li>
							</ul>
						</div>
					</Col>
					<Col md={2} sm={4}>
						<div className="footer-item">
							<h5>Careers</h5>
							<ul>
								<li>
									<a href="">Search job</a>
								</li>
							</ul>
						</div>
					</Col>
					<Col md={2} sm={4}>
						<div className="footer-item">
							<h5>More</h5>
							<ul>
								<li>
									<a href="">Service && repairs</a>
								</li>
								<li>
									<a href="">FAQ & support</a>
								</li>
								<li>
									<a href="">Research Article</a>
								</li>
								<li>
									<a href="">Warranties maxCare</a>
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
