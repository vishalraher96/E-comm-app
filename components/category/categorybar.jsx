import data from "../../data/data.json"

const CategoryBar = () => {
    return ( 
        <div className="contaner bg-light p-4">
            <div className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="flex-nowrap row overflow-scroll" style={{scrollbarWidth:"none"}}>
                              {data.categories.map(c=>(<div className="text-center" style={{width:"150px"}}>
                                <img className="d-block mx-auto" style={{width:"100px",height:"100px"}} src={c.thumbnail}/>
                                <h5>{c.name}</h5>
                            </div>))}

                        </div>
                    </div>
                </div>

            </div>

        </div>
     );
}
 
export default CategoryBar;