import { useNavigate } from 'react-router-dom';

import logo from './assets/logo.png';

function MathLevel() {
    const navigate = useNavigate();
    return (
        <>
            <div className="LevelContainer">
                <div className="logoContainer">
                    <img 
                        src={logo} 
                        alt="" 
                        className="logo" 
                    />
                </div>

                <button 
                    className="m1"
                    onClick={() => navigate('/MathLevels/M1')}
                    >
                        1
                </button>

                <button 
                    className="m2"
                    onClick={() => navigate('/MathLevels/M2')}
                    >
                        2
                    </button>
                <button 
                    className="m3"
                    onClick={() => navigate('/MathLevels/M3')}
                    >
                        3
                </button>
                <button 
                    className="m4"
                    onClick={() => navigate('/MathLevels/M4')}
                    >
                        4
                </button>
                <button 
                    className="m5"
                    onClick={() => navigate('/MathLevels/M5')}
                    >
                        5
                </button>
                <button 
                    className="m6"
                    onClick={() => navigate('/MathLevels/M6')}
                    >
                        6
                </button>
                <button 
                    className="m7"
                    onClick={() => navigate('/MathLevels/M7')}
                    >
                        7
                </button>
                <button 
                    className="m8"
                    onClick={() => navigate('/MathLevels/M8')}
                    >
                        8
                </button>
                <button 
                    className="m9"
                    onClick={() => navigate('/MathLevels/M9')}
                    >
                        9
                </button>
                <button 
                    className="m10"
                    onClick={() => navigate('/MathLevels/M10')}
                    >
                        10
                </button>
                <button 
                    className="m11"
                    onClick={() => navigate('/MathLevels/M11')}
                    >
                        11
                </button>
                <button  
                    className="m12"
                    onClick={() => navigate('/MathLevels/M12')}
                    >
                        12
                </button>


                <button className="playButton">
                    Play
                </button>
            </div>
        </>
    )
}

export default MathLevel;