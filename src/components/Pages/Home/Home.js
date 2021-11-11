import React from "react";
import useAuth from "../../Hooks/useAuth/useAuth";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import Product from "./Product/Product";
import UserReviews from "./UserReviews/UserReviews";

function Home() {
	const { user } = useAuth();

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
