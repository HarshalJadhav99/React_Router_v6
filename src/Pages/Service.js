import React from "react";
import { useRouteMatch, NavLink, Switch, Route, Outlet } from "react-router-dom";
const Service = () => {
	const linkStyle = ({ isActive }) => {
		return {
			fontWeight: isActive ? "bold" : "normal",
			textDecoration: isActive ? "none" : "none",
		};
	};
	const spacing = '10px'
	const h1 = {
		margin:spacing,
		color:'red'
	}
	return (
		<>
			<div className="pb-5">
				<h1 style={h1}>Service</h1>
				<br />
				<br />
				<hr />
				<div>
					<h3 style={{color:h1.color}}>Here we have some other services</h3>
					
					<ul style={{ textDecoration: "none" }}>
						<li
							style={{
								textDecoration: "none",
								display: "inline",
								paddingRight: "20px",
							}}>
							<NavLink style={linkStyle} to="web">Web</NavLink>
						</li>
						<li
							style={{
								textDecoration: "none",
								display: "inline",
								paddingRight: "20px",
							}}>
							<NavLink style={linkStyle} to="design">Design</NavLink>
						</li>
						<li
							style={{
								textDecoration: "none",
								display: "inline",
								paddingRight: "20px",
							}}>
							<NavLink style={linkStyle} to="other">Others</NavLink>
						</li>
					</ul>
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default Service;
