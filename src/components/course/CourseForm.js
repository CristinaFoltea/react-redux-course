import React, { PropTypes } from "react";
import InputText from "../common/InputText";
import SelectInput from "../common/SelectInput";

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <h1> Manage courses </h1>
      <InputText
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title} />

      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId}/>

      <InputText
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category} />

      <InputText
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length} />

      <input
        type="submit"
        disabled={loading}
        value={loading ? "Saving...." : "Save"}
        className="btn btn-primary"
        click={onSave} />
    </form>
  );
};

CourseForm.propTypes = {
  course : PropTypes.object.isRequired,
  allAuthors : PropTypes.array,
  onSave : PropTypes.func.isRequired,
  onChange : PropTypes.func.isRequired,
  loading : PropTypes.bool,
  errors : PropTypes.object
}


export default CourseForm;
