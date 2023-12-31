import './FortuneTeller.css';
import fortunesList from './fortunesList';
import { orangeTape } from '../../assets/images';
import { floralglobe } from '../../assets/gifs/gifsindex';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

function getFortune() {
    var fortune = fortunesList[Math.floor(Math.random() * fortunesList.length)];
    document.getElementById("fortune-text").innerText = fortune;
}

export default function FortuneTeller(){
    return(
        <div className="container">
            <Navbar/>
            <div className="mainContent">
                <div className="contentBoxCenter">
                    <div className="fortunes-title-container">
                        <img src={orangeTape} alt="strip of orange tape" id="orange-tape" />
                        <h1 className="fortunes-title">Fortune Teller</h1>
                    </div>
                    <button className="get-fortune-button" onClick={getFortune}>
                        Get fortune!
                    </button>
                    <p id="your-fortune-is">Your fortune is...</p>
                    <p id="fortune-text"></p>
                    <img id="floral-globe" src={floralglobe} alt="pink globe filled with flowers" />
                </div>
            </div>
            <Sidebar/>
        </div>
    );
}