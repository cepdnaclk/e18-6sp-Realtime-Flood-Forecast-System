import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { FC } from "react";

interface DataType {
  key: string;
  datetime: string;
  station1Waterlevel: number;
  station2Waterlevel: number;
  station3Waterlevel: number;
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
    title: "Station 1 Water Level",
    dataIndex: "station1Waterlevel",
    key: "station1Waterlevel",
  },
  {
    title: "Station 2 Water Level",
    dataIndex: "station2Waterlevel",
    key: "station2Waterlevel",
  },
  {
    title: "Station 3 Water Level",
    dataIndex: "station3Waterlevel",
    key: "station3Waterlevel",
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
    station1Waterlevel: 10,
    station2Waterlevel: 15,
    station3Waterlevel: 8,
    waterflowRate: 20,
  },
  {
    key: "2",
    datetime: "2023-06-10 10:00",
    station1Waterlevel: 5,
    station2Waterlevel: 12,
    station3Waterlevel: 6,
    waterflowRate: 18,
  },
  {
    key: "3",
    datetime: "2023-06-10 11:00",
    station1Waterlevel: 8,
    station2Waterlevel: 10,
    station3Waterlevel: 5,
    waterflowRate: 15,
  },
  // 4 more records
  {
    key: "4",
    datetime: "2023-06-10 12:00",
    station1Waterlevel: 10,
    station2Waterlevel: 15,
    station3Waterlevel: 8,
    waterflowRate: 20,
  },
  {
    key: "5",
    datetime: "2023-06-10 13:00",
    station1Waterlevel: 5,
    station2Waterlevel: 12,
    station3Waterlevel: 6,
    waterflowRate: 18,
  },
  {
    key: "6",
    datetime: "2023-06-10 14:00",
    station1Waterlevel: 8,
    station2Waterlevel: 10,
    station3Waterlevel: 5,
    waterflowRate: 15,
  },
];

const ReportsTable: FC = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default ReportsTable;
