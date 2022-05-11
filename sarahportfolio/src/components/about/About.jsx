import "./about.css";
import dShoe from "../../img/bridal.png"
import wreath from "../../img/wreath.svg"
const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                {/* <div className="a-card bg"></div> */}
                <div className="a-card img-card">
                     <img className ="a-img" src = {dShoe} alt=""/>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">I am super duper cool</p>
                <p className="a-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="a-award">
                    <img src={wreath} alt="wreath" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Internation Design</h4>
                        <p className="a-award-desc">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About