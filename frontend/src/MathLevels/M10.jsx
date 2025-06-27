import { useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png';
import m10ProblemImg from '../assets/MathLevels/m10.png';


function M10() {
    const [answer, setAnswer] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/check-answer', {
                answer: answer.trim(), // keep as string
                level: "M10" // ✅ correct level
            });
            setResult(response.data ? "Correct!" : "Wrong answer. Try again.");
        } catch (error) {
            setResult("Error checking answer.");
            console.error(error);
        }
    };
    return (
        <>
        <div className="M10Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="m10ProblemContainer">
                <img 
                    src={m10ProblemImg} 
                    alt="" 
                    className="m10ProblemImg" 
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

export default M10;