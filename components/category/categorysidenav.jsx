import { useEffect, useState } from "react";
import { Link } from "react-router";

const CategorySideNav = () => {
    const [categoryList, setCategoryList] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
            .then(res => res.json())
            .then(res => (
                setCategoryList(res)
            ));
    }, []
    )



    return (
        <div className="pt-3 pe-1 sticky-top " style={{maxHeight:"85vh", overflow:"auto"}}>
            <h4>Categories :</h4>
        <ul className="list-group">
            {categoryList.map((c) => (<li className="list-group-item"><Link to={"/products?category=" + c} className="text-decoration-none text-dark">{c}</Link></li>))}
        </ul>
        </div>
    );
}

export default CategorySideNav;