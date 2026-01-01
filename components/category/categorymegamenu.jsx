import { useRef, useState } from "react";
import data from "../../data/data.json"

const CategoryMegaMenu = () => {

    const categoryContainer = useRef(null);
    const subCategoryContainer = useRef(null);
    const [currentCategoryIndex,setCurrentCategoryIndex] = useState(1)
    const [subCategories,setSubCategories] = useState([])
    const handleCategoryBtnClick = (event)=>{
            if(categoryContainer.current.className == "d-none"){
            categoryContainer.current.className = "d-block"
            }else{
                categoryContainer.current.className = "d-none"
            }
    }

    const handleCategoryMouseOver = (event)=>{
        var id = event.target.id
        setSubCategories(data.categories[0].subCategories)
        subCategoryContainer.current.className= subCategoryContainer.current.className.replace("d-none","d-block")
    }

    return ( 
        <div className="position-relative">
            <button className="btn border" onMouseEnter={handleCategoryBtnClick} >Categories</button>
            <div onMouseLeave={handleCategoryBtnClick} ref={categoryContainer} className="d-none" style={{position:"absolute",zIndex:3,width:"70%"}}>
               <div className="row">
                    <div className="col-6">
                         <ul className="list-group">
                            {data.categories.map((c,i)=>( <li className="list-group-item" id={i} onMouseOver={handleCategoryMouseOver}><a>{c.name}</a></li>))}
                        </ul>
                    </div>
                    <div ref={subCategoryContainer} className="col d-none">
                        <ul className="list-group">
                            {subCategories.map(c=>( <li className="list-group-item"><a>{c.name}</a></li>))}
                        </ul>
                    </div>
               </div>
            </div>
        </div>
     );
}
 
export default CategoryMegaMenu;