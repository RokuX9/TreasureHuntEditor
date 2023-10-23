import React from "react";
import "./Login.css";
import logoBig from "../../assets/logoBig.png";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

export default function Login() {
	return (
		<div className="login">
			<h2 className="login__header">התחברות למערכת</h2>
			<form className="login__form">
				<div className="login__inputs">
					<TextField
						type="text"
						placeholder='דוא"ל'
						className="login__input"
					/>
					<TextField
						type="text"
						placeholder="סיסמא"
						className="login__input"
					/>
				</div>
				<Link className="login__link">שחכת את הסיסמא?</Link>
				<button
					type="submit"
					className="login__button"
				>
					כניסה
				</button>
			</form>
			<img
				className="logo"
				alt="Logo"
				src={logoBig}
			/>
		</div>
	);
}
