import { v4 as uuid } from "uuid";

// Action Creators
// TODO: Create action creators as defined in tests
//Add quote
export const addQuote = (quote) => {
  return {
    type: "add/quote",
    payload: quote
  }
}
//Remove quote
export const removeQuote = (id) => {
  return {
    type: "remove/quote",
    payload: id
  }
}
//Upvote quote
export const upVote = (quote) => {
  return {
    id: uuid(),
    content: quote.content,
    author: quote.author
  }
}
//Downvote quote
export const downVote = (quote) => {
  return {
    id: uuid(),
    content: quote.content,
    author: quote.author
  }
}

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "add/quote":
      return [...state, action.payload];

    case "remove/quote":
      return state.filter( quote => quote.id !== id);

    default:
      return state;


  }
}
