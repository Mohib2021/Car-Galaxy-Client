import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import AddProduct from "../AddProduct/AddProduct";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import useAuth from "../../Hooks/useAuth/useAuth";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Review from "../Review/Review";
import "./Dashboard.css";
const bar = <FontAwesomeIcon icon={faBars} />;
function Dashboard() {
	const [users, setUsers] = useState([]);
	const { user, logOut } = useAuth();
	useEffect(() => {
		fetch("https://powerful-wave-61022.herokuapp.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);
	// getting current user to show role
	const currentUser = users.find((curUser) => curUser.email === user.email);
	const { path, url } = useRouteMatch();
	return (
		<div>
			<div className="bg-dark text-white py-3">
				<Container>
					<Row className="align-items-center">
						<Col md={1} sm={2} xs={2}>
							<span
								className="fs-3"
								type="button"
								data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasWithBothOptions"
								aria-controls="offcanvasWithBothOptions"
							>
								{bar}
							</span>
						</Col>
						<Col md={10} sm={10} xs={10}>
							<h3>Dashboard</h3>
						</Col>
					</Row>
				</Container>
			</div>
			<Container>
				<Row className="g-3">
					<div className="text-center mt-5">
						<h3>GoodDay {user.displayName}, Welcome to The Dashboard</h3>
					</div>
					<Col md={6} sm={12}>
						<div>
							<h5 className="text-center">Activities that you can do</h5>
							{currentUser?.role === "user" ? (
								<ListGroup variant="flush">
									<ListGroup.Item>
										You can purchase any of the products which one you like
									</ListGroup.Item>
									<ListGroup.Item>
										Also, you can see in the dashboard which cars you have
										already ordered in the dashboard.
									</ListGroup.Item>
									<ListGroup.Item>
										You can pay by coming to this dashboard but it's coming soon
									</ListGroup.Item>
									<ListGroup.Item>
										Moreover, you can give a review of our website by simply
										coming to the dashboard
									</ListGroup.Item>
								</ListGroup>
							) : (
								<ListGroup variant="flush">
									<ListGroup.Item>
										You can manipulate all of the products if you want
									</ListGroup.Item>
									<ListGroup.Item>
										Also, you can manipulate all of the orders that users have
										already placed in this website
									</ListGroup.Item>
									<ListGroup.Item>
										You have the permission to add a new product in this website
									</ListGroup.Item>
									<ListGroup.Item>
										As an admin you can add or make another person as admin
										because you are not an admin
									</ListGroup.Item>
								</ListGroup>
							)}
						</div>
					</Col>
					<Col md={6} sm={12}>
						<div>
							<h5 className="text-center">
								Activities that you can't do as {currentUser?.role}
							</h5>
							{currentUser?.role === "user" ? (
								<ListGroup variant="flush">
									<ListGroup.Item>
										It's impossible for a user to manipulate all of the products
									</ListGroup.Item>
									<ListGroup.Item>
										Also, an user can't manipulate all of the orders that users
										have already placed
									</ListGroup.Item>
									<ListGroup.Item>
										You are not permitted to add a new product in this website
									</ListGroup.Item>
									<ListGroup.Item>
										As an user you can't add or make another person as admin
										because you are not an admin
									</ListGroup.Item>
								</ListGroup>
							) : (
								<ListGroup variant="flush">
									<ListGroup.Item>
										As you are an admin, you don't need to pay. So, you don't
										have pay option
									</ListGroup.Item>

									<ListGroup.Item>
										As an admin you don't need to give a review, So, you dont
										have the review option.
									</ListGroup.Item>
								</ListGroup>
							)}
						</div>
					</Col>
				</Row>
			</Container>

			<Container>
				<div className="my-5">
					<Switch>
						<Route path={`${path}/myOrders`}>
							<MyOrders></MyOrders>
						</Route>
						<Route path={`${path}/pay`}>
							<Pay></Pay>
						</Route>
						<Route path={`${path}/addProduct`}>
							<AddProduct></AddProduct>
						</Route>
						<Route path={`${path}/manageAllOrders`}>
							<ManageAllOrders></ManageAllOrders>
						</Route>
						<Route path={`${path}/manageProducts`}>
							<ManageProducts></ManageProducts>
						</Route>
						<Route path={`${path}/makeAdmin`}>
							<MakeAdmin></MakeAdmin>
						</Route>
						<Route path={`${path}/review`}>
							<Review></Review>
						</Route>
					</Switch>
				</div>
			</Container>

			<div
				className="offcanvas offcanvas-start"
				style={{ background: "#096F89", color: "white" }}
				data-bs-scroll="true"
				tabIndex="-1"
				id="offcanvasWithBothOptions"
				aria-labelledby="offcanvasWithBothOptionsLabel"
			>
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
						Dashboard Features
					</h5>
					<button
						type="button"
						className="btn-close text-reset"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					></button>
				</div>
				<div className="offcanvas-body canvas">
					{currentUser?.role === "admin" ? (
						<div>
							<p>
								<Link
									style={{ color: "white", textDecoration: "none" }}
									to={`${url}/addProduct`}
								>
									Add a Product
								</Link>{" "}
							</p>
							<p>
								<Link
									style={{ color: "white", textDecoration: "none" }}
									to={`${url}/manageAllOrders`}
								>
									Manage all Orders
								</Link>
							</p>
							<p>
								<Link
									style={{ color: "white", textDecoration: "none" }}
									to={`${url}/manageProducts`}
								>
									Manage Products
								</Link>{" "}
							</p>
							<p>
								<Link
									style={{ color: "white", textDecoration: "none" }}
									to={`${url}/makeAdmin`}
								>
									Make Admin
								</Link>{" "}
							</p>
						</div>
					) : (
						<div>
							<p>
								<Link
									style={{ color: "white", textDecoration: "none" }}
									to={`${url}/review`}
								>
									Review
								</Link>{" "}
							</p>
							<p>
								<Link
									style={{ color: "white", textDecoration: "none" }}
									to={`${url}/pay`}
								>
									Pay
								</Link>{" "}
							</p>
							<p></p>
						</div>
					)}
					<p>
						<Link
							style={{ color: "white", textDecoration: "none" }}
							to={`${url}/myOrders`}
						>
							My Orders
						</Link>
					</p>
					<button onClick={logOut} className="btn btn-danger">
						LogOut
					</button>{" "}
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
