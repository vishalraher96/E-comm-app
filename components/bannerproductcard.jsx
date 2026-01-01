const BannerProductCard = (props) => {
    return ( 

      <div className="col-3">
        <div className="card py-3">
            <img className="mx-auto d-block" style={{width:"200px",height:"300px"}}  src={props.product.image_url} />
            <div className="card-body">
                  <h4 className="text-center">{props.product.name}</h4>
            </div>
        </div>
      </div>  
     );
}
 
export default BannerProductCard;