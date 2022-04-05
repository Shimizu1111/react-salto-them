import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import User from "./components/Content/User/User";
import SignIn from "./pages/Auth";

export default function RouterConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/users" element={<User />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}