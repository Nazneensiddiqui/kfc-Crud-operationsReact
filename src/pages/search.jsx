import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [order, setOrder] = useState("");
  const [mydata, setMydata] = useState([]);
//   const [noRecordsFound, setNoRecordsFound] = useState(false); // New flag for showing "No records found"

  const handleChange = (e) => {
    const orderNo = e.target.value;
    setOrder(orderNo);

    // if (emplname.trim() === "") {
    //   // If input is empty, reset the data and noRecordsFound flag
    //   setMydata([]);
    //   setNoRecordsFound(false);
    //   return;
    // }

    const api = `http://localhost:3000/order/?orderno=${orderNo}`;
    axios.get(api).then((res) => {
        setMydata(res.data);
        console.log(res.data);

//         // Check if no records match
//         const matches = res.data.filter((key) => key.empname.toLowerCase().includes(emplname.toLowerCase()));
//         setNoRecordsFound(matches.length === 0); // Set flag to true if no matches are found
//       })
//       .catch((err) => {
//         console.error("Error fetching data", err);

     });
  };

 
  const ans = mydata.map((key)=>{
    return(
    <>
   <tr  border="2px solid red" width="1000px" align="center" fontWidth="2px" bgcolor="#bd222" style={{color:"white"}} >
        <td>{key.orderno}</td>
        <td>{key.name} </td>
        <td>{key.city}</td>
        <td>{key.mobileno}</td>
        <td>{key.address}</td>
        <td>{key.orderitem}</td>
        <td>{key.amount}</td>
    </tr>
    </>
    )
})

  return (
    <div style={{ textAlign: "center", marginTop: "30px" , marginLeft:"200px"}}>
        <div className="search">
      <h1 style={{ color: "blue" }}>Search Order Records!</h1>
      <input type="text" value={order}  onChange={handleChange}  placeholder="Type Order No...." 
        style={{ padding: "10px", width: "300px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px", marginBottom: "20px" }} 
      />
    </div>

      {/* Only show table when data is found */}
     
      <table  border="2px solid red" width="1000px" align="center">
      <thead style={{ backgroundColor: "#f8f9fa" }}>
      <tr border="2px solid red" width="1000px" align="center"  bgcolor="lightblue" >
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Order No</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Name</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>City</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Mobile No.</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Address</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Order Item</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {ans}
          </tbody>
        </table>
    </div>
  );
};

export default Search;