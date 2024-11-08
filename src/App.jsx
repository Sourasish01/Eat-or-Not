import React from "react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import "./App.css"

function App(){
  return (
    <div className="appContainer">
      <Navbar /> {/*Navbar component is above Routes....this means we can see the Navbar component in which ever page we vist.....therefore we put it above Routes */}
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/create' element={<CreatePage />} />
			</Routes>
    </div>
  )
}
export default App;
