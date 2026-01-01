import { useEffect, useState } from "react";
import Counter from "./counter";

const CartProductCard = (props) => {
    const [subTotal,setSubTotal] = useState(0);
    const[count,setCount]  = useState(0);

    useEffect(()=>{
        setSubTotal(count*props.product.mrp)
    },[count])

    
    return ( <div className="card p-4 my-2">
    <div className="row">
      <div className="col">
        <img src="" style={{width:"100px",height:"100px"}}/>
      </div>
      <div className="col">
        <h4>{props.product.name}</h4>
        <p>{props.product.description}</p>
        <button className="btn btn-outline-danger  btn-sm">Remove</button>
      </div>
      <div className="col">
        <Counter count={count} setCount={setCount}/>
      </div>
      <div className="col">
        <h3 ref={props.ref} id={subTotal}>{subTotal}</h3>
      </div>
    </div>
  </div> );
}
 
export default CartProductCard;