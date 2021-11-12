import React from "react";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import Product from "./Product/Product";
import UserReviews from "./UserReviews/UserReviews";

function Home() {
	return (
		<div>
			<Banner></Banner>
			<Product></Product>
			<UserReviews> </UserReviews>
			<Features></Features>
		</div>
	);
}

export default Home;
