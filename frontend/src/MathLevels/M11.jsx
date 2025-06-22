import logo from '../assets/logo.png';
import m11ProblemImg from '../assets/MathLevels/m11.png';


function M11() {
    return (
        <>
        <div className="M11Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="m11ProblemContainer">
                <img 
                    src={m11ProblemImg} 
                    alt="" 
                    className="m11ProblemImg" 
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

export default M11;