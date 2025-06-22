import logic from './assets/logic.png';
import math from './assets/math.png';
import logo from './assets/logo.png';


import { useNavigate } from 'react-router-dom';


function Category() {

    const navigate = useNavigate();

    return (
        <>
            <div className="Category">
                <div className="logoContainer">
                    <img 
                        src={logo} 
                        alt="" 
                        className="logo" 
                    />
                </div>
                <p className="pickCategory">Pick a Category</p>
                <div className="logicContainer">
                    <img   
                        src={logic} 
                        alt="" 
                        className="logic" 
                        onClick={() => navigate('/LogicLevel')}
                    />
                </div>
                <div className="mathContainer">
                    <img 
                        src={math} 
                        alt="" 
                        className="math" 
                        onClick={() => navigate('/MathLevel')   }
                    />
                </div>
            </div>
        </>
    )
}

export default Category;