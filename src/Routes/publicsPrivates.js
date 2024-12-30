import React from "react";
import { Route, Routes} from 'react-router-dom';
import LoginPage from "../pages/loginPage";
import PrivateRoute from "../components/privatesRoutes";
import HomePage from "../pages/homePage";
import AddProductPage from "../pages/addProductPage";
import ProductListPage from "../pages/productListPage";
import AddUserPage from "../pages/AddUserPage";
import UserListPage from "../pages/UserlistPage";
import OrderListPage from "../pages/listOrdersPage";


const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/login" element= {<LoginPage/>} />
            <Route path="/" element= {<PrivateRoute element={<HomePage/>} />}/>
            <Route path="/add-product" element= {<PrivateRoute element={<AddProductPage/>} />}/>
            <Route path="/list-product" element= {<PrivateRoute element={<ProductListPage/>} />}/>
            <Route path="/add-user" element= {<PrivateRoute element={<AddUserPage/>} />}/>
            <Route path="/list-user" element= {<PrivateRoute element={<UserListPage/>} />}/>
            <Route path="/list-order" element= {<PrivateRoute element={<OrderListPage/>} />}/>
        </Routes>
    );
}

export default AppRoutes;