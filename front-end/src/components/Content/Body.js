import React from "react";
import "./style.css";
export default function Body() {
  const columns = 12;
  const item = (
    <div class="item">
      <img src={'./images/card-image.png'} class="box-image" />
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
    <div class="items">
      {items}
    </div>
  );
}