import { Form, Input, Button } from "antd";
import { FC } from "react";

interface LoginFormProps {
  onFinish: (values: any) => void;
}

const LoginForm: FC<LoginFormProps> = ({ onFinish }) => {
  return (
    <Form name="login" onFinish={onFinish}>
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true, message: "Please enter your username" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: "Please enter your password" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
