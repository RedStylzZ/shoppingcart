import './styles/App.scss';
import React from "react";
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ChangeItem from "./pages/ChangeItem";
import NavBar from "./components/NavBar";
import homeController from "./controller/HomeController";

function App() {
    const hController = homeController()

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path={"/"} element={<Home controller={hController}/>}/>
                    <Route path={"/change/:uuid"} element={<ChangeItem controller={hController}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
