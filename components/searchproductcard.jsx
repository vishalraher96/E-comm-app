
const SearchProductCard = ({product}) => {
    return (
        <>
            <div  className="card ">
                <div className="d-flex align-items-center my-2">
                    <img src={product.thumbnail} className="img-fluid object-fit-cover " alt=""style={{ width: "50px", height: "50px" }}/>
                    <h4 className="ms-2">{product.title}</h4>
                </div>
            </div>
            
        </>
    )
        ;
}

export default SearchProductCard;