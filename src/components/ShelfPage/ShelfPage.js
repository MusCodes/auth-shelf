import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddItem from "../AddItem/AddItem";
import "./ShelfPage.css";

function ShelfPage() {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.shelf);
  const userIdStore = useSelector((store) => store.user.id);
  console.log("THIS IS ITEMS", items);
  console.log("THIS IS USERIDSTORE!!!", userIdStore);
  const [deletedItem, setDeletedItem] = useState(false);

  useEffect(() => {
    dispatch({
      type: "ADD_SHELF",
    });
  }, [deletedItem]);

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_SHELF", payload: { id } });
    setDeletedItem(!deletedItem);
  };

  return (
    <div className="container">
      <AddItem />
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {items.map((item, index) => (
        <li className="shelf-list" key={index}>
          <img className="shelf-img" src={item.image_url} />
          {item.description}
          {userIdStore === item.user_id && (
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          )}
        </li>
      ))}
    </div>
  );
}

export default ShelfPage;
