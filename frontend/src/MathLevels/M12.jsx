import { useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png';


function M12() {
    const [answer, setAnswer] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/check-answer', {
                answer: answer.trim(), // keep as string
                level: "M12" // ✅ correct level
            });
            setResult(response.data ? "Correct!" : "Wrong answer. Try again.");
        } catch (error) {
            setResult("Error checking answer.");
            console.error(error);
        }
    };
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
                    HA, FD, DI, ? 
                </p>
            </div>
            <div className="answerInputContainer">
                <input 
                    type="text" 
                    className="answerInput" 
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)} 
                />
                <button className="answerButton" onClick={handleSubmit}>
                    Submit
                </button>
                <div className="resultMessage">
                    {result}
                </div>
            </div>
        </div>
        </>
    )
}

export default M12;