import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import AddProduct from "../AddProduct/AddProduct";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";

const bar = <FontAwesomeIcon icon={faBars} />;
function Dashboard() {
	const { path, url } = useRouteMatch();
	return (
		<div>
			<div className="bg-dark text-white py-3">
				<Container>
					<Row>
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
					</Switch>
				</div>
			</Container>

			<div
				className="offcanvas offcanvas-start"
				data-bs-scroll="true"
				tabIndex="-1"
				id="offcanvasWithBothOptions"
				aria-labelledby="offcanvasWithBothOptionsLabel"
			>
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
						Manipulate Features
					</h5>
					<button
						type="button"
						className="btn-close text-reset"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					></button>
				</div>
				<div className="offcanvas-body">
					<p>
						<Link to={`${url}/addProduct`}>Add a Product</Link>{" "}
					</p>

					<p>
						{" "}
						<Link to={`${url}/manageAllOrders`}>Manage all Orders</Link>
					</p>

					<p>
						<Link to={`${url}/manageProducts`}>Manage Products</Link>{" "}
					</p>
					<p>
						<Link to={`${url}/makeAdmin`}>Make Admin</Link>{" "}
					</p>

					<p>
						<Link to={`${url}/pay`}>Pay</Link>{" "}
					</p>
					<p>
						<Link to={`${url}/review`}>Review</Link>{" "}
					</p>
					<p>
						{" "}
						<Link to={`${url}/myOrders`}>My Orders</Link>
					</p>
					<p>
						<button className="btn btn-danger">LogOut</button>{" "}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
