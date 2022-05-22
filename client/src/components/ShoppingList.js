import React, { useEffect } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, getItems } from '../actions/itemActions'

const ShoppingList = () => {
    const items = useSelector(state => state.item.items)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getItems())
    }, [dispatch])

    const removeItem = (id) => {
        dispatch(deleteItem(id))
    }

  return (
    <Container>
        <ListGroup>
            {items.map(({ _id, name }) => (
                <ListGroupItem key={_id}>
                    <Button 
                        className='remove-btn' 
                        color='danger'
                        size='sm'
                        onClick={() => removeItem(_id)}
                    >
                        &times;
                    </Button>
                    {name}
                </ListGroupItem>
            ))}
        </ListGroup>
    </Container>
  )
}

export default ShoppingList