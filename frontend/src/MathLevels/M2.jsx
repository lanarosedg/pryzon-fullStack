import { useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png';
import m2ProblemImg from '../assets/MathLevels/m2.png';

function M2() {
    const [answer, setAnswer] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/check-answer', {
                answer: parseInt(answer),
                level: "M2" // ✅ correct level
            });
            setResult(response.data ? "Correct!" : "Wrong answer. Try again.");
        } catch (error) {
            setResult("Error checking answer.");
            console.error(error);
        }
    };

    return (
        <div className="M2Container">
            <div className="logoContainer">
                <img src={logo} alt="" className="logo" />
            </div>
            <div className="m2ProblemContainer">
                <img src={m2ProblemImg} alt="" className="m2ProblemImg" />
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
    );
}

export default M2;
