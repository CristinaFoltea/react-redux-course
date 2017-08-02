import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../actions/courseAction";
import CourseForm from "./CourseForm"

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course : Object.assign({}, this.props.course),
      errors : {}
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    return this.setState({course : course})
  }

  render () {
    return (
      <CourseForm
        allAuthors={this.props.authors}
        course={this.state.course}
        errors={this.state.errors}
        onSave={this.onSave}
      />
    );
  }
}

ManageCoursePage.propTypes = {
  course : PropTypes.object.isRequired,
  authors : PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  let course = {id:"", watchHref:"", title:"", authorId:"", length:"", category:""};

  const authorsFormatedForDropdown = state.authors.map( author => {
    return {
      value : author.id,
      text : author.firstName + " " + author.lastName
    }
  })

  return {
    course : course,
    authors : authorsFormatedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);