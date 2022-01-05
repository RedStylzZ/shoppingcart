import './styles/App.scss';
import React from "react";
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ChangeItem from "./pages/ChangeItem";
import NavBar from "./components/NavBar";
import HomeController from "./controller/HomeController";

function App() {
    const hController = HomeController()

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path={"/"} element={<Home controller={hController}/>}/>
                    <Route path={"/change/:name"} element={<ChangeItem controller={hController}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
