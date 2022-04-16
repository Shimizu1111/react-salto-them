import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Dashbord from "./components/Content/dashbord/Dashbord";
import User from "./components/Content/User/User";
import SignIn from "./pages/Auth";

export default function RouterConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/users" element={<User />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/dashbord" element={ <Dashbord /> } />
      </Routes>
    </BrowserRouter>
  )
}