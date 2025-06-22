import logo from '../assets/logo.png';
import m9ProblemImg from '../assets/MathLevels/m9.png';


function M9() {
    return (
        <>
        <div className="M9Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="m9ProblemContainer">
                <img 
                    src={m9ProblemImg} 
                    alt="" 
                    className="m9ProblemImg" 
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

export default M9;