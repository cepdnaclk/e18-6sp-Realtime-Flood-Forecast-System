import { Button, Form, Input } from "antd";
import { FC } from "react";

const SubscribeForm: FC = () => {
  const [form] = Form.useForm();

  return (
    <Form form={form} layout="inline">
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input type="number" placeholder="Phone" />
      </Form.Item>

      <Form.Item shouldUpdate>
        {() => (
          <Button type="primary" htmlType="submit">
            Subscribe
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default SubscribeForm;
