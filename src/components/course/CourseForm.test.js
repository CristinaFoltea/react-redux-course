import expect from "expect";
import React from "react";
import TestUtils from "react-addons-test-utils";
import CourseForm from "./CourseForm";

function setup() {
  let props = {
    course : {},
    saving : false,
    errors : {},
    onSave : () => {},
    onChange : () => {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props}/>);
  let output = renderer.getRendererOutput();

  return {
    props,
    output,
    renderer
  };
}

describe("Course Form via React Utils", () => {
  it("renders a form and an h1", () => {
    const {output} = setup();
    expect(output.type).toBe('form');
  });
});
