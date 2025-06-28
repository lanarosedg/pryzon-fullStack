import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l12ProblemImg from '../assets/LogicLevels/l12.png';

import l12a from '../assets/LogicLevels/l12a.png';
import l12b from '../assets/LogicLevels/l12b.png';
import l12c from '../assets/LogicLevels/l12c.png';


function L12() {
    const [result, setResult] = useState('');

    const handleClick = async (choice) => {
        try {
            const response = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,
                level: "L12"
            });
            setResult(response.data ? "Correct!" : "Wrong answer. Try again.");
        } catch (error) {
            setResult("Error checking answer.");
            console.error(error)
        }
    }
    return (
        <>
        <div className="L12Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l12ProblemContainer">
                <img 
                    src={l12ProblemImg} 
                    alt="" 
                    className="l12ProblemImg" 
                />
            </div>
                <img 
                    src={l12a} 
                    alt="" 
                    className="l12a" 
                    onClick={() => handleClick("A")}
                />
                <img 
                    src={l12b} 
                    alt="" 
                    className="l12b" 
                    onClick={() => handleClick("B")}
                />
                <img 
                    src={l12c} 
                    alt="" 
                    className="l12c" 
                    onClick={() => handleClick("C")}
                />
                <div className="resultMessage">
                    {result}
                </div>
        </div>
        </>
    )
}

export default L12;