import data from "../../data/data.json"

const CategoryDropDown = () => {
    return ( 
        <div className="dropdown">
            <button className="btn dropdown-toggle" data-bs-toggle="dropdown">Categories</button>
            <ul className="dropdown-menu">
                {data.categories.map(c=>(<li><a className="dropdown-item">{c.name}</a></li>))}
            </ul>
        </div>

     );
}
 
export default CategoryDropDown;