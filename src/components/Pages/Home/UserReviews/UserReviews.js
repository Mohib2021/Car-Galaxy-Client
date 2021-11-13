import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ShowUserReviews from "./ShowUserReviews";

function UserReviews() {
	const [reviews, setReviews] = useState([]);
	// get all review
	useEffect(() => {
		fetch("https://powerful-wave-61022.herokuapp.com/reviews")
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);

	return (
		<div className="mb-5">
			<Container>
				<div>
					<h3 className="text-center">WHAT CUSTOMERS SAY</h3>
					{reviews.length ? (
						<Row className="g-4 mt-2">
							{reviews.map((ratingReview) => (
								<ShowUserReviews
									key={ratingReview._id}
									ratingReview={ratingReview}
								/>
							))}
						</Row>
					) : (
						<div className="text-center mt-5">
							<h5>There is not any review to show</h5>
							<p>
								If you are not logged in, Please login first and then go to the
								dashboard to give a review
							</p>
						</div>
					)}
				</div>
			</Container>
		</div>
	);
}

export default UserReviews;
