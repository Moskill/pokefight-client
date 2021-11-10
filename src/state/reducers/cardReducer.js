const reducer = (state = 0, action) => {
  switch (action.type) {
    case "setCards":
      return state + action.payload;
    case "changeCards":
      return state - action.payload;
    default:
      return state;
  }
}

export default reducer;