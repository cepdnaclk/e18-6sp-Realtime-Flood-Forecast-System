import { Card, Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <Title>Real Time Flood Forecast</Title>

      {/* ant design 2 column card layout */}
      <Row gutter={16}>
        <Col span={6}>
          <Card title="In flow Level" bordered={false}>
            <Title style={{ marginTop: 0 }}> 123 </Title>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Flood status" bordered={false}>
            <Title style={{ marginTop: 0 }} type="danger">
              {" "}
              Flood{" "}
            </Title>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Card title" bordered={false}>
            <Title style={{ marginTop: 0 }} type="secondary">
              Add Map Card here
            </Title>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
