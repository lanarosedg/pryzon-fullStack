import logo from '../assets/logo.png';
import m2ProblemImg from '../assets/MathLevels/m2.png';


function M2() {
    return (
        <>
        <div className="M2Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="m2ProblemContainer">
                <img 
                    src={m2ProblemImg} 
                    alt="" 
                    className="m2ProblemImg" 
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

export default M2;