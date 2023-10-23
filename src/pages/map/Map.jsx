import React from "react";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import "./Map.css";
import circle_img from "../../assets/icon-add-circle.png";
import MapManager from "../../components/mapManager/MapManager";
import inkedhechtmuseum from "../../assets/inkedhechtmuseum.png";
import inkedhechtmuseum1 from "../../assets/inkedhechtmuseum1.png";

function Map(prop) {
	return (
		<>
			<Header />
			<div className="head">
				<div className="menu">
					<Menu />
				</div>
				<div className="main">
					<div className="map_manager">
						<div className="buttons">
							<div className="map-overlap-group">
								<div className="map-text-wrapper">מפה חדשה</div>
								<img
									className="icon-add-circle"
									alt="Icon add circle"
									src={circle_img}
								/>
							</div>
							<div className="map-overlap-group">
								<div className="map-div">ניהול פריטים</div>
							</div>
						</div>
						<MapManager />
						<div className="map-img">
							<img
								className="inkedhechtmuseum"
								alt="hecht museum "
								src={inkedhechtmuseum}
							/>
						</div>
						<MapManager />
						<div className="map-img">
							<img
								className="inkedhechtmuseum1"
								alt="hecht museum 1"
								src={inkedhechtmuseum1}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Map;
