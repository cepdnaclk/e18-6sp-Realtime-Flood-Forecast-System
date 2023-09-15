import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";

interface DataType {
  key: string;
  datetime: string;
  atharagalla: number;
  galgamuwa: number;
  mediyawa: number;
  mahagalkadawala: number;
  streamflow: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Time",
    dataIndex: "datetime",
    key: "datetime",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Atharagalla Water Level",
    dataIndex: "atharagalla",
    key: "atharagalla",
  },
  {
    title: "Galgamuwa Water Level",
    dataIndex: "galgamuwa",
    key: "galgamuwa",
  },
  {
    title: "Mediyawa Water Level",
    dataIndex: "mediyawa",
    key: "mediyawa",
  },
  {
    title: "Mahagalkadawala Water Level",
    dataIndex: "mahagalkadawala",
    key: "mahagalkadawala",
  },
  {
    title: "Stream Flow Rate",
    dataIndex: "streamflow",
    key: "streamflow",
  },
];

const ReportsTable: FC = () => {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:3001/rainfall", {})
      .then((response) => {
        const formattedData = response.data.map((item: any) => ({
          ...item,
          datetime: new Date(
            item.year,
            item.month,
            item.day
          ).toLocaleDateString(),
        }));

        const filteredData = formattedData.filter(
          (item: any) =>
            item.atharagalla !== 0 &&
            item.galgamuwa !== 0 &&
            item.mahagalkadawala !== 0 &&
            item.streamflow !== 0
        );

        filteredData.reverse();
        setData(filteredData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <Table columns={columns} dataSource={data ? data : []} />;
};

export default ReportsTable;
