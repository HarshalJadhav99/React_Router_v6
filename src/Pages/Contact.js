import React from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
	const navigate = useNavigate();
	const goToHomePage = () => {
		navigate("/");
	};
	return (
		<>
			<div>Contact</div>
			<button onClick={goToHomePage}>Go to Home Page</button>
      <button onClick={()=>navigate(-1)}>Go Back</button>
		</>
	);
};

export default Contact;
