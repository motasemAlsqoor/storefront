const initialState = {
  products: [
    {
      id:1,
      category: "food",
      name: "tomato",
      price: 10,
      description: "fresh",
      inventoryCount: 12,
      img: "https://qtmd.org/wp-content/uploads/2019/07/howcuttingdo.jpg",
    },
    {
      id:2,
      category: "electronics",
      name: "iphone8-plus",
      price: 500,
      description: "new",
      inventoryCount: 10,
      img: "https://static.arageek.com/wp-content/uploads/2018/08/iphone8-plus.jpg",
    },
  ],
};

const products = (state = initialState, action) => {
  // action = {type,payload}
  const { type, payload } = action;

  switch (type) {
    case "REDUCEITEM":
  
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
export default products;

