
import data from "../data/data.json"
import SearchProductCard from "../components/searchproductcard";
import Navbar from "../components/navbar";
import CategorySideNav from "../components/category/categorysidenav";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import ProductCard from "./productcard";

const ProductListing = () => {

    const [searchParams] = useSearchParams()
    const [products ,setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/'+ searchParams.get("category"))
        .then(res => res.json())
        .then(res => (
            setProducts(res.products)
        ));
    },[searchParams])

    return (
        <div>
            <div className="container">
                
                <div className="row">
                    <div className="col-2">
                        <CategorySideNav />
                    </div>
                    <div className="col-10">

                        {products.map((p) => <ProductCard product={p} />)}

                        {/* <div className="row">
                            <div className="col col-md-6 col-lg-4">
                                <div className="card p-4">
                                    <img src={products.images} alt="" />
                                    <h4>{products.title}</h4>
                                    <p className="d-flex justify-content-between align-items-center">
                                        <span className="fs-4">$ {products.price}</span>
                                        <span className=" badge bg-warning fs-6">{products.discountPercentage} %</span>
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductListing;