import { useRef } from "react"
import "./Contact.css"
// import Phone from "../../img/"
const Contact = () => {
    const formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's Talk!</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1034/1034233.png"
                                alt=""
                                className="c-icon"
                            /> +1 1234 556 75
                        </div>
                        <div className="c-info-item">
                        <img
                                src="https://cdn-icons-png.flaticon.com/128/552/552486.png"
                                alt=""
                                className="c-icon"
                            /> 
                            sarahcafora@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/854/854929.png"
                                alt=""
                                className="c-icon"
                            /> 1234 my house
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Now that you have gotten to know me I'd like to hear your input. What's your Story?</b>
                        Get in touch. Open to marketing and fashion designing advice.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name"></input>
                        <input type="text" placeholder="Subject" name="subject"></input>
                        <input type="text" placeholder="Email" name="user_email"></input>
                        <textarea rows="5" placeholder="Message" name="message"></textarea>
                        <button>Submit</button>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact