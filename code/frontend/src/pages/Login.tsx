import { Card, Col, Row } from "antd";
import { FC } from "react";
import Title from "antd/es/typography/Title";
import LoginForm from "../components/LoginForm";

const Login: FC = () => {
  const onFinish = (values: any) => {
    console.log("Form submitted:", values);
    // Perform login logic here
  };

  return (
    <div>
      <Title>Login</Title>
      <Row gutter={16}>
        <Col span={12}>
          <Row gutter={16}>
            <Col span={24}>
              <Card title="Login Form" bordered={false}>
                <LoginForm onFinish={onFinish} />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
