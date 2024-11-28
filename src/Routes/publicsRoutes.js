import React from "react";
import { Route, Routes} from 'react-router-dom';
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";


const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/login" element= {<LoginPage/>} />
            <Route path= "/home-page" element= {<HomePage/>} />
        </Routes>
    );
}

export default AppRoutes;