import React from "react";
import { useNavigate, NavLink, useParams } from "react-router-dom";
const About = (props) => {
	const classname = props.primary1 ? "primary" : "";
	const { name, sname } = useParams();
	const navigate = useNavigate();
	const goToContact = () => {
		navigate("/contact");
	};
	const goBack = () => {
		navigate(-1);
	};
	return (
		<>
			<div className={`${classname} font-xl`}>
				About {name} {sname}
			</div>
			<button onClick={() => goToContact()}>Go to Contact Page</button>
			<button onClick={goBack}>Go back</button>
			<NavLink className="Navbar_link" to="/user/hj/custom">
				HJ
			</NavLink>
			<NavLink className="Navbar_link" to="/user/harshal/jadhav">
				harshal
			</NavLink>
		</>
	);
};

export default About;
