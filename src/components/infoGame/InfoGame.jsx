import React from "react";
import "./InfoGame.css";

export default function InfoGame(props) {
	return (
		<div className="data">
			<div className="data-box">
				<div className="data-overlap-group-wrapper">
					<div className="data-overlap-group">
						<div className="data-frame">
							<div className="data-div">
								<div className="data-text-wrapper">5</div>
								<div className="data-text-wrapper-2">84</div>
							</div>
							<div className="data-frame-2">
								<div className="data-text-wrapper">(5.62%)</div>
								<div className="data-text-wrapper">(94.38%)</div>
							</div>
						</div>
						<div className="group">
							<div className="text-wrapper-5">משחקים פעילים</div>
							<div className="text-wrapper-6">משחקים לא פעילים</div>
							<img
								className="devider-horizon"
								alt="Devider horizon"
								src="/img/devider-horizon.svg"
							/>
							<div className="text-wrapper-7">📊 משחקים</div>
							<div className="number">
								<div className="text-wrapper-8">סה”כ</div>
								<div className="text-wrapper-9">89</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
