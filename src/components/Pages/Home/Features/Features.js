import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCar,
	faCommentDots,
	faGasPump,
	faHandshake,
	faExchangeAlt,
	faFan,
} from "@fortawesome/free-solid-svg-icons";

const car = <FontAwesomeIcon icon={faCar} />;
const support = <FontAwesomeIcon icon={faCommentDots} />;
const pump = <FontAwesomeIcon icon={faGasPump} />;
const deal = <FontAwesomeIcon icon={faHandshake} />;
const exchange = <FontAwesomeIcon icon={faExchangeAlt} />;
const airCondition = <FontAwesomeIcon icon={faFan} />;
function Features() {
	return (
		<div className="mb-5">
			<Container>
				<div className="text-center">
					<span className="text-muted">The ultimate reason</span>
					<h3>WHY CHOSE US</h3>
				</div>
				<div className="mt-4">
					<Row className="text-center">
						<Col md={4} sm={6}>
							<div>
								<div className="fs-2 text-center ">{car}</div>

								<h5>ALL BRANDS</h5>
								<p className="text-muted">
									We provide all of the brands car according to our customers
									and we have some samples which we can show to them.
								</p>
							</div>
						</Col>
						<Col md={4} sm={6}>
							<div>
								<div className="fs-2 text-center ">{support}</div>
								<h5>FREE SUPPORT</h5>
								<p className="text-muted">
									The specialties of us is giving free support life time. We
									provide all of the supports 24/7 to our customers constantly.
								</p>
							</div>
						</Col>
						<Col md={4} sm={6}>
							<div>
								<div className="fs-2 text-center ">{pump}</div>
								<h5>OIL CHANGE</h5>
								<p className="text-muted">
									We also give you free oil change services to our customers for
									the first time which most of the company don't consider.
								</p>
							</div>
						</Col>
						<Col md={4} sm={6}>
							<div>
								<div className="fs-2 text-center ">{deal}</div>
								<h5>DEALERSHIP</h5>
								<p className="text-muted">
									Our dealership process is too much chipper that others in this
									competitive world. Also we provide the best communication.
								</p>
							</div>
						</Col>
						<Col md={4} sm={6}>
							<div>
								<div className="fs-2 text-center ">{exchange}</div>
								<h5>EXCHANGE</h5>
								<p className="text-muted">
									You can exchange your car by giving us your car. This is the
									process which we provide to our customers as well as any
									others.
								</p>
							</div>
						</Col>
						<Col md={4} sm={6}>
							<div>
								<div className="fs-2 text-center ">{airCondition}</div>
								<h5>AIR CONDITIONING</h5>
								<p className="text-muted">
									To make our stock's car more fresh and glorious we have air
									cooling process. We make sure that your car is safe and in a
									well weather.
								</p>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</div>
	);
}

export default Features;
