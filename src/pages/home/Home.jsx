import React from "react";
import "./Home.css";
import NewCard from "../../components/newGameCard/NewGameCard";
import Header from "../../components/header/Header";
import GameCard from "../../components/gameCard/GameCard";
import Menu from "../../components/menu/Menu";
import InfoGame from "../../components/infoGame/InfoGame";

function Home(props) {
	return (
		<>
			<Header />
			<div className="head">
				<div className="menu">
					<Menu />
				</div>

				<div1 className="main">
					<div className="active-games">
						<div className="active">
							<div className="text-wrapper">משחקים פעילים</div>
						</div>
						<div className="card-list-active">
							<NewCard />
							<GameCard />
						</div>
					</div>
				</div1>
			</div>
		</>
	);
}

export default Home;
