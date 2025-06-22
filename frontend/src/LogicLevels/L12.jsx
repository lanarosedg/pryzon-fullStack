import logo from '../assets/logo.png';
import l12ProblemImg from '../assets/LogicLevels/l12.png';

import l12a from '../assets/LogicLevels/l12a.png';
import l12b from '../assets/LogicLevels/l12b.png';
import l12c from '../assets/LogicLevels/l12c.png';


function L12() {
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
                />
                <img 
                    src={l12b} 
                    alt="" 
                    className="l12b" 
                />
                <img 
                    src={l12c} 
                    alt="" 
                    className="l12c" 
                />
        </div>
        </>
    )
}

export default L12;