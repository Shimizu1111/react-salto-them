import React, { useEffect, useState } from "react";
import "./style.scss"
import Header from "../../Header/Header";
import Sidebar from "../../Sidebar/Sidebar";
import Body from "../Body";
import Footer from "../../Footer/Footer";
import BreadCrumb from "../bread-crumb/bread-crumb";
import Pagination from "../Pagination/Pagination";
import { fetchAsGet } from "../../../services/api";
import { API } from "../../../configs/constant";
import MuiPagination from "@mui/material/Pagination";
import { withStyles } from "@mui/styles";
import { useSelector, useDispatch } from 'react-redux'


export default function User () {
  // reduxでtokenの呼び出し
  const signinToken = useSelector((state) => state.signin.token);

  //ページ番号
  const [page, setPage] = useState(1)

  const Pagination = withStyles({
    root: {
      display: 'inline-block',  //中央寄せのためインラインブロックに変更
    },
  })(MuiPagination);

  const [users, setData] = useState([]);
  // const [page, setPage] = useState(1);

    console.log(process.env);
    useEffect(() => {
      async function fetchData() {
        const url = `${API.USER.GET}?page=${page}`;
        console.log("urlの直後");
        console.log(url);
        const res = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${signinToken}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        
  
        const users = await res.json();
        setData(users.data);
      }
  
      fetchData();
    }, [page]);
    

  return (
    <>
      <Header />
      <div className='container'>
        <Sidebar />
        <div className="right-wrapper">
          <BreadCrumb />
          <div className="wrapper">
            <table>
              <tbody>
                <tr>
                  <th class="checkbox-Area">
                    <input type="checkbox" name="scales" />
                  </th>
                  <th class="title_Area">Title</th>
                  <th class="username_Area">UserName</th>
                  <th class="email_Area">Email</th>
                  <th class="status_Area">Status</th>
                  <th>Actions</th>
                </tr>
                {users.map((user) => {
                  return (
                    <tr key={user}>
                      <td class="first_Area">
                        <input type="checkbox" checked={user.checkbox} name="scales" />
                      </td>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.emali}</td>
                      <td>{user.status}</td>
                      <td>
                        <a href="#">Publish</a>
                        <a href="#">Edit</a>
                        <a href="#">Delete</a>
                      </td>
                    </tr>
                    
                  );
                })}
                
                {console.log("helloo")}
                {console.log(users)}
                {console.log(page)}
              </tbody>
            </table>
            <div style={{textAlign: "center"}}>
              <Pagination 
                count={10}          //総ページ数
                color="primary"     //ページネーションの色
                onChange={(e, page) =>setPage(page)}  //変更されたときに走る関数。第2引数にページ番号が入る
                page={page}         //現在のページ番号
                />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}