import * as types from "./actionTypes";
import courseApi from "../api/mockCourseApi";
import {beginAjaxCall, ajaxCallError} from "./ajaxStatusAction";

export function loadCoursesSucces(courses) {
  return {type: types.LOAD_COURSES_SUCCES, courses};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSES_SUCCES, course};
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSES_SUCCES, course};
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses()
                    .then(courses => {
                      dispatch(loadCoursesSucces(courses));
                    }).catch(error => {
                      dispatch(ajaxCallError(error));
                      throw(error);
                    });
  };
}

export function saveCourse(course) {
  //getState to connect with the redux store
  return function(dispatch, getState){
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course)
                    .then(savedCourse => {
                      savedCourse.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
                    }).catch(error => {
                      dispatch(ajaxCallError(error));
                      throw(error);
                    });
  };
}
