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
  // ----------------------------------------------
  const [selectedValue, setSelectedValue] = useState("default");
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("productData");
    if (data) {
      setProductData(JSON.parse(data));
    }
  }, []);
  // filter the data by using the filter option
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (value === "Today") {
      const date = new Date();
      let dateString =
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
      console.log(dateString);
      const filteredData = productData.filter((item) => {
        return item.created_date === dateString;
      });
      console.log(filteredData);
    } else if (value === "Yesterday") {
      console.log("yesterday is selected");
      let date = new Date();
      date.setDate(date.getDate() - 1);
      let yesterday =
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
      console.log(yesterday);
      const filteredData = productData.filter((item) => {
        return item.created_date === yesterday;
      });
      console.log(filteredData);
    } else if (value === "This Week") {
      let date = new Date();
      let thisWeekStart = new Date(
        date.setDate(date.getDate() - date.getDay() + 1)
      );
      let thisWeekEnd = new Date(
        date.setDate(date.getDate() - date.getDay() + 7)
      );
      let thisWeek = [];
      for (
        let i = thisWeekStart;
        i <= thisWeekEnd;
        i.setDate(i.getDate() + 1)
      ) {
        thisWeek.push(
          i.getDate() + "-" + (i.getMonth() + 1) + "-" + i.getFullYear()
        );
      }
      console.log(thisWeek);
      const filteredData = productData.filter((item) => {
        return thisWeek.includes(item.created_date);
      });
      console.log(filteredData);
    } else if (value === "Last Week") {
      console.log("Last Week is selected");
      let lastweekdate = new Date();
      let lastWeekStart = new Date(
        lastweekdate.setDate(lastweekdate.getDate() - lastweekdate.getDay() - 6)
      );

      let lastdate = new Date();
      let lastWeekEnd = new Date(
        lastdate.setDate(lastdate.getDate() - lastdate.getDay())
      );

      let lastWeek = [];
      let start =
        lastWeekStart.getDate() +
        "-" +
        (lastWeekStart.getMonth() + 1) +
        "-" +
        lastWeekStart.getFullYear();
      let end =
        lastWeekEnd.getDate() +
        "-" +
        (lastWeekEnd.getMonth() + 1) +
        "-" +
        lastWeekEnd.getFullYear();

      for (
        let i = lastWeekStart;
        i <= lastWeekEnd;
        i.setDate(i.getDate() + 1)
      ) {
        lastWeek.push(
          i.getDate() + "-" + (i.getMonth() + 1) + "-" + i.getFullYear()
        );
      }
      console.log(lastWeek);
      const filteredData = productData.filter((item) => {
        return lastWeek.includes(item.created_date);
      });
      console.log(filteredData);
    } else if (value === "This Month") {
      console.log("This month is selected");
      let date = new Date();
      let thisMonthStart = new Date(date.getFullYear(), date.getMonth(), 1);
      let thisMonthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);

      let thisMonth = [];

      for (
        let i = thisMonthStart;
        i <= thisMonthEnd;
        i.setDate(i.getDate() + 1)
      ) {
        thisMonth.push(
          i.getDate() + "-" + (i.getMonth() + 1) + "-" + i.getFullYear()
        );
      }
      console.log(thisMonth);
      const filteredData = productData.filter((item) => {
        return thisMonth.includes(item.created_date);
      });
      console.log(filteredData);
    } else if (value === "Last Month") {
      console.log("last month is selected");
      let date = new Date();
      let lastMonthStart = new Date(date.getFullYear(), date.getMonth() - 1, 1);
      let lastMonthEnd = new Date(date.getFullYear(), date.getMonth(), 0);

      let lastMonth = [];

      for (
        let i = lastMonthStart;
        i <= lastMonthEnd;
        i.setDate(i.getDate() + 1)
      ) {
        lastMonth.push(
          i.getDate() + "-" + (i.getMonth() + 1) + "-" + i.getFullYear()
        );
      }
      console.log(lastMonth);
      const filteredData = productData.filter((item) => {
        return lastMonth.includes(item.created_date);
      });
      console.log(filteredData);
    }
  };

  const [fromDate, setFromDate] = useState("");
  let from_input = "";
  const handleFromDateChange = (event) => {
    console.log("fromdate");
    const date = new Date(event.target.value);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month starts from 0, so adding 1 to get the correct month number
    const year = date.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    console.log(formattedDate); // Outputs: "2-4-2022"
    setFromDate(formattedDate);
    from_input = formattedDate;
  };
  let to_input = "";
  const handleToDateChange = (event) => {
    console.log("todate");
    const date = new Date(event.target.value);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month starts from 0, so adding 1 to get the correct month number
    const year = date.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    console.log(formattedDate);
    to_input = formattedDate;
    const starting_date = fromDate;
    const ending_date = to_input;
    // getting the from and to date in the  format of dd-mm-yyyy
    console.log(starting_date, ending_date);
    // getting the dates between the start and end
    const dates = [];

    // Convert starting_date and ending_date to Date objects
    const start_date_obj = new Date(
      starting_date.split("-").reverse().join("-")
    );
    const end_date_obj = new Date(ending_date.split("-").reverse().join("-"));

    // Loop through dates from start_date_obj to end_date_obj and add each date to dates array
    for (
      let date = start_date_obj;
      date <= end_date_obj;
      date.setDate(date.getDate() + 1)
    ) {
      const formattedDate = `${date.getDate()}-${
        date.getMonth() + 1
      }-${date.getFullYear()}`;
      dates.push(formattedDate);
    }

    console.log(dates);
    const filteredData = productData.filter((item) => {
      return dates.includes(item.created_date);
    });
    console.log(filteredData);
  };

  const isCustomSelected = selectedValue === "Custom";
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

    // Show a confirmation prompt message
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (confirmDelete) {
      const filteredData = data.filter((item) => item.item_no !== indexes);
      for (let i = 0; i < filteredData.length; i++) {
        filteredData[i].item_no = i + 1;
      }
      localStorage.setItem("productData", JSON.stringify(filteredData));
      setPosts(filteredData); // update the state with the filtered data
    }
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
    // -------------------------------------
  };
  return (
    <div>
      <div id="filter_option">
        {/* ... */}
        <label htmlFor="cars">Filter By: </label>
        <select name="date" id="dates" onChange={handleSelectChange}>
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
        <input
          type="date"
          id="from"
          onChange={handleFromDateChange}
          disabled={!isCustomSelected}
        ></input>
        <label>To: </label>
        <input
          type="date"
          id="to"
          onChange={handleToDateChange}
          disabled={!isCustomSelected}
        ></input>
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
