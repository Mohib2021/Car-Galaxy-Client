import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Register/Register";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AuthProvider from "./components/Hooks/AuthProvider/AuthProvider";
import ConfirmOrder from "./components/Pages/ConfirmOrder/ConfirmOrder";
import PrivetRoute from "./components/Hooks/PrivetRoute/PrivetRoute";
import AllCars from "./components/Pages/AllCars/AllCars";

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
					<Route path="/allCars">
						<AllCars></AllCars>
					</Route>

					<PrivetRoute path="/confirmOrder/:id">
						<ConfirmOrder></ConfirmOrder>
					</PrivetRoute>
				</Switch>
				<Footer></Footer>
			</AuthProvider>
		</Router>
	);
}

export default App;
