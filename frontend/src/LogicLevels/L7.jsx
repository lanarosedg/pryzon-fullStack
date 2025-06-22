import logo from '../assets/logo.png';
import l7ProblemImg from '../assets/LogicLevels/l7.png';

import l7a from '../assets/LogicLevels/l7a.png';
import l7b from '../assets/LogicLevels/l7b.png';
import l7c from '../assets/LogicLevels/l7c.png';


function L7() {
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
                />
                <img 
                    src={l7b} 
                    alt="" 
                    className="l7b" 
                />
                <img 
                    src={l7c} 
                    alt="" 
                    className="l7c" 
                />
        </div>
        </>
    )
}

export default L7;