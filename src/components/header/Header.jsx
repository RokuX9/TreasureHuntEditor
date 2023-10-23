import React from "react";
import "./Header.css";
import logo from "../../assets/Logo.png";
import User from "../../assets/usericon.png";

export default function Header() {
	return (
		<div className="header">
			<p className="text-wrapper">מערכת לבניית משחקים | מוזיאון הכט</p>
			<img
				className="user-icon"
				alt="User icon"
				src={User}
			/>
			<div className="div">מיכל בלפרמן</div>
			<img
				className="logo"
				alt="Logo"
				src={logo}
			/>
		</div>
	);
}
