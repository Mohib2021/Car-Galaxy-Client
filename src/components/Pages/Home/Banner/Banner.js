import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
function Banner() {
	return (
		<div className="banner-container">
			<img
				className="img-fluid"
				src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				alt="top-banner"
			/>
			<Container>
				<div className="banner-content">
					<Row>
						<Col md={12} xs={8}>
							<div className="content">
								<h2>
									Love Your Car <br /> Guarantee
								</h2>
								<h5>24 hours test drives || 30 days return</h5>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</div>
	);
}

export default Banner;
