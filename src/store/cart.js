const initialState = [];
const cart = (state = initialState, action) => {
  // action = {type,payload}
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      var newList = state;
      if (!newList.includes(payload))  newList.push(payload);
      return newList;
    case "DELETE":
      return state.filter((element) => element.id != payload);
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
export default cart;

export const deleteItem = (id) => {
  return {
    type: "DELETE",
    payload: id,
  };
};
export const addItem = (item) => {
  return {
    type: "ADD",
    payload: item,
  };
};
