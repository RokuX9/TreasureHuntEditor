import React from "react";
import frame from "../../assets/frame.svg";
import heart from "../../assets/heart.png";
import icons8 from "../../assets/icons8-bin-60-5.png"
import game from "../../assets/game.png"
import "./GameCard.css"

export function Game () {
    return (
        <div className="card1">
            <div className="overlap-group">
                <img className="img1" alt="img1" src={game} />
                <div className="rectangle" />
                <div className="left-corner">
                    <div className="text-wrapper">4.5</div>
                    <div className="div">12345</div>
                    <img className="frame" alt="Frame" src={frame} />
                    <img className="heart" alt="Heart" src={heart}/>
                </div>
            </div>
            <div className="text-wrapper-2">&nbsp;&nbsp;כחול עמוק</div>
            <div className="overlap">
                <div className="text-wrapper-3">&nbsp;&nbsp;שפה:</div>
                <div className="text-wrapper-4">עב’ | ער’</div>
            </div>
            <div className="overlap-2">
                <div className="text-wrapper-5">&nbsp;&nbsp;קטגוריה:</div>
                <div className="text-wrapper-6">12+</div>
            </div>
            <div className="element">&nbsp;&nbsp;אחוז הצלחה: 98.72%</div>
            <img className="bin" alt="Bin" src={icons8} />
        </div>
    );
};

export default Game;