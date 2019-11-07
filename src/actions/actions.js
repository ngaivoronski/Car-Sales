export const ADD_ITEM = "ADD_ITEM"
export const REMOVE_ITEM = "REMOVE_ITEM"

export const removeFeature = item => {
    // dispatch an action here to remove an item
    console.log(item);
    return {
        type: REMOVE_ITEM,
        payload: item,
    }
  };

export const buyItem = item => {
    // dipsatch an action here to add an item
    console.log(item);
    return {
        type: ADD_ITEM,
        payload: item,
    }
};