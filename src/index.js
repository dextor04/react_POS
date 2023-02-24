import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainApp from "./App";
// import Inventory from "./Inventory";
import AddButton from "./addButton";
import EditButton from "./editButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainApp />} />

        <Route
          index
          path="/addButton"
          element={<AddButton />}
          className="add"
        />

        {/* <Route path="/Inventory" element={<Inventory />} /> */}

        <Route path="/editButton" element={<EditButton />} className="edit" />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);
