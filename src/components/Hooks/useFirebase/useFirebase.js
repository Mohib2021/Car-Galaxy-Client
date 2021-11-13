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
	const sendUserInfoToDb = () => {
		const userInfo = {
			displayName: name,
			email: email,
			role: "user",
		};
		fetch("https://powerful-wave-61022.herokuapp.com/users", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(userInfo),
		})
			.then((res) => res.json())
			.then((data) => {});
	};
	// creating user
	const registerWithEmailAndPassword = (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			createUserWithEmailAndPassword(auth, email, password)
				.then(() => {
					updateUserName();
					sendUserInfoToDb();
					setError("");
					e.target.reset();
					history.push("/login");
					// created
				})
				.catch((err) => setError(err.message));
		} else setError("Password is not matched");
	};

	// login user
	const loginWithEmailAndPassword = () => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	// observer

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			}
			setIsLoading(false);
		});
	}, [user]);

	// logOut user
	const logOut = () => {
		signOut(auth)
			.then(() => {
				setError("");
				setUser({});
				history.push("/home");
			})
			.catch((err) => setError(err.message));
	};
	return {
		user,
		setUser,
		error,
		logOut,
		isLoading,
		setIsLoading,
		setError,
		getUserName,
		getUserEmail,
		getUserPassword,
		getConfirmPassword,
		loginWithEmailAndPassword,
		registerWithEmailAndPassword,
	};
};
export default useFirebase;
