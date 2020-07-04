import React from "react";
import { Form } from "semantic-ui-react";

const InputFields = ({ onChangeHandler }) => {
  return (
    <Form>
      <Form.Group widths='equal'>
    <lable>Distance</lable>
    <input onChange={onChangeHandler} name="distance" id="distance"></input>

    <select onChange={onChangeHandler} name="gender" id="gender">
      <option value="female">Female</option>
      <option value="male">Male</option>
    </select>

    <label>Age</label>
    <input onChange={onChangeHandler} name="age" id="age"></input>
    </Form.Group>
    </Form>
  );
};

export default InputFields;