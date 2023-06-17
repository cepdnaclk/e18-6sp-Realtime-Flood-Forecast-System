import { Card, Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import { FC } from "react";

const Reports: FC = () => {
  return (
    <div>
      <Title>Reports</Title>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="In Flow" bordered={false}>
            <Title style={{ marginTop: 0 }}>0.255 m³/s</Title>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Flood status" bordered={false}>
            <Title style={{ marginTop: 0 }} type="danger">
              Flood
            </Title>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Precipitation" bordered={false}>
            <Title style={{ marginTop: 0 }}>10 mm</Title>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Reports;

  
