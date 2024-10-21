import { Link, Outlet } from "react-router-dom";

import image from "./images/download.png";
import image1 from "./images/images.jpeg";
import foot from "./images/img11.jpg";
import foot1 from "./images/img22.jpg";
import foot2 from "./images/img33.jpg";
import foot3 from "./images/img44.jpg";
import foot4 from"./images/logo.jpg";
import foot5 from "./images/download.jpeg";
import foot6 from "./images/app-store-badge.png";
import foot7 from "./images/google-play-badge.png";


const Layout=()=>{
    return(
        <>
       <div className="nav">           
             <p>Allow location access for local store menu and promos</p>
           <button>set Location</button>      
            </div>
            <div className="parent">
            <div className="child">
            <img src={image} alt="" height={70} width={120}/>
            <Link to ="menu"  style={{textDecoration: "none", color: "black"}}><b><p>Menu</p></b></Link>
           <Link to ="deals" style={{textDecoration: "none", color: "black"}}><b><p>Deals</p></b></Link>
           <Link to ="search" style={{textDecoration: "none", color: "black"}}><b><p>Search Order</p></b></Link>
        </div>
         <div className="child"> 
                <b><p>@</p></b>
             <b><p>sign in</p></b>  
               <b><p>Rs.0</p></b>
                 <img src={image1} alt="" height={50} width={50}/>
                  </div>
         </div>
         <div className="hero">
            <b><p>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</p></b>
            <Link to ="signin" style={{textDecoration: "none", color: "black"}}><button>Start Order</button>.</Link>
        </div>
         <Outlet/> 

         <div className="footer">
                <div className="veiw">
                    <b><h2>Exclusive Offers for you</h2></b>
                    <p>View All Deals---</p>
                </div>

        <div className="images">
                 <div className="img" align="center">
                        <div className="pic">
                            <img src={foot} alt="" height={250} width={300} />
                            <h2>FREE VEG ZINGER ...</h2>
                            <p align="center">Free Veg Zinger on a cart value of 499 or<br />
                                more.Sunday only</p>
                            <div className="btn">
                                <b><p>Veiw Detail</p></b>
                                <button class="btn1"><b>Apply Offer</b></button>
                            </div>
                        </div>
                </div>
                <div className="img" align="center">
                        <div className="pic">
                            <img src={foot1} alt="" height={250} width={300} />
                            <h2>FREE VEG ZINGER ...</h2>
                            <p align="center">Free Veg Zinger on a cart value of 499 or<br />
                                more.Sunday only</p>
                            <div className="btn">
                                <b><p>Veiw Detail</p></b>
                                <button class="btn1"><b>Apply Offer</b></button>
                            </div>
                        </div>
                </div>
                <div className="img" align="center">
                        <div className="pic">
                            <img src={foot2} alt="" height={250} width={300} />
                            <h2>FREE VEG ZINGER ...</h2>
                            <p align="center">Free Veg Zinger on a cart value of 499 or<br />
                                more.Sunday only</p>
                            <div className="btn">
                                <b><p>Veiw Detail</p></b>
                                <button class="btn1"><b>Apply Offer</b></button>
                            </div>
                         </div>
                </div>
                <div className="img" align="center">
                        <div className="pic">
                            <img src={foot3} alt="" height={250} width={300} />
                            <h2>FREE VEG ZINGER ...</h2>
                            <p align="center">Free Veg Zinger on a cart value of 499 or<br />
                                more.Sunday only</p>
                            <div className="btn">
                                <b><p>Veiw Detail</p></b>
                                <button class="btn1"><b>Apply Offer</b></button>
                            </div>
                        </div>
                </div>
         </div>
                <div className="summry">
                    <img src={foot4} alt="" height={200} width={100}/>
                    <ul type="none">
                        <li>KFC India</li>
                        <li>About KFC</li>
                        <li>KFC Care</li>
                        <li>Careers</li>
                        <li>Our Golden Past</li>
                        <li>Responsible Disclosure</li>
                     </ul>

                     <ul type="none">
                        <li>Legal</li>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Disclaimer</li>
                        <li>Caution Notice</li>
                        <li>Menu</li>
                     </ul>
                    <ul type="none">
                        <li>KFC Food</li>
                        <li>Menu</li>
                        <li>KOrder Lookup</li>
                        <li>Gift Card</li>
                        <li>Nutrition & Allergen</li>
                    </ul>

                    <ul type="none">
                        <li>Support</li>
                        <li>Get Help</li>
                        <li>Contact Us</li>
                        <li>GKFC Feedback</li>
                        <li>Privacy Policy</li>
                    </ul>
                   <p><img src={foot5} alt="" height={20} width={20}/><u>Find & KFC</u></p>
                   <img src={foot6} alt="" height={50} width={150}/>
                   <img src={foot7} alt="" height={50} width={150}/>

                </div>



 </div>
    </>
    )
}
export default Layout;


