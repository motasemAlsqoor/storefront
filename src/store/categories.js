const initialState = {
  categories: [
    {
      normalizedName: "food",
      displayName: "FOOD",
      description: "foo",
    },
    {
      normalizedName: "electronics",
      displayName: "ELELCTRONICS",
      description: "baz",
    },
  ],
  active: "food",
};
const categories = (state = initialState, action) => {
  // action = {type,payload}
  const { type, payload } = action;

  switch (type) {
    case "CHANGECATEGORY":
      const categories = state.categories;
      const active = payload;
      return { categories, active };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
export default categories;
export const changeActiveCategory = (categoryName) => {
  return {
    type: "CHANGECATEGORY",
    payload: categoryName,
  };
};
