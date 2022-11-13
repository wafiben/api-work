import React, { useEffect, useState } from "react";
import axios from "axios";

function List() {
  const [state, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {state.length === 0 ? (
        <h1>loading...</h1>
      ) : (
        state.map((elt) => <h1 key={elt.id}>{elt.title}</h1>)
      )}
    </div>
  );
}

export default List;
