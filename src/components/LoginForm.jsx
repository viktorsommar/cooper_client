import React from "react";
import { Form, Button } from "semantic-ui-react";

const LoginForm = ({ submitFormHandler }) => {
  return (
    <Form onSubmit={submitFormHandler} id="login-form">
      <Form.Field>
        <label>Email</label>
        <input name="email" type="email" id="email"></input>
      </Form.Field>

      <Form.Field>
        <label>Password</label>
        <input name="password" type="password" id="password"></input>
        </Form.Field>
      <Button type="submit" id="submit">Submit</Button> 
    </Form>
  );
};

export default LoginForm;