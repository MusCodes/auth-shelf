import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddItem from "../AddItem/AddItem";

function ShelfPage() {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.shelf);
  console.log("THIS IS ITEMS", items);
  
  useEffect(() => {
    dispatch({
      type: "ADD_SHELF"
    })
  }, []);

  return (
    <div className="container">
      <AddItem />
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {items.map((item, index) => (
        <li key={index}>
          <img src={item.image_url} />
          {item.description}
          {item.user_id}
          <button>Delete</button>
        </li>
      ))}
    </div>
  );
}

export default ShelfPage;
