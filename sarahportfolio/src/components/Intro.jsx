import "./Intro.css"
import Shoe from "../img/sarahStella.png"
const Introduction = () => {
    return (
        <div className="i d-flex row">
            <div className="i-left col">
                <div className="i-left-wrap">
                    <h2 className="i-intro">Hello, my name is</h2>
                    <h1 className="i-name">Sarah Cafora</h1>
                    <div className="i-title">
                        <div className="i-title-wrap">
                            <div className="i-title-item">Creative Designer</div>
                            <div className="i-title-item">Entrepreneur</div>
                            <div className="i-title-item">Videographer</div>
                            <div className="i-title-item">Model</div>
                            <div className="i-title-item">Fashion Queen</div>
                        </div>
                    </div>
                    <p className="i-desc">I am young and ambitious woman searching for new ways to express my passions. From designing clothes to writing my blogs, I aim to express my creativity through many mediums.</p>
                </div>
                
            </div>
            <div className="i-right col">
                {/* <div className="i-bg"></div> */}
                <img src={Shoe} alt="" className="i-img"/>
            </div>
        </div>
    )
}

export default Introduction;