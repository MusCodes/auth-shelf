import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// import {useDispatch} from 'react-redux'
import { put } from "redux-saga/effects";

function ShelfPage() {
  const items = useSelector((store) => store.shelf);
  console.log("THIS IS ITEMS", items);

  // useEffect(() => {

  // })

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {items.map((item, index) => (
        <li key={index}>
          <img src={item.image_url} />
          {item.description}
          {item.user_id}
        </li>
      ))}
    </div>
  );
}

export default ShelfPage;
