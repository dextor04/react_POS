import React, { useState } from "react";
import "./addButton.css";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// hello kishore
function AddButton() {
  let date = new Date();
  let dateString =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  const [formData, setFormData] = useState({
    item_no: "",
    item_name: "",
    price: "",
    img: "",
    created_date: dateString,
    purchased: "",
    sold: "",
    stock: "",
    type: "drinks",
    availability: "yes",
  });
  const onChangeHandler = (event) => {
    // console.log(event);
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };
  const onSubmitHandler = (event) => {
    // event.preventDefault();
    const existingData = JSON.parse(localStorage.getItem("productData")) || [];
    const lastItemNo =
      existingData.length > 0
        ? existingData[existingData.length - 1].item_no
        : 0;
    const updatedFormData = {
      ...formData,
      item_no: Number(lastItemNo) + 1,
      price: Number(formData.price),
      purchased: Number(formData.purchased),
      sold: Number(formData.sold),
      stock: Number(formData.stock),
    };
    const updatedData = [...existingData, updatedFormData];
    localStorage.setItem("productData", JSON.stringify(updatedData));
    console.log(updatedData);
  };

  return (
    <div style={{ height: "100vh" }}>
      <div style={{ position: "relative" }}>
        {/* Elements inside the div */}
        <div>
          <div className="heading">
            <p>Add Item</p>
          </div>
          <div className="headingBody">
            <form>
              <table>
                <tbody>
                  <tr>
                    <td className="item_name">Item Name</td>
                    <td>
                      <input
                        type="text"
                        name="item_name"
                        onChange={onChangeHandler}
                      ></input>
                    </td>
                    <td className="price">Price</td>
                    <td>
                      <input
                        type="number"
                        name="price"
                        onChange={onChangeHandler}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="purchased">Purchased</td>
                    <td>
                      <input
                        type="number"
                        name="purchased"
                        onChange={onChangeHandler}
                      />
                    </td>
                    <td className="sold">Sold</td>
                    <td>
                      <input
                        type="number"
                        name="sold"
                        onChange={onChangeHandler}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="in_stock">In Stock</td>
                    <td>
                      <input
                        type="number"
                        name="stock"
                        onChange={onChangeHandler}
                      />
                    </td>
                    <td className="type">Type</td>
                    <td>
                      <select
                        id="type"
                        className="input"
                        name="type"
                        onChange={onChangeHandler}
                        style={{ width: "260px" }}
                      >
                        <option value="drinks">drinks</option>
                        <option value="snacks">snacks</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="availability"> Availability</td>
                    <td>
                      <select
                        name="availability"
                        id="availability"
                        className="input"
                        onChange={onChangeHandler}
                        style={{ width: "260px" }}
                      >
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                      </select>
                    </td>
                    <td></td>
                    <td id="buttons">
                      <Link to={"/"}>
                        {" "}
                        <input
                          type={"submit"}
                          value="Add"
                          className="add"
                          onClick={onSubmitHandler}
                        ></input>
                      </Link>
                      <Link to={"/"}>
                        <input
                          type={"button"}
                          value="Cancel"
                          className="cancel"
                        ></input>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddButton;
