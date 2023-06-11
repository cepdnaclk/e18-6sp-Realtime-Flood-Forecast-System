import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { FC } from "react";

interface DataType {
  key: string;
  datetime: string;
  station1Rainfall: number;
  station2Rainfall: number;
  station3Rainfall: number;
  waterflowRate: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Time",
    dataIndex: "datetime",
    key: "datetime",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Station 1 Rainfall",
    dataIndex: "station1Rainfall",
    key: "station1Rainfall",
  },
  {
    title: "Station 2 Rainfall",
    dataIndex: "station2Rainfall",
    key: "station2Rainfall",
  },
  {
    title: "Station 3 Rainfall",
    dataIndex: "station3Rainfall",
    key: "station3Rainfall",
  },
  {
    title: "Waterflow Rate",
    dataIndex: "waterflowRate",
    key: "waterflowRate",
  },
];

const data: DataType[] = [
  {
    key: "1",
    datetime: "2023-06-10 09:00",
    station1Rainfall: 10,
    station2Rainfall: 15,
    station3Rainfall: 8,
    waterflowRate: 20,
  },
  {
    key: "2",
    datetime: "2023-06-10 10:00",
    station1Rainfall: 5,
    station2Rainfall: 12,
    station3Rainfall: 6,
    waterflowRate: 18,
  },
  {
    key: "3",
    datetime: "2023-06-10 11:00",
    station1Rainfall: 8,
    station2Rainfall: 10,
    station3Rainfall: 5,
    waterflowRate: 15,
  },
  // 4 more records
  {
    key: "4",
    datetime: "2023-06-10 12:00",
    station1Rainfall: 10,
    station2Rainfall: 15,
    station3Rainfall: 8,
    waterflowRate: 20,
  },
  {
    key: "5",
    datetime: "2023-06-10 13:00",
    station1Rainfall: 5,
    station2Rainfall: 12,
    station3Rainfall: 6,
    waterflowRate: 18,
  },
  {
    key: "6",
    datetime: "2023-06-10 14:00",
    station1Rainfall: 8,
    station2Rainfall: 10,
    station3Rainfall: 5,
    waterflowRate: 15,
  },
];

const ReportsTable: FC = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default ReportsTable;
