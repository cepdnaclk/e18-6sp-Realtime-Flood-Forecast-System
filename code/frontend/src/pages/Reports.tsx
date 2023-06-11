import { Card, Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import { FC } from "react";
import ReportsTable from "../components/ReportsTable";

const Reports: FC = () => {
  return (
    <div>
      <Title>Reports</Title>
      <Row gutter={16}>
        <Col span={24}>
          <Card bordered={false}>
            <ReportsTable />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Reports;
