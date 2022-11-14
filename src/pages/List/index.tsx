import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useLocation } from "react-router-dom";
import React from "react";

import GetRepos from "../../utils/axios";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    width: 150,
  },
  {
    title: "Age",
    dataIndex: "age",
    width: 150,
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "查看详情",
    render: () => <div>1</div>,
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const App: React.FC = () => {
  const getsearchState = useLocation().state;
  const searchState =
    getsearchState === null ? "lin" : getsearchState.searchState;
  GetRepos(searchState).then((response) => console.log(response));

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 50 }}
      scroll={{ y: 240 }}
    />
  );
};

export default App;
