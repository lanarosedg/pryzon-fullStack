import logo from '../assets/logo.png';
import m5ProblemImg from '../assets/MathLevels/m5.png';


function M5() {
    return (
        <>
        <div className="M5Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="m5ProblemContainer">
                <img 
                    src={m5ProblemImg} 
                    alt="" 
                    className="m5ProblemImg" 
                />
            </div>
            <div className="answerInputContainer">
                <input 
                    type="text" 
                    className="answerInput" 
                />
                <button className="answerButton">
                    Submit
                </button>
            </div>
        </div>
        </>
    )
}

export default M5;