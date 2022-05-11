import "./Toggle.css"
// import Sun from "../../img/"
const Toggle = () => {
    return (
        <div className="t">
            <img src="https://cdn-icons-png.flaticon.com/512/4893/4893584.png" alt="dark mode" className="t-icon" />
            <img src="https://cdn-icons.flaticon.com/png/128/1687/premium/1687686.png?token=exp=1652239988~hmac=28fa32c3dac18c59357fb1b2f6f08779" alt="light" className="t-icon" />
            <div className="t-button"></div>

        </div>
    )
}

export default Toggle