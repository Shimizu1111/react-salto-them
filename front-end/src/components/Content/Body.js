import React from "react";
import "./style.scss";
import BreadCrumb from "./bread-crumb/bread-crumb";

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

  return (
    <div className="right-wrapper">
      <BreadCrumb />
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