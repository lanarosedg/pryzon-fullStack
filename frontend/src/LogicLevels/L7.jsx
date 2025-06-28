import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l7ProblemImg from '../assets/LogicLevels/l7.png';

import l7a from '../assets/LogicLevels/l7a.png';
import l7b from '../assets/LogicLevels/l7b.png';
import l7c from '../assets/LogicLevels/l7c.png';


function L7() {
    const [result, setResult] = useState('')

    const handleClick = async (choice) => {
        try {
            const response = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,
                level: "L7"
            });
            setResult(response.data ? "Correct!" : "Wrong answer. Try again");
        } catch (error) {
            setResult("Error checking answer.");
            console.error(error)
        }
    };

    return (
        <>
        <div className="L7Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l7ProblemContainer">
                <img 
                    src={l7ProblemImg} 
                    alt="" 
                    className="l7ProblemImg" 
                />
            </div>
                <img 
                    src={l7a} 
                    alt="" 
                    className="l7a" 
                    onClick={() => handleClick("A")}
                />
                <img 
                    src={l7b} 
                    alt="" 
                    className="l7b" 
                    onClick={() => handleClick("B")}
                />
                <img 
                    src={l7c} 
                    alt="" 
                    className="l7c" 
                    onClick={() => handleClick("C")}
                />
                <div className="resultMessage">
                    {result}
                </div>
        </div>
        </>
    )
}

export default L7;