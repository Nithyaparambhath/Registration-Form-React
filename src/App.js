import { Button, Stack, TextField } from '@mui/material';

import './App.css';
import { useState } from 'react';


function App() {

 const [interest,setInterest] = useState(0)
 const [sname,setSname] =useState("") 
 const [email,setEmail] =useState("")
 const [password,setPassword] =useState("")
 const [confirmPassword,setConfirmPassword] =useState("")
 const [isNameValid,setIsNameValid] = useState(true)
 const [isEmailValid,setIsEmailValid] = useState(true)
 const [isPasswordValid,setIsPasswordValid] = useState(true)
 const [isConfirmPasswordValid,setIsConfirmPasswordValid] = useState(true)
 const [isPasswordMatch,setIsPasswordMatch] = useState(true)
 const validInput=(e)=>{

  const {name,value} =e.target
  
  if(!!value.match(/^[a-zA-Z]+$/) || !!value.match(/^[a-zA-Z0-9]{3,20}@gmail.com$/)){

    if(name==='sname'){
    setSname(value)
    setIsNameValid(true)

    }
  
}
  
  else{
    if(name==='sname'){
    setSname(value)
    setIsNameValid(false)
  }
}
}

const validEmailInput=(e)=>{

  const {name,value} =e.target
  
  if(!!value.match(/^[a-zA-Z0-9]{3,20}@gmail.com$/)){

    if(name==='email'){
    setEmail(value)
    setIsEmailValid(true)

    }
  
}
  
  else{
    if(name==='email'){
    setEmail(value)
    setIsEmailValid(false)
  }
}
}

const validPasswordInput=(e)=>{

  const {name,value} =e.target
  
  if(!!value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/)){

    if(name==='password'){
    setPassword(value)
    setIsPasswordValid(true)

    }else if(name==='confirmPassword'){
      setConfirmPassword(value)
      setIsConfirmPasswordValid(true)
    }
  
}
  
  else{
    if(name==='password'){
    setPassword(value)
    setIsPasswordValid(false)
  }else if(name==='confirmPassword'){
    setConfirmPassword(value)
    setIsConfirmPasswordValid(false)
  }
}
}

const handleSubmit=(e)=>{
e.preventDefault()
console.log(password);
console.log(confirmPassword);
if(sname==="" ||password==="" ||email==="" || confirmPassword===""  ){
  alert("Please fill the form Completely")
}
else if(password === confirmPassword){
  alert("Registration Successfully")
}else{
  setIsPasswordMatch(false)
}
}


// const handleCalculate=(e)=>{
//   e.preventDefault()
//   if(!principle || !rate || !year){
//     alert("Please fill the form Completely")
//   }else{
//     setInterest(principle*rate*year/100)
//   }
// }

// const handleReset=()=>{
// setPrinciple(0)
// setRate(0)
// setYear(0)
// setIsPrincipleValid(true)
// setIsRateValid(true)
// setIsYearValid(true)
// setInterest(0)
// }

  return (
    <div style={{height:'100vh',padding:'20px'}} className='bg-dark d-flex justify-content-center align-items-center w-100'>
      
      
      <div style={{width:'500px',height:'100vh', margin:'50px'}} className='bg-light p-5 rounded'>
        <h3 style={{fontWeight:'600'}} className='text-center fs-1 '>Registration</h3>
        
        <form className="mt-5" onSubmit={handleSubmit} >
          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic1" label="Name" variant="outlined" name='sname' value={sname || ""} onChange={(e)=>validInput(e)} />
          </div>
          {
            !isNameValid &&
            <div style={{fontSize:'15px'}} className="mt-3 mb-3 text-danger ">
            *Invalid User Input
            </div>
          }
          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic2" label="Email" variant="outlined" value={email || ""} name='email' onChange={(e)=>validEmailInput(e)}   />
          </div>
          {
            !isEmailValid &&
            <div style={{fontSize:'15px'}} className="mt-3 mb-3 text-danger ">
            *Invalid User Input
            </div>
          }
          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic3" label="Password" variant="outlined"  value={password || ""} name='password' onChange={(e)=>validPasswordInput(e)}  />
          </div>

          {
            !isPasswordValid &&
            <div style={{fontSize:'15px'}} className="mt-3 mb-3 text-danger ">
            *Enter 8 digits include uppercase,lowecase,symbols and numbers
            </div>
          }

          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic3" label="Confirm Password" variant="outlined"  value={confirmPassword || ""} name='confirmPassword' onChange={(e)=>validPasswordInput(e)}  />
          </div>
          {
            !isConfirmPasswordValid &&
            <div style={{fontSize:'15px'}} className="mt-3 mb-3 text-danger ">
            *Enter 8 digits include uppercase,lowecase,symbols and numbers
            </div>
          }
          {
            !isPasswordMatch &&
            <div style={{fontSize:'15px'}} className="mt-3 mb-3 text-danger ">
            *Password not match
            </div>
          }
          
          <Stack direction="row" spacing={2}>
            <Button style={{height:'50px',width:'100%'}} type='submit' variant="contained" >SUBMIT</Button>
            
          </Stack>
        </form>
      </div>
    
    
    </div>
  );
}

export default App;
