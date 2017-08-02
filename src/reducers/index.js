import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorsReducer";

const RootReducer = combineReducers({
  courses,
  authors
});


export default RootReducer;
