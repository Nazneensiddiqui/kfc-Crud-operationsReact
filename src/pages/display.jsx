import { useState, useEffect } from "react";
import axios from "axios";
import delimg from "../images/delete.png";
import edimg from "../images/edit.png";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useNavigate } from "react-router-dom";

const Display=()=>{
const[kfcdata, setkfcdata]=useState([]);
const navigate= useNavigate();

const loaddata=()=>{
    let api="http://localhost:3000/order";
    axios.get(api).then((res)=>{
        console.log(res.data);
        setkfcdata(res.data);
    })
}

useEffect(()=>{
    loaddata();
},[])

//.................delet recode................
const myRecDel=(id)=>{
let api=`http://localhost:3000/order/${id}`;
axios.delete(api).then((res)=>{
    alert(" Data Delete Successfully!!")
loaddata();
})
}

//.............edit data.........................
const myEdit=(id)=>{
    navigate(`/editrec/${id}`)
} 

const ans= kfcdata.map((key)=>{
return(
    <>
      <tr  border="2px solid red" width="1000px" align="center" fontWidth="2px" bgcolor="#bd222" style={{color:"white"}} >
  <td>{key.orderno}</td>
  <td>{key.name}</td>
  <td>{key.city}</td>
  <td>{key.mobileno}</td>
  <td>{key.address}</td>
  <td>{key.orderitem}</td>
  <td>{key.amount}</td>
  <td>
                <a href="#" onClick={()=>{myEdit(key.id)}}>
                   <img src={edimg} width="30" height="30" /> 
                 </a>
                 
                 <a  href="#" onClick={()=>{myRecDel(key.id)}}>
                 <img src={delimg} width="30" height="30" /> 
                 </a>
  </td>
</tr>
    </>
)
})




    return(
        <>
        <div align="center" style={{marginTop:"20px"}}>
      <table  border="2px solid red" width="1000px" align="center" >
       <tr border="2px solid red" width="1000px" align="center"  bgcolor="lightblue" >
            <th>Order No</th>
            <th>Name</th>
            <th>City</th>
            <th>Mobile No.</th>
            <th>Address</th>
            <th> Order Item</th>
            <th>Amount</th>
            <th>Action</th>
        </tr>
        {ans}
       </table>
       </div>
       <ToastContainer/>
        </>
    )
}
export default Display;