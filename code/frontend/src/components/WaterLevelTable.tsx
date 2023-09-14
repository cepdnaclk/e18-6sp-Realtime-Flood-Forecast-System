import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { FC } from "react";

interface DataType {
  key: string;
  StationName: string;
  WaterLevel: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Station Name",
    dataIndex: "StationName",
    key: "StationName",
  },
  {
    title: "Water Level",
    dataIndex: "WaterLevel",
    key: "WaterLevel",
  },
];

const data: DataType[] = [
  {
    key: "1",
    StationName: "Station 1",
    WaterLevel: 10,
  },
  {
    key: "2",
    StationName: "Station 2",
    WaterLevel: 15,
  },
  {
    key: "3",
    StationName: "Station 3",
    WaterLevel: 8,
  },
];

const WaterLevelTable: FC = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default WaterLevelTable;
