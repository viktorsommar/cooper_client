import React from "react";
import { Form, Button } from "semantic-ui-react";

const RegistrationForm = ({ submitFormHandler }) => {
  return (
    <Form onSubmit={submitFormHandler} id="registration-form">
      <Form.Field>
        <label>Email</label>
        <input name="email" type="email" id="email"></input>
      </Form.Field>

      <Form.Field>
        <label>Password</label>
        <input name="password" type="password" id="password"></input>
        </Form.Field>
      <Button type="submit" id="submit">Create Account</Button> 
    </Form>
  );
};

export default RegistrationForm;