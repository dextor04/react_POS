import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import logo from "./images/file_review.png";

function InventoryModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img
        variant="primary"
        onClick={handleShow}
        src={logo}
        style={{
          height: "25px",
          paddingLeft: "20px",
          cursor: "pointer",
        }}
        alt="View"
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inventory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="s_no">
              <Form.Label>S.No</Form.Label>
              <Form.Control type="number" value={props.s_no} />
            </Form.Group>

            <Form.Group controlId="item_name_kk">
              <Form.Label>Item Name</Form.Label>
              <Form.Control type="text" value={props.item_name_kk} />
            </Form.Group>

            <Form.Group controlId="input_price">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" value={props.input_price} />
            </Form.Group>

            <Form.Group controlId="input_purchased_kk">
              <Form.Label>Purchased</Form.Label>
              <Form.Control type="number" value={props.input_purchased_kk} />
            </Form.Group>

            <Form.Group controlId="input_sold_kk">
              <Form.Label>Sold</Form.Label>
              <Form.Control type="number" value={props.input_sold_kk} />
            </Form.Group>

            <Form.Group controlId="input_instock">
              <Form.Label>In Stock</Form.Label>
              <Form.Control type="number" value={props.input_instock} />
            </Form.Group>

            <Form.Group controlId="input_type">
              <Form.Label>Type</Form.Label>
              <Form.Select value={props.input_type}>
                <Form.Control as="option" value="Option 1">
                  Drinks
                </Form.Control>
                <Form.Control as="option" value="Option 2">
                  Snacks
                </Form.Control>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="input_availability">
              <Form.Label>Availability</Form.Label>
              <Form.Select value={props.input_availability}>
                <Form.Control as="option" value="Option 1">
                  yes
                </Form.Control>
                <Form.Control as="option" value="Option 2">
                  no
                </Form.Control>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default InventoryModal;
