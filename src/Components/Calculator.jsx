import { useState } from 'react'
import React from 'react'
import './calc.css'


function Calculator() {
    const[value1,setValue]=useState('');
    const[value2,setValue2]=useState('');
    const[res,setRes]=useState('');
    const[ansR,setAnsr]=useState();
    let[firstrun,setFirstRun]=useState(false);
    function handleChange(e){
      setValue(e.target.value);
    }
    function handleChange2(e){
      setValue2(e.target.value);
    }
  
    function checkBothInteger(value1, value2) {
      if (!isValidNumber(value1)) {
          return { 'bool': false, 'str': 'Input1 is not a valid number ' };
      }
      if (!isValidNumber(value2)) {
          return { 'bool': false, 'str': 'Input2 is not a valid number ' };
      }
  
      return { 'bool': true, 'str': '' };
  }
  
  function isValidNumber(value) {
      // Check if the value is not empty
      if (value.trim() === '') {
          return false;
      }
  
      // Try to convert the value to a number
      const num = Number(value);
  
      // Check if the value is a valid number
      if (isNaN(num)) {
          return false;
      }
  
      return true;
  }
  
    function calculation(value1,value2,arith){
      let ans;
      value1=Number.parseInt(value1);
      value2=Number.parseInt(value2);  
      if(arith=='+'){
        ans=value1+value2;
        }else if(arith=='-'){
          ans=value1-value2;
        }else if(arith=='*'){
          ans=value1*value2;
        }else{
          ans=value1/value2;
        }

        return ans;
    }


    function handleBtnClick(e){
      if(!firstrun)setFirstRun(true);
      if(value1==='' || value2===''){
          setAnsr(false);
          setRes('Input Field is Empty');
          console.log(res);

      }else{
      if(checkBothInteger(value1,value2).bool){
        let arith=e.target.value;
       
        let ans=calculation(value1,value2,arith);
        setRes(ans);
        setAnsr(true);
      }else{
        setRes(checkBothInteger(value1,value2).str);
        setAnsr(false);
      }
    }
    }


  return (
    <div className='hero'>
        <div className='hue1'>
                <h1>React Calculator</h1>
                <input value={value1} onChange={handleChange} type="text" /> 
                <input value={value2} type="text" onChange={handleChange2}/>
                <div className='btn'>
                    <button value={'+'} onClick={handleBtnClick}>+</button>
                    <button value={'-'} onClick={handleBtnClick}>-</button>
                    <button value={'*'} onClick={handleBtnClick}>*</button>
                    <button value={'/'} onClick={handleBtnClick}>/</button>
                </div>    
                {(firstrun)?<div className={(ansR)?'correct':'incorrect'}>{(ansR)?'Success 💁‍♂️ '+res :'Error 🚩'+res}</div>   
                      :null}
        </div>
    </div>
  )
}

export default Calculator