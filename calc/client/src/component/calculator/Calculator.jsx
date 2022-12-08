import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './calculator.scss';



const Calculator = () => {
    const [inputs, setInputs] = useState({
        num1: "",
        num2: "",
        operator: ""
    });
    const [result, setResult] = useState(null);

    const handleClear = (e) => {
        // setInputs("");
        setResult("");
    }
    const handleClick = (e) => {
        setInputs({ ...inputs, operator: e.target.value })
    }

    const handleEqual = async (e) => {
        e.preventDefault();
        // setInputs({ ...inputs, operator: e.target.value })
        try {
            const res = await axios.post("http://localhost:8700/calculate", inputs);
            console.log(res.data);
            setResult(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='container'>
            <div className="card">
                <div className="calc">
                    <div className="upper">
                        <input type="text" placeholder="number1" id='answer' value={inputs.num1} onChange={(e) =>setInputs({ ...inputs, num1: e.target.value }) } />
                        <input type="text" placeholder="number2" id='answer' value={inputs.num2} onChange={(e) => setInputs({ ...inputs, num2: e.target.value })} />
                        <input type="text" placeholder="Select Operator" id='answer' value={inputs.operator} onChange={(event) => { event.handleClick() }} />  <br />
                        {result ? <span style={{ color: "green", fontSize: "30px" }}>{result}</span> : null}
                    </div>
                    <div className="lower">
                        {/* <div className="number">
                        <input type="button" className='button' value='9' />
                        <input type="button" className='button' value='8'  />
                        <input type="button" className='button' value='7'  />
                        <input type="button" className='button' value='6'  />
                        <input type="button" className='button' value='5'  />
                        <input type="button" className='button' value='4'  />
                        <input type="button" className='button' value='3'  />
                        <input type="button" className='button' value='2'  />
                        <input type="button" className='button' value='1'  />
                        <input type="button" className='button' value='0'  />
                        </div> */}
                        <div className="operator">
                        <input type="button" className='button' value='+' onClick={handleClick} />
                        <input type="button" className='button' value='-' onClick={handleClick} />
                        <input type="button" className='button' value='*' onClick={handleClick} />
                        <input type="button" className='button' value='/' onClick={handleClick} />
                        <input type="button" className='button' value='%' onClick={handleClick} />
                        </div>
                        <div className="btns">
                        <input type="button" className='button equal' value='=' onClick={handleEqual} />
                        <input type="button" className='button clear' value='clear' onClick={handleClear} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator
