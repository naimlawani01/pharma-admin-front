import React from "react";
import { Route, Routes} from 'react-router-dom';
import LoginPage from "../pages/loginPage";
import PrivateRoute from "../components/privatesRoutes";
import HomePage from "../pages/homePage";


const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/login" element= {<LoginPage/>} />
            <Route path="/" element= {<PrivateRoute element={<HomePage/>} />}/>
        </Routes>
    );
}

export default AppRoutes;