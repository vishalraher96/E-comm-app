import { Link } from "react-router";

const ProductCard = (props) => {
    return (<>
        <Link to={'/detail?productid='+props.product.id}  className="text-decoration-none text-black">
            <div className=" row py-5">
                <div className="col my-auto">
                    <img className="img-fluid" src={props.product.thumbnail} alt="" />
                </div>
                <div className="col-7">
                    <h5 className="overflow-hidden" style={{ height: "50px" }}>{props.product.title}</h5>
                    <ul className="fs-6 text-muted">
                        {
                            props.product.tags.map(h => (<li >{h}</li>))
                        }
                    </ul>
                    <p className="badge bg-success">{props.product.rating}⭐</p>
                </div>
                <div className="col-2 ">
                    <h3>₹{Math.round(props.product.price - (props.product.price * props.product.discountPercentage / 100))}</h3>
                    <div className="d-flex align-items-center  ">
                        <p className="text-muted text-decoration-line-through mt-2">₹{props.product.price}</p>
                        <h6 className="text-success ms-2">{props.product.discountPercentage}%off</h6>
                    </div>

                </div>
            </div>
        </Link>
    </>
    );
}

export default ProductCard;