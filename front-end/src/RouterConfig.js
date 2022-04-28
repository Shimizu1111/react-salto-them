import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Dashbord from "./components/Content/dashbord/Dashbord";
import User from "./components/Content/User/User";
import SignIn from "./pages/Auth";

export default function RouterConfig() {
  const isAuthenticated = useAuth()
  function useAuth() {
    const signinToken = localStorage.getItem("signinToken");
    if (signinToken) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated
          ?
            <>
              <Route index element={<App />} />
              <Route path="/users" element={<User />} />
              <Route path="/dashbord" element={ <Dashbord /> } />
              <Route path="/login" element={ <App /> } />
            </>
          : 
          <>
            <Route index element={<SignIn />} />
            <Route path="/users" element={<SignIn />} />
            <Route path="/dashbord" element={ <SignIn /> } />
            <Route path="/login" element={<SignIn />} />
          </>
        }
      </Routes>
    </BrowserRouter>
  )
}