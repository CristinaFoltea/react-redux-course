import React, { PropTypes } from "react";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import * as courseActions from "../../actions/courseAction";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursesPage = this.redirectToAddCoursesPage.bind(this);
  }

  redirectToAddCoursesPage() {
    browserHistory.push('/course');
  }

  render () {
    const {courses} = this.props;
    return (
      <div>
        <h1>  Courses Page </h1>
        <input
          type="submit"
          value="Add course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursesPage}/>
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursePage.propTypes = {
  actions : PropTypes.object.isRequired,
  courses : PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses : state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
