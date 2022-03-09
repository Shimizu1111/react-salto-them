import React from "react";
import "./style.scss";
export default function Body() {
  const columns = 12;
  const item = (
    <div class="item">
      <img src={'./images/card-image.png'} className="box-image" />
        <h3 className="title">Card Title</h3>
        <p className="context">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
    </div>
  );

  let items = [];
  for (let i = 0; i < columns; i++) {
    items.push(item);
  }
  console.log('helloooooooo')
  console.log(items);

  return (
    <div className="right-wrapper">
      <div className="bread-crumb">
        <div className="bread-crumb-inner">
          <img src={'./images/icon-wrapper-h.png'} className="icon-wrapper" />
          <a href= "https://www.yahoo.co.jp/" >Home</a>
          /
          <a href="https://www.yahoo.co.jp/">Users</a>
        </div>
      </div>
      <div className="items">
        {items}
      </div>
      <div className="pagination-wrapper">
        <p>Total 85 items</p>
        <ul class="pagination">
          <li><a href="#">«</a></li>
          <li><a href="#">1</a></li>
          <li><a>...</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li><a class="active" href="#">6</a></li>
          <li><a href="#">7</a></li>
          <li><a href="#">8</a></li>
          <li><a>...</a></li>
          <li><a href="#">20</a></li>
          <li><a href="#">»</a></li>
        </ul>
      </div>
    </div>
    
  );
}