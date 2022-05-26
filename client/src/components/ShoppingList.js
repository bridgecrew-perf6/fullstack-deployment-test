import React, { useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getItems } from "../actions/itemActions";

const ShoppingList = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const items = useSelector((state) => state.item.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const removeItem = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <Container>
      <ListGroup>
        {items.map(({ _id, name }) => (
          <ListGroupItem key={_id}>
            {isAuthenticated ? (
              <Button
                className="remove-btn"
                color="danger"
                size="sm"
                onClick={() => removeItem(_id)}
              >
                &times;
              </Button>
            ) : null}
            {name}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ShoppingList;