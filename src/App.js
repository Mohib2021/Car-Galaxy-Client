import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import MyOrders from "./components/Pages/MyOrders/MyOrders";
import Pay from "./components/Pages/Pay/Pay";
import Products from "./components/Pages/Products/Products";
import Register from "./components/Pages/Register/Register";
import Review from "./components/Pages/Review/Review";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AuthProvider from "./components/Hooks/AuthProvider/AuthProvider";
import ConfirmOrder from "./components/Pages/ConfirmOrder/ConfirmOrder";

function App() {
	return (
		<Router>
			<AuthProvider>
				<Header> </Header>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route exact path="/home">
						<Home></Home>
					</Route>
					<Route path="/dashboard">
						<Dashboard></Dashboard>
					</Route>
					<Route path="/login">
						<Login></Login>
					</Route>
					<Route path="/register">
						<Register></Register>
					</Route>
					<Route path="/products">
						<Products></Products>
					</Route>

					<Route path="/confirmOrder/:id">
						<ConfirmOrder></ConfirmOrder>
					</Route>
				</Switch>
				<Footer></Footer>
			</AuthProvider>
		</Router>
	);
}

export default App;
