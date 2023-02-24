import React from "react";
import "./editButton.css";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function editButton() {
  return (
    <div>
      <div className="heading">
        <p>Edit Item</p>
      </div>
      <div className="headingBody">
        <form>
          <table>
            <tbody>
              <tr>
                <td className="item_name">Item Name</td>
                <td>
                  <input type="text"></input>
                </td>
                <td className="price">Price</td>
                <td>
                  <input type="number" />
                </td>
              </tr>
              <tr>
                <td className="purchased">Purchased</td>
                <td>
                  <input type="number" />
                </td>
                <td className="sold">Sold</td>
                <td>
                  <input type="number" />
                </td>
              </tr>
              <tr>
                <td className="in_stock">In Stock</td>
                <td>
                  <input type="number" />
                </td>
                <td className="type">Type</td>
                <td>
                  <select
                    name="type"
                    id="type"
                    className="input"
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
                      type={"button"}
                      value="Update"
                      className="add"
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
  );
}

export default editButton;
