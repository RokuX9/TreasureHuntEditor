import React from "react";
import "./Menu.css";
import ftriup from "../../assets/fillftriup.svg";
import games from "../../assets/games-64x64-svg-2.svg";
import map from "../../assets/map-svg-2.svg";
import template from "../../assets/templatevector.png";



function Menu (props){
    return (
        <div className="menu">
            <div className="sidebar">
                <div className="element">
                    <div className="overlap-group">
                        <div className="frame">
                            <div className="text-wrapper">משחקים</div>
                        </div>
                        <img className="fill-ftriup" alt="Fill ftriup" src={ftriup} />
                        <img className="GAMES-SVG" alt="Games SVG" src={games} />
                    </div>
                </div>
                <div className="element-nd">
                    <div className="div">משחק חדש</div>
                </div>
                <div className="element-nd">
                    <div className="text-wrapper-2">משחקים פעילים</div>
                </div>
                <div className="element-nd">
                    <div className="text-wrapper-3">משחקים לא פעילים</div>
                </div>
                <div className="element-2">
                    <div className="title">מפה</div>
                    <img className="MAP-SVG" alt="Map SVG" src={map} />
                    <img className="img" alt="Fill ftriup" src={ftriup} />
                </div>
            </div>
            <div className="element-3">
                <div className="text-wrapper-4">תבניות</div>
                <img className="template-vector" alt="Template vector" src={template} />
                <img className="img" alt="Fill ftriup" src={ftriup} />
            </div>
        </div>
    );
};

export default Menu;