import logo from '../assets/logo.png';


function M7() {
    return (
        <>
        <div className="M7Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="m7ProblemContainer">
                <p className="m7ProblemStatement">
                    4, 16, 64, ?
                </p>
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

export default M7;