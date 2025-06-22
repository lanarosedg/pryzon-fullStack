import logo from '../assets/logo.png';


function M12() {
    return (
        <>
        <div className="M12Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="m12ProblemContainer">
                <p className="m12ProblemStatement">
                    HA, F4, DI, ? 
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

export default M12;