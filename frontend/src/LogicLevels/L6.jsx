import logo from '../assets/logo.png';
import l6ProblemImg from '../assets/LogicLevels/l6.png';

import l6a from '../assets/LogicLevels/l6a.png';
import l6b from '../assets/LogicLevels/l6b.png';
import l6c from '../assets/LogicLevels/l6c.png';


function L6() {
    return (
        <>
        <div className="L6Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l6ProblemContainer">
                <img 
                    src={l6ProblemImg} 
                    alt="" 
                    className="l6ProblemImg" 
                />
            </div>
                <img 
                    src={l6a} 
                    alt="" 
                    className="l6a" 
                />
                <img 
                    src={l6b} 
                    alt="" 
                    className="l6b" 
                />
                <img 
                    src={l6c} 
                    alt="" 
                    className="l6c" 
                />
        </div>
        </>
    )
}

export default L6;