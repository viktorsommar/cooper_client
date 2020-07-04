import React from "react";
import { Form } from "semantic-ui-react";

const InputFields = ({ onChangeHandler }) => {
  return (
    <Form>
      <Form.Group widths='equal'>
    <Form.Input onChange={onChangeHandler} fluid label="Distance" name="distance" id="distance" />
    <Form.Input onChange={onChangeHandler} fluid label="Age" name="age" id="age" />

    <select onChange={onChangeHandler} name="gender" id="gender">
      <option value="female">Female</option>
      <option value="male">Male</option>
    </select>

    </Form.Group>
    </Form>
  );
};

export default InputFields;