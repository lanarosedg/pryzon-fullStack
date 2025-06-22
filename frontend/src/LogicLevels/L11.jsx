import logo from '../assets/logo.png';
import l11ProblemImg from '../assets/LogicLevels/l11.png';

import l11a from '../assets/LogicLevels/l11a.png';
import l11b from '../assets/LogicLevels/l11b.png';
import l11c from '../assets/LogicLevels/l11c.png';


function L11() {
    return (
        <>
        <div className="L11Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l11ProblemContainer">
                <img 
                    src={l11ProblemImg} 
                    alt="" 
                    className="l11ProblemImg" 
                />
            </div>
                <img 
                    src={l11a} 
                    alt="" 
                    className="l11a" 
                />
                <img 
                    src={l11b} 
                    alt="" 
                    className="l11b" 
                />
                <img 
                    src={l11c} 
                    alt="" 
                    className="l11c" 
                />
        </div>
        </>
    )
}

export default L11;