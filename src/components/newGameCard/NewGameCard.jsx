import React from "react";
import "./NewGameCard.css";
import plus from "../../assets/plus.png";

export default function NewGameCard() {
	return (
		<div className="card">
			<div className="overlap">
				<img
					className="plus"
					alt="Plus"
					src={plus}
				/>
			</div>
			<div className="text-wrapper">משחק חדש</div>
			<div className="enter-btn">
				<div className="overlap-group">
					<div className="div">הוספה</div>
				</div>
			</div>
		</div>
	);
}
