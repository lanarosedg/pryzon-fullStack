import logo from '../assets/logo.png';
import m4ProblemImg from '../assets/MathLevels/m4.png';


function M1() {
    return (
        <>
        <div className="M4Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="m4ProblemContainer">
                <img 
                    src={m4ProblemImg} 
                    alt="" 
                    className="m4ProblemImg" 
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

export default M1;