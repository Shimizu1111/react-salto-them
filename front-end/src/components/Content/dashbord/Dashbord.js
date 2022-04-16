import { DeleteOutline, SendOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Sidebar from "../../Sidebar/Sidebar";
import BreadCrumb from "../bread-crumb/bread-crumb";
import { AddCircleOutlined } from "@mui/icons-material";
import { RemoveCircleRounded } from "@mui/icons-material";
import { useDispatch } from "react-redux";

export default function Dashbord() {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  }

  const countDown = () => {
    setCount(count - 1);
  }

  const [hidden, setHidden] = useState(false);
  const dispatch = useDispatch();
  
  const iconHidden = () => {
    console.log("jljlj");
    if(hidden == false) {
      setHidden(true);
      dispatch({type:"setIcon/setIcon"});
    } else {
      setHidden(false);
      dispatch({type:"setIcon/removeIcon"});
    }
    console.log(hidden);
  }

  return(
    <>
      <Header />
      <div className='container'>
        <Sidebar />
        <div className="right-wrapper">
          <BreadCrumb />
          <div className="wrapper">
            <div>
            <Button variant="contained" color="primary" endIcon={<RemoveCircleRounded />} onClick={countDown} >DECREMENT</Button>
            <Button variant="contained" color="secondary" style={{padding: 5, borderRadius: 30,}} >Count: {count}</Button>
            <Button variant="outlined" color="primary" startIcon={<AddCircleOutlined /> } onClick={countUp}>INCREMENT</Button>
            </div>
            <div>
            <Button variant="outlined" color="primary" startIcon={<AddCircleOutlined />} onClick={iconHidden}>HIDE ICON</Button>
            </div>
            <div style={{textAlign: "center"}}>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}