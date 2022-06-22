import React from "react";

import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Header from "./Components/Header";
import Error from "./Pages/Error";
import Web from "./Pages/Web";
import Design from "./Pages/Design";
import Other from "./Pages/Other";
import FormHandling from './Pages/FormHandling';
import Footer from "./Components/Footer";
import User from "./Pages/User";
import Login from "./Pages/Login";
import Protected from "./Pages/Protected";
import "./appStyles.css";
import styles from "./appStyles.module.css";


function App() {
	return (
		<Router>
		{/* <h1 className="error">error</h1>
		<h1 className={styles.success}>success</h1> */}

			<Header />
			<Routes>
				{/* <Route exact path='/' element={<Home/>}/> */}
				<Route exact path="/" element={<Protected Component={Home} />} />
				<Route path="/login" element={<Login />} />

				<Route path="/about/:name/:sname" element={<About primary1={true} />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/user/:name/:sname" element={<User />} />
				<Route path="/service/" element={<Service />}>
					<Route path="web" element={<Web />} />
					<Route path="design" element={<Design />} />
					<Route path="other" element={<Other />} />
				</Route>
				<Route path="*" element={<Error />} />
				{/* <Route path='*' element={<Navigate to='/'/>}/> */}
			</Routes>
			<FormHandling />
			<Footer />
		</Router>
	);
}

export default App;
