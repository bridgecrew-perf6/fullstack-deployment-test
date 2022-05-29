import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { addItem } from "../actions/itemActions";

const ItemModal = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");

  const toggle = () => {
    setModal(!modal);
  };

  const submit = (e) => {
    e.preventDefault();

    const newItem = {
      name,
    };

    dispatch(addItem(newItem));

    toggle();
  };

  return (
    <div>
      {isAuthenticated ? (
        <Button
          className="mb-5 mx-auto"
          style={{ display: "block", width: "fit-content" }}
          onClick={toggle}
        >
          Add Item
        </Button>
      ) : (
        <h4 className="mb-3 ms-4">Please log in to manage items</h4>
      )}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Add to Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={submit}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                id="item"
                placeholder="Add Shopping Item"
                onChange={(e) => setName(e.target.value)}
              />
              <Button block style={{ marginTop: "1rem" }}>
                {" "}
                Add Item{" "}
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ItemModal;
