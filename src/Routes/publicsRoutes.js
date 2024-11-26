import React from "react";
import { Route, Routes} from 'react-router-dom';
import LoginPage from "../pages/loginPage";


const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/login" element= {<LoginPage/>} />
        </Routes>
    );
}

export default AppRoutes;