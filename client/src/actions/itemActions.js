import axios from 'axios'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "../actions/types";

const serverURL = 'https://fullstack-deployment-test-serv.herokuapp.com/api/items'

export const getItems = () => dispatch => {
  dispatch(setItemsLoading())
  axios.get(serverURL).then(res => 
    dispatch({ 
        type: GET_ITEMS, 
        payload: res.data 
    }))
};

export const addItem = item => dispatch => {
    axios.post(serverURL, item).then(res => dispatch({
        type: ADD_ITEM,
        payload: res.data
    }))
  };

export const deleteItem = id => dispatch => {
    axios.delete(`${serverURL}/${id}`, id).then(res => dispatch({
        type: DELETE_ITEM,
        payload: id
    }))
  };

export const setItemsLoading = () => {
    return {
      type: ITEMS_LOADING
    };
  };
  