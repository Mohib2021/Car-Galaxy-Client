import {
	getAuth,
	signOut,
	updateProfile,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import firebaseInitialization from "../../Firebase/Firebase.init";
firebaseInitialization();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [name, setName] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const history = useHistory();
	const auth = getAuth();

	// get user name
	const getUserName = (e) => {
		const userName = e.target.value;
		setName(userName);
	};
	// get user email
	const getUserEmail = (e) => {
		const userEmail = e.target.value;
		setEmail(userEmail);
	};
	// get user password
	const getUserPassword = (e) => {
		const userPassword = e.target.value;
		setPassword(userPassword);
	};
	const getConfirmPassword = (e) => {
		const userConfirmPassword = e.target.value;
		setConfirmPassword(userConfirmPassword);
	};

	// update user name
	const updateUserName = () => {
		updateProfile(auth.currentUser, {
			displayName: name,
		});
	};
	// creating user
	const registerWithEmailAndPassword = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				updateUserName();
				setError("");
				history.push("/login");
				// created
			})
			.catch((err) => setError(err.message));
		e.target.reset();
	};

	// login user
	const loginWithEmailAndPassword = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				setUser(result.user);
				setError("");
				history.push("/home");
				// login
			})
			.catch((err) => setError(err.message))
			.finally(setIsLoading(false));
		e.target.reset();
	};

	// observer

	onAuthStateChanged(auth, (user) => {
		if (user) setUser(user);
		setIsLoading(false);
		setError("");
	});

	// logOut user
	const logOut = () => {
		signOut(auth)
			.then(() => {
				// logOut
				setError("");
				setUser({});
			})
			.catch((err) => setError(err.message));
	};
	return {
		user,
		error,
		logOut,
		isLoading,
		getUserName,
		getUserEmail,
		getUserPassword,
		getConfirmPassword,
		loginWithEmailAndPassword,
		registerWithEmailAndPassword,
	};
};
export default useFirebase;
