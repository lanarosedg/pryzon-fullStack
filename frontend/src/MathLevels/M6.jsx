import logo from '../assets/logo.png';


function M6() {
    return (
        <>
        <div className="M6Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="m6ProblemContainer">
                <p className="m6ProblemStatement">
                    CA + E = CF
                    <br />
                    BF / B = ?  
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

export default M6;