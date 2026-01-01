import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';
import Cart from './pages/cart';
import BaseTemplate from './components/template/base';
import ProductDetail from './pages/productdetail';
import LoginPage from './pages/login';


const router = createBrowserRouter([
    {
        path:"/",
        element:<BaseTemplate/>,
        children:[
            {
                path:"",
                element:<Home/>,
            },
            {
            path:"cart",
            element:<Cart/>
            },
            {
            path:"products",
            element:<Products/>
            },
            {
               path:"detail",
            element:<ProductDetail/> 
            }
        ]},
      {
            path:"login",
            element:<LoginPage/>
      }
    
])

export default router;
