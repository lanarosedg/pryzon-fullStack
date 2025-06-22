import logo from '../assets/logo.png';
import m8ProblemImg from '../assets/MathLevels/m8.png';


function M8() {
    return (
        <>
        <div className="M8Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="m8ProblemContainer">
                <img 
                    src={m8ProblemImg} 
                    alt="" 
                    className="m8ProblemImg" 
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

export default M8;