import { Card, Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import { FC } from "react";
import Map from "../components/Map";
import SubscribeForm from "../components/SubscribeForm";

const Home: FC = () => {
  return (
    <div>
      <Title>Real Time Flood Forecast</Title>
      <Row gutter={16}>
        <Col span={12}>
          <Row gutter={16} style={{ marginBottom: "3rem" }}>
            <Col span={12}>
              <Card title="Stream Flow" bordered={false}>
                <Title style={{ marginTop: 0 }}> 0.255 m³/s </Title>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Flood status" bordered={false}>
                <Title style={{ marginTop: 0 }} type="danger">
                  Flood
                </Title>
              </Card>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Card title="Get Flood Alerts" bordered={false}>
                <SubscribeForm />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Col span={24}>
            <Card title="Real time map" bordered={false}>
              <Map />
            </Card>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
