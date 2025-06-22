import logo from '../assets/logo.png';
import m10ProblemImg from '../assets/MathLevels/m10.png';


function M10() {
    return (
        <>
        <div className="M10Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="m10ProblemContainer">
                <img 
                    src={m10ProblemImg} 
                    alt="" 
                    className="m10ProblemImg" 
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

export default M10;