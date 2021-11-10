export const setCards = (cardNumbers) => {
  return (dispatch) => {
    dispatch({
      type: "setCard",
      payload: cardNumbers
    })
  }
}

export const changeCards = (cardNumbers) => {
  return (dispatch) => {
    dispatch({
      type: "changeCards",
      payload: cardNumbers
    })
  }
}