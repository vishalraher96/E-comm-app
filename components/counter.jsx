const Counter = () => {
    return ( 
        <div className="d-flex mx-2" style={{minWidth:"25%"}}>
            <button className="btn btn-dark">-</button>
            <input type="text" className="form-control" />
            <button className="btn btn-dark">+</button>
        </div>
     );
}
 
export default Counter;