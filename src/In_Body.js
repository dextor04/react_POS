import "./In_Body.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import editIcon from "./images/edit.png";
import deleteIcon from "./images/delete.png";
import preview from "./images/file_review.png";
// import plusIcon from "./images/plus_icon.png";
import { Link } from "react-router-dom";
import MyModal from "./Modal";

function In_body() {
  // ------------------------------------getting the content from the localstorage and display on the screen-----------
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    // Check if data is already stored in localStorage
    const storedData = localStorage.getItem("productData");
    if (storedData) {
      setPosts(JSON.parse(storedData));
    } else {
      // Fetch the data from the API
      axios.get(process.env.PUBLIC_URL + "/productData.json").then((res) => {
        setPosts(res.data);
        // Store the data in localStorage for future use
        localStorage.setItem("productData", JSON.stringify(res.data));
      });
    }
  }, []);
  // ------------------------------------------delete product and upda the item_no------------------------
  const Delete = (event) => {
    const trElement = event.target.parentNode.parentNode;
    const data = JSON.parse(localStorage.getItem("productData"));
    const indexes = Number(trElement.firstChild.innerHTML);
    const filteredData = data.filter((item) => item.item_no !== indexes);
    for (let i = 0; i < filteredData.length; i++) {
      filteredData[i].item_no = i + 1;
    }
    localStorage.setItem("productData", JSON.stringify(filteredData));
    setPosts(filteredData); // update the state with the filtered data
  };
  // --------------------------------------------preview option-------------
  const review = (event) => {
    const trElement = event.target.parentNode.parentNode;
    const data = JSON.parse(localStorage.getItem("productData"));
    const indexes = Number(trElement.firstChild.innerHTML);
    const filteredData = data.filter((item) => item.item_no === indexes);
    // <!-- Modal -->
    // <!-- view button -->
    console.log(filteredData);
  };
  return (
    <div>
      <div id="filter_option">
        {/* ... */}
        <label htmlFor="cars">Filter By: </label>
        <select name="date" id="dates">
          <option value="default">--selected--</option>
          <option value="Today">Today</option>
          <option value="Yesterday">Yesterday</option>
          <option value="This Week">This Week</option>
          <option value="Last Week">Last Week</option>
          <option value="This Month">This Month</option>
          <option value="Last Month">Last Month</option>
          <option value="Custom">Custom</option>
        </select>
        <label>From:</label>
        <input type="date"></input>
        <label>To: </label>
        <input type="date"></input>
      </div>
      <div
        style={{
          display: "inline-block",
          width: "-1px",
          paddingLeft: "85%",
        }}
      >
        <Link to={"/addButton"}>
          <button
            value="+ ADD Product"
            style={{
              padding: "7px",
              borderRadius: "3px",
              border: "1px solid black",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              backgroundColor: "lightgreen",
              cursor: "pointer",
            }}
          >
            <p>+ ADD product</p>
          </button>
        </Link>
      </div>
      <div>
        <table id="rows">
          <thead>
            <tr>
              {/* ... */}
              <td style={{ fontWeight: "bold", textAlign: "left" }}>S.No</td>
              <td style={{ fontWeight: "bold", textAlign: "left" }}>
                Item Name
              </td>
              <td style={{ fontWeight: "bold", textAlign: "left" }}>Price</td>
              <td style={{ fontWeight: "bold", textAlign: "left" }}>
                Purchased
              </td>
              <td style={{ fontWeight: "bold", textAlign: "left" }}>Sold</td>
              <td style={{ fontWeight: "bold", textAlign: "left" }}>
                In Stock
              </td>
              <td style={{ fontWeight: "bold", textAlign: "left" }}>Type</td>
              <td style={{ fontWeight: "bold", textAlign: "left" }}>
                Availability
              </td>
              <td style={{ fontWeight: "bold", textAlign: "left" }}>Action</td>
            </tr>
          </thead>
          <tbody>
            {posts &&
              posts.map((product) => (
                <tr key={product.item_no}>
                  <td style={{ textAlign: "left" }}>{product.item_no}</td>
                  <td style={{ textAlign: "left" }}>{product.item_name}</td>
                  <td style={{ textAlign: "left" }}>{product.price}</td>
                  <td style={{ textAlign: "left" }}>{product.purchased}</td>
                  <td style={{ textAlign: "left" }}>{product.sold}</td>
                  <td style={{ textAlign: "left" }}>{product.stock}</td>
                  <td style={{ textAlign: "left" }}>{product.type}</td>
                  <td style={{ textAlign: "left" }}>{product.availability}</td>
                  <td
                    style={{ textAlign: "left", width: "10%" }}
                    className="action"
                  >
                    <Link to={"/EditButton"}>
                      {" "}
                      <img
                        src={editIcon}
                        style={{ paddingLeft: "20px", cursor: "pointer" }}
                        alt="Edit"
                      />
                    </Link>
                    <img
                      src={deleteIcon}
                      style={{ paddingLeft: "20px", cursor: "pointer" }}
                      alt="Delete"
                      onClick={Delete}
                    />
                    <MyModal />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default In_body;
