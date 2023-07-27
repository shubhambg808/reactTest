import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [itemId, setId] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((res) => {
        setData(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  return (
    <>
      <div>
        <ul style={{ listStyleType: "none" }}>
          {data.map((ele) => (
            <li
              key={ele.id}
              onClick={() => setId(ele.id)}
              style={{ color: ele.id == itemId ? "yellow" : "none" }}
            >
              {ele.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
