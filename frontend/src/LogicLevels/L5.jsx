import logo from '../assets/logo.png';
import l5ProblemImg from '../assets/LogicLevels/l5.png';

import l5a from '../assets/LogicLevels/l5a.png';
import l5b from '../assets/LogicLevels/l5b.png';
import l5c from '../assets/LogicLevels/l5c.png';


function L5() {
    return (
        <>
        <div className="L5Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l5ProblemContainer">
                <img 
                    src={l5ProblemImg} 
                    alt="" 
                    className="l5ProblemImg" 
                />
            </div>
                <img 
                    src={l5a} 
                    alt="" 
                    className="l5a" 
                />
                <img 
                    src={l5b} 
                    alt="" 
                    className="l5b" 
                />
                <img 
                    src={l5c} 
                    alt="" 
                    className="l5c" 
                />
        </div>
        </>
    )
}

export default L5;