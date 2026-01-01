import { Children } from "react";
import { Outlet } from "react-router";
import Footer from "../footer";
import Titlebar from "../titlebar";

const BaseTemplate = (props ) => {
    return ( 
        <>
        <Titlebar/>
          <div style={{minHeight:"80vh"}}>
            <Outlet/>
          </div>
        <Footer/>
        
        </>
     );
}
 
export default BaseTemplate;