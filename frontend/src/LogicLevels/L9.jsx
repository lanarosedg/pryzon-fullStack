import logo from '../assets/logo.png';
import l9ProblemImg from '../assets/LogicLevels/l9.png';

import l9a from '../assets/LogicLevels/l9a.png';
import l9b from '../assets/LogicLevels/l9b.png';
import l9c from '../assets/LogicLevels/l9c.png';


function L9() {
    return (
        <>
        <div className="L9Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l9ProblemContainer">
                <img 
                    src={l9ProblemImg} 
                    alt="" 
                    className="l9ProblemImg" 
                />
            </div>
                <img 
                    src={l9a} 
                    alt="" 
                    className="l9a" 
                />
                <img 
                    src={l9b} 
                    alt="" 
                    className="l9b" 
                />
                <img 
                    src={l9c} 
                    alt="" 
                    className="l9c" 
                />
        </div>
        </>
    )
}

export default L9;