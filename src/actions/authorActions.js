import * as types from "./actionTypes";
import AuthorApi from "../api/mockAuthorApi";
import {beginAjaxCall, ajaxCallError} from "./ajaxStatusAction";

export function loadAuthorsSucces(authors) {
  return {type: types.LOAD_AUTHORS_SUCCES, authors};
}

export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors()
                    .then(authors => {
                      dispatch(loadAuthorsSucces(authors));
                    }).catch(error => {
                      dispatch(ajaxCallError(error));
                      throw(error);
                    });
  };
}
