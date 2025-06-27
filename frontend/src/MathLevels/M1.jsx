import { useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png';
import m1ProblemImg from '../assets/MathLevels/m1.png';

function M1() {
    const [answer, setAnswer] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/check-answer', {
                answer: answer.trim(), // keep as string
                level: "M1"
            });
            setResult(response.data ? "Correct!" : "Wrong answer. Try again.");
        } catch (error) {
            setResult("Error checking answer.");
            console.error(error);
        }
    };

    return (
        <div className="M1Container">
            <div className="logoContainer">
                <img src={logo} alt="" className="logo" />
            </div>
            <div className="m1ProblemContainer">
                <img src={m1ProblemImg} alt="" className="m1ProblemImg" />
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
            </div>
            <div className="resultMessage">
                {result}
            </div>
        </div>
    );
}

export default M1;
