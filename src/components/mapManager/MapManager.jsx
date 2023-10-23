import React from "react";
import "./MapManager.css";
import vector from "../../assets/vector.svg";
import vector1 from "../../assets/vector1.svg";

export default function MapManager() {
	return (
		<div className="map-iteams">
			<div className="map-iteams-overlap">
				<div className="iteams-text-wrapper-2">מפה 1</div>
				<div className="map-iteams-vector">
					<img
						className="vector"
						alt="Vector"
						src={vector}
					/>{" "}
				</div>
			</div>
			<div className="iteams-text-wrapper-2">הצג משחקים פעילים</div>

			<div className="iteams-overlap-group">
				<div className="iteamsdiv">הוספת פריט</div>
			</div>
			<div className="iteams-overlap-group">
				<div className="iteamsdiv">עריכה</div>
			</div>
			<div>
				<img
					className="box-vector"
					alt="box-vector"
					src={vector1}
				/>
			</div>
		</div>
	);
}
