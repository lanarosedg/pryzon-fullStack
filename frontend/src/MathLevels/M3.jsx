import logo from '../assets/logo.png';


function M3() {
    return (
        <>
        <div className="M3Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="m3ProblemContainer">
                <p className="m3ProblemStatement">
                    A, A, B, C, E, ?
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

export default M3;