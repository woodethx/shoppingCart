import { useEffect } from "react";
import Card from "./Card";

function Home(){
    return(
        <>
        <div className="intro">
            <img src="" alt="" />
            <div className="info">
                <div className="infoText">
                    <h2>Quality</h2>
                    <p>Tech Store offers the finest quality tech on the market at a reasonable price.</p>
                </div>
                <button className="infoButton">
                    Shop
                </button>
            </div>
        </div>
        <div className="feat">
            <h2>See some of our featured products</h2>
            <div className="featCards">
                {<Card id="0"/>}
                {<Card id="1"/>}
                {<Card id="2"/>}
            </div>
        </div>
        <div className="contact"></div>
        </>
    )
}

export default Home;