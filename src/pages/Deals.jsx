import src1 from "../images/scr1.jpeg";
import src2 from "../images/src2.png";
import src3 from "../images/src3.jpeg";
import ch1 from "../images/CHKZINGER.jpg";
import de1 from "../images/de1.jpg";
import de2 from "../images/de2.jpg";
import de3 from "../images/de3.jpg";
import de4 from "../images/de4.jpg";
import de5 from "../images/de5.jpg";
import de6 from "../images/de6.jpg";



const Deals=()=>{
    return(
        <>
       
       
        <img src={src1} />
        <div className="src">
            <h1 style={{color:"black" , wordSpacing:"0.5px"}}>NATIONAL OFFERS</h1>
            <p style={{textDecoration:"underline"}}>Sign In to see exclusive offers & deals</p>
        </div>

        <div className="deal">
        <img src={src2}  height={400} width={300}/><br/>
        <img src={src3} height={400}/><br/>
       <div className="deals">
        <img src={ch1} alt="" height={250} width={300} />
         <h2 style={{color:"red"}}>FREE VEG ZINGER ...</h2>
        <p>1 Pc free Chicken Zinger on a cart value <br/>of 499 or above on first order. Only for</p>
         <div className="btn">
         <b><p>Veiw Detail</p></b>
         <button class="btn1"><b>Apply Offer</b></button>
         </div>
     </div>
        </div>

        <div className="deal1">
        <div className="deals">
        <img src={de1} alt="" height={250} width={300} />
         <h2 style={{color:"red"}}>Upto Rs 100 off o...</h2>
        <p>Upto Rs 100 off on min cart value of Rs <br/> 699 or more . Applicable on 4th order</p>
         <div className="btn">
         <b><p>Veiw Detail</p></b>
         <button class="btn1"><b>Apply Offer</b></button>
         </div>
     </div>

         <div className="deals"> 
        <img src={de2} alt="" height={250} width={300} />
         <h2 style={{color:"red"}}>Add 2 Pc Hot n...</h2>
        <p>Add 2 Pc Hot n Crispy Chicken at just Rs 99 <br/> on min cart value of Rs 499 or more</p>
         <div className="btn">
         <b><p>Veiw Detail</p></b>
         <button class="btn1"><b>Apply Offer</b></button>
         </div>
     </div>

       <div className="deals">
        <img src={de3} alt="" height={250} width={300} />
         <h2 style={{color:"red"}}>Get flat Rs.75 off...</h2>
        <p>Get flat Rs.75 off on a cart value of Rs.599 or above</p>
         <div className="btn">
         <b><p>Veiw Detail</p></b>
         <button class="btn1"><b>Apply Offer</b></button>
         </div>
     </div>
        </div>
        
        <div className="deal1">
        <div className="deals">
        <img src={de4} alt="" height={250} width={300} />
         <h2 style={{color:"red"}}>1 Pc free Veg Zinge ...</h2>
        <p>1 Pc free Chicken Zinger on a cart value <br/>of 499 or above on first order. Only for</p>
         <div className="btn">
         <b><p>Veiw Detail</p></b>
         <button class="btn1"><b>Apply Offer</b></button>
         </div>
     </div>

         <div className="deals"> 
        <img src={de5} alt="" height={250} width={300} />
         <h2 style={{color:"red"}}>Free Double...</h2>
        <p>Free Double chicken roll on a cart value of 999 or above.</p>
         <div className="btn">
         <b><p>Veiw Detail</p></b>
         <button class="btn1"><b>Apply Offer</b></button>
         </div>
     </div>

       <div className="deals">
        <img src={de6} alt="" height={250} width={300} />
         <h2 style={{color:"red"}}>50% OFF on all ...</h2>
        <p>Flat 125/- off</p>
         <div className="btn">
         <b><p>Veiw Detail</p></b>
         <button class="btn1"><b>Apply Offer</b></button>
         </div>
     </div>
        </div>

        </>
    )
}
export default Deals;