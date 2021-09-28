import * as Actions from "./bookAction";

const bookReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case Actions.ADDED_BOOK:
    case Actions.REMOVED_BOOK:
    case Actions.SHOWED_BOOK:
    default:
      return state;
  }
};

export default bookReducer;
