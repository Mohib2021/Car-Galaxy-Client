import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { Col, Form, Row, Button } from "react-bootstrap";
import StarIcon from "@mui/icons-material/Star";
import useAuth from "../../Hooks/useAuth/useAuth";

const labels = {
	0.5: "Useless",
	1: "Useless+",
	1.5: "Poor",
	2: "Poor+",
	2.5: "Ok",
	3: "Ok+",
	3.5: "Good",
	4: "Good+",
	4.5: "Excellent",
	5: "Excellent+",
};

function Review() {
	const [value, setValue] = React.useState(2);
	const [hover, setHover] = React.useState(-1);
	const reviewRef = React.useRef();
	const { user } = useAuth();

	const handleReviewSubmit = (e) => {
		e.preventDefault();
		const review = reviewRef.current.value;
		const reviewInfo = {
			name: user.displayName,
			review: review,
			rating: value,
		};
		fetch("https://powerful-wave-61022.herokuapp.com/reviews", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(reviewInfo),
		})
			.then((res) => res.json())
			.then((data) => {
				setValue(2);
				console.log(data);
			});
		e.target.reset();
	};
	return (
		<Row className="align-items-center">
			<Col md={6} sm={12}>
				<div>
					<img
						src="https://i.ibb.co/xfDnt3R/reviews-pic.png"
						alt="review-pic"
						className="img-fluid"
					/>
				</div>
			</Col>
			<Col md={6} sm={12}>
				<Form onSubmit={handleReviewSubmit}>
					<div className="text-center">
						<h3>Please Give a Review</h3>
					</div>
					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label>Review Text</Form.Label>
						<Form.Control
							ref={reviewRef}
							as="textarea"
							rows={5}
							placeholder="Your honest opinion"
						/>
					</Form.Group>
					<Box
						sx={{
							width: 200,
							display: "flex",
							alignItems: "center",
						}}
					>
						<Rating
							name="hover-feedback"
							value={value}
							precision={0.5}
							onChange={(event, newValue) => {
								setValue(newValue);
							}}
							onChangeActive={(event, newHover) => {
								setHover(newHover);
							}}
							emptyIcon={
								<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
							}
						/>
						{value !== null && (
							<Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
						)}
					</Box>
					<Button className="mt-3" variant="primary" type="submit">
						Review
					</Button>
				</Form>
			</Col>
		</Row>
	);
}

export default Review;
