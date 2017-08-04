import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorsReducer";
import ajaxStatus from "./ajaxStatusReducer";

const RootReducer = combineReducers({
  courses,
  authors,
  ajaxStatus
});


export default RootReducer;
