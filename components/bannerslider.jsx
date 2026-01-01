const BannerSlider = () => {
    return ( 
        <div className="container bg-warning " style={{height:"75vh",overflow:"hidden",position:"relative"}}>
            <div className="carousel slide" id="banner-slider" data-bs-ride="carousel">
                <div className="carousel-indicators position-absolute bottom-0"  style={{top:"72%"}}>
                    <button className="active" data-bs-target="#banner-slider" data-bs-slide-to="0"  ></button>
                    <button data-bs-target="#banner-slider" data-bs-slide-to="1"></button>
                </div>
                <div className="carousel-inner ">
                    
                    
                    <div className="carousel-item active">
                        <img className="w-100"   src="https://images.pexels.com/photos/6801188/pexels-photo-6801188.jpeg?cs=srgb&dl=pexels-artempodrez-6801188.jpg&fm=jpg"/>
                        <div className="carousel-caption "  style={{bottom:"25%"}}>
                           <h3>Click me</h3>     
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src="https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww"/>
                        <div className="carousel-caption ">
                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BannerSlider;