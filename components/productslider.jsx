import data from "../data/data.json"
import BannerProductCard from "./bannerproductcard";

const ProductSlider = () => {

     const noOfItems  = Math.ceil(data.products.length/4);
     var carouselItem = []
     for(var i=0;i<noOfItems;i++){
        var classList = "carousel-item";
        if(i==0){
            classList = "carousel-item active";
        }
            carouselItem.push( <div className={classList}>
            <div className="row" >
                {data.products.slice(4*i,4+(4*i)).map(p=><BannerProductCard product={p}/>)}
            </div>
        </div> )
     }
     
    return ( 
        <div className="container bg-info p-4" >
           <div className="carousel slide" id="product-slider">
           <div className="carousel-inner">
                {carouselItem.map(item=>item)}
                </div>
           </div>
        </div>
     );
}
 
export default ProductSlider;