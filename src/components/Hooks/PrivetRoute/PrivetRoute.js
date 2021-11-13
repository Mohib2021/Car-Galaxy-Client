import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../useAuth/useAuth";

function PrivetRoute({ children, ...rest }) {
	const { user, isLoading } = useAuth();
	// loading spinner
	if (isLoading) {
		return (
			<div
				style={{ height: "60vh" }}
				className="mt-5 d-flex align-items-center justify-content-center"
			>
				<h4 className="me-2">Loading...</h4>
				<Spinner animation="border" variant="primary" />
			</div>
		);
	}
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.email ? (
					children
				) : (
					<Redirect to={{ pathname: "/login", state: { from: location } }} />
				)
			}
		></Route>
	);
}

export default PrivetRoute;
