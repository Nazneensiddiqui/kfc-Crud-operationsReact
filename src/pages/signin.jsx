import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useNavigate } from "react-router-dom";

const Signin=()=>{
    const[input,setInput]=useState({});
    const navigate= useNavigate();

    const handlInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values , [name]:value}));
    console.log(input);
}


    
    const handlSubmit=()=>{
        let api="http://localhost:3000/order";
        axios.post(api,input).then((res)=>{
          console.log(res);
        toast.success("Save Data Successfully!!")
        })
        navigate("/display");
    }

    return(
        <>
        <div className="form">
       <h1 align="center">Your Order</h1>
      
 <div className="row1">    
    Enter Order No.     :  <input type="text" name="orderno" onChange={handlInput}/>
        Enter Name      :  <input type="text" name="name" onChange={handlInput}/>
        </div><br/> <br/> 
<div className="row1">          
       
    Enter Mobile No.    :  <input type="text" name="mobileno" onChange={handlInput}/>
    Enter City      :  <input type="text" name="city" onChange={handlInput}/>
    </div><br/> <br/>  
    <div className="row1">
        
    Enter Order Item :  <input type="text" name="orderitem" onChange={handlInput}/>
        Address  :  <input type="text" name="address" onChange={handlInput}/>
    </div> <br/> <br/>
    <div className="row1"> 
        Enter Amount   :    <input type="text" name="amount" onChange={handlInput}/>
        <button onClick={handlSubmit}>Save Data</button>
        </div> <br/> 
        </div>
        <ToastContainer/>
        </>
    )
}
export default Signin;