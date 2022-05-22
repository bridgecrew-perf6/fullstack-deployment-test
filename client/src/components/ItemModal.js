import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'
import { addItem } from '../actions/itemActions'

const ItemModal = () => {
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const [name, setName] = useState('')

    const toggle = () => {
        setModal(!modal)
    }

    const submit = e => {
        e.preventDefault()

        const newItem = {
            name
        }

        dispatch(addItem(newItem))

        toggle()
    }


  return (
      <div>
          <Button onClick={toggle}>Add Item</Button>
          <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader>Add to Shopping List</ModalHeader>
              <ModalBody>
                  <Form onSubmit={submit}>
                      <FormGroup>
                          <Label for='item'>Item</Label>
                          <Input type='text' id='item' placeholder='Add Shopping Item' onChange={e => setName(e.target.value)}/>
                          <Button>Add Item</Button>
                      </FormGroup>
                  </Form>
              </ModalBody>
          </Modal>
      </div>
  )
}

export default ItemModal