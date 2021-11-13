import React from "react";
import { Col } from "react-bootstrap";

import Rating from "@mui/material/Rating";

function ShowUserReviews({ ratingReview }) {
	const { name, rating, review } = ratingReview;

	return (
		<Col md={4} sm={6}>
			<div style={{ boxShadow: "0px 0px 10px gray" }} className="p-2">
				<img
					src="https://i.ibb.co/B2LFm52/rating-image.png"
					alt="rating-img"
					className="img-fluid"
				/>
				<p>{review}</p>
				<div className="blockquote-footer ms-5 mt-1">
					<b>{name}</b>
				</div>
				<Rating
					name="half-rating-read"
					defaultValue={rating}
					precision={0.5}
					readOnly
				/>
			</div>
		</Col>
	);
}

export default ShowUserReviews;
