import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import Titlebar from "../components/titlebar";
import ProductSlider from "../components/productslider";


const ProductDetail = () => {
    const [searchparams] = useSearchParams()
    const [ProductDetail, setProductDetail] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products/' + searchparams.get("productid"))
            .then(res => res.json())
            .then(res =>
                setProductDetail(res)
            );
    }, [searchparams])
    return (<>
        <Titlebar />    
        <div className="container ">
            <div className="row align-items-center ">

                <div className="col">
                    <div className="position-sticky">
                        <img className="img-fluid w-75" src={ProductDetail.thumbnail} alt="" />
                        {/* <ProductSlider product={ProductDetail}/> */}
                        <div className="d-flex ms-5">
                            <button className="btn btn-warning  shadow w-50">Add To Cart</button>
                            <button className="btn btn-success ms-2 shadow w-50">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="col " style={{maxHeight:"80vh",overflowY:"auto"}}>
                    <h4>{ProductDetail.title}</h4>
                    <div className="">
                        <span>{ProductDetail.description}</span>
                        <p>{ProductDetail?.tags?.map(t => (<span className="me-2">#{t}</span>))}</p>
                    </div>
                    <p className="fw-bold">{ProductDetail.brand}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <h3>${Math.round(ProductDetail.price - (ProductDetail.price * ProductDetail.discountPercentage / 100))}</h3>
                        <div className="badge bg-success p-2">
                            {ProductDetail.rating}⭐
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="text-muted text-decoration-line-through mt-2">${ProductDetail.price}</p>
                        <h6 className="text-success ms-2">{ProductDetail.discountPercentage}%off</h6>
                    </div>
                    <div className="d-flex ">
                        <p>It comes With <span className="fw-bold">{ProductDetail.warrantyInformation}</span></p>
                        <p className="ms-4"><span>{ProductDetail.shippingInformation}</span></p>
                    </div>
                    <div>
                        *Minimum order Quantity <span className=""> {ProductDetail.minimumOrderQuantity}</span>
                    </div>

                    <hr />
                    <div>
                        <p>{ProductDetail.returnPolicy}</p>
                    </div>
                    <div className="col d-flex align-items-center">
                    <h3>Ratings And Reviews</h3>
                    <p className="badge bg-success p-2 ms-4 mt-1 ">{ProductDetail.rating}⭐</p>
                </div>
                <div className="mt-5">
                    {ProductDetail?.reviews?.map(r => (
                        <div>
                            <div className="d-flex justify-content-between">
                                <strong>{r.comment}</strong>
                                <p className="badge bg-success">{r.rating}⭐</p>
                            </div>
                            <p>{r.reviewerName}🧑</p>
                            <p className="text-muted">{r.date}</p>
                        </div>))}
                </div>
                </div>

            </div>
            <hr />
            <div className="row ">
                
            </div>
        </div>

    </>
    );
}

export default ProductDetail;