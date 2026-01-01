import { Link } from "react-router";
import CategoryDropDown from "./category/categorydropdown";
import { useEffect, useRef, useState } from "react";
import data from "../data/data.json"
import SearchProductCard from "./searchproductcard";

const Navbar = () => {
    const SearchMenu = useRef(null)
    const [products, setproducts] = useState([])
    const [inputvalue, setinputvalue] = useState("")
    useEffect(() => {
        fetch('https://dummyjson.com/products/search?q='+inputvalue)
            .then(res => res.json())
            .then(res=>{
                setproducts(res.products)
            });
    }, [inputvalue])
    const HandleOnChange = (event) => {
        setinputvalue(event.target.value);

        if (event.target.value.length>0) {
            SearchMenu.current.className = "d-block"
        } else {
            SearchMenu.current.className = "d-none"
        }
    }
    return (<div className="container  align-items-center pt-2">

        <div className="row">
            <div className="col d-flex">
                {/* <CategoryDropDown></CategoryDropDown> */}
                <div className="col-10 position-relative">
                    <input type="text" onChange={HandleOnChange} placeholder="search products here" className="form-control" value={inputvalue} />
                    <div ref={SearchMenu} className="d-none" style={{ zIndex: "3", position: "absolute", width: "100%",maxHeight:"50vh",overflow:"scroll",overflowX:"hidden"}} >
                        {products.map((p)=><SearchProductCard product={p}/>)}
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Navbar;