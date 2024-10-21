import  webs from "../images/webs.webp"

import  meddle from "../images/CAT99.jpg";
import  meddle1 from "../images/CAT213.jpg";
import  meddle2 from "../images/CAT158.jpg";
import  meddle3 from "../images/CAT86.jpg";

import  meddle6 from "../images/CAT170.jpg";

import  meddle8 from "../images/CAT228.jpg";
import  meddle9 from "../images/CAT287.jpg";
import  meddle10 from "../images/CAT289.jpg";

const Home=()=>{
    return(
        <>
      {/* <div className="hero">
            <b><p>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</p></b>
            <button>Start Order</button>
        </div> */}
        <img src={webs} alt=""/>
        <div className="middle">
            <h1>browse categories<hr/></h1>
        </div>

<div className="image">

        <div>
        <img src={meddle10} alt="" height={180} width={240}/>
        <h4>INTERNATIONAL BURGER FEST</h4>
       </div>

        <div>
        <img src={meddle9} alt=" "height={180} width={240}/>
        <h4>MATCH DAY COMBOS</h4>
        </div>

        <div>
        <img src={meddle2} alt="" height={180} width={240}/>
        <h4>BOX MEALS</h4>
      </div>

      <div>
        <img src={meddle8} alt="" height={180} width={240}/>
        <h4>VALUE LUNCH SPECIALS</h4>
      </div>
      
</div>


<div className="image">
    <div>
        <img src={meddle} alt="" height={180} width={240}/>
        <h4>BURGERS</h4>
    </div>

    <div>
        <img src={meddle1} alt="" height={180} width={240}/>
        <h4>RICE BOWLZ</h4>
    </div>

    <div>
        <img src={meddle3} alt="" height={180} width={240}/>
        <h4>CHICKEN BUCKETS</h4>
    </div>

    <div>
        <img src={meddle6} alt="" height={180} width={240}/>
        <h4>CHICKEN ROLLS</h4>
    </div>
</div>
 </>
    )
}
export default Home;