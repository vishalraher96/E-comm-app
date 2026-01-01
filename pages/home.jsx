import ProductSlider from "../components/productslider";
import BannerSlider from "../components/bannerslider";
import Navbar from "../components/navbar";
import CategoryBar from "../components/category/categorybar"
import CategorySideNav from "../components/category/categorysidenav";
import CategoryMegaMenu from "../components/category/categorymegamenu";
import SarchProduct from "../components/searchproductcard"

const Home = () => {
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <CategorySideNav />
                    </div>
                    <div className="col-9">
                        {/* <Navbar /> */}
                        {/* <SarchProduct /> */}
                        {/* <CategoryMegaMenu></CategoryMegaMenu> */}
                        {/* <CategoryBar /> */}
                        {/*<CategoryBar/>
                    <HeroBanerSlider/> */}
                        <BannerSlider />
                        <ProductSlider />


                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;