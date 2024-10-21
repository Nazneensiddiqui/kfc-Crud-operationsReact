import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const EditData=()=>{
    const {myid} =useParams();
    const[mydata , setMydata]=useState({});  // mydata me value object ke fome me ayegi {}
    const navigate= useNavigate();
    
 const loadData=()=>{
let api=`http://localhost:3000/order/${myid}`;  //id ko target kiya he
axios.get(api).then((res)=>{
console.log(res.data);
setMydata(res. data)
})
} 

useEffect(()=>{
    loadData();
}, [])  
 
const handlInput=(e)=>{
let name=e.target.name;
let value=e.target.value;
setMydata(values=>({...values , [name]:value}));  //spreed opreater
console.log(mydata)
}
    
 const handlSubmit=()=>{
    let api=`http://localhost:3000/order/${myid}`; 
    axios.put(api , mydata).then((res)=>{
        message.success("Data succesfully updated!!!");
        setMydata({
            orderno:"",
            name:"",
            city:"",
            mobileno:"",
            address:"",
            orderitme:"",
            amount:""
        })

    })
    navigate("/display");
 }   
    
    
    return(

        <>
        <div className="form1" align="center" >
        <h1> Edit Order  </h1>
        <div className="row1" >
        Edit Order No. : <input type="text" name="orderno" value={mydata.orderno} onChange={handlInput}/>
        Edit Name : <input type="text" name="name" value={mydata.name} onChange={handlInput}/></div><br/><br/>
        <div className="row1" >
        Edit Mobile No. : <input type="text" name="mobileno" value={mydata.mobileno} onChange={handlInput}/>
        Edit City : <input type="text" name="city" value={mydata.city} onChange={handlInput}/></div><br/><br/>
        <div className="row1" >
        Edit Address : <input type="text" name="address" value={mydata.address} onChange={handlInput}/>
        Edit Item : <input type="text" name="orderitem" value={mydata.orderitem} onChange={handlInput}/></div><br/><br/>
        <div className="row1" >
        Edit Amount : <input type="text" name="amount" value={mydata.amount} onChange={handlInput}/>
        <button onClick={handlSubmit}>Update</button>
        </div>
        </div>
        </>
    )
}
export default EditData;