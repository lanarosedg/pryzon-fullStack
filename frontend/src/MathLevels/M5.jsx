import { useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png';
import m5ProblemImg from '../assets/MathLevels/m5.png';


function M5() {
    const [answer, setAnswer] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/check-answer', {
                answer: answer.trim(), // keep as string
                level: "M5" // ✅ correct level
            });
            setResult(response.data ? "Correct!" : "Wrong answer. Try again.");
        } catch (error) {
            setResult("Error checking answer.");
            console.error(error);
        }
    };
    return (
        <>
        <div className="M5Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="m5ProblemContainer">
                <img 
                    src={m5ProblemImg} 
                    alt="" 
                    className="m5ProblemImg" 
                />
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

export default M5;