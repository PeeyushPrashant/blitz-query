import React, { useState } from "react";
import { Select, Table } from "antd";
import { columns } from "./columns";
import data from "../dummyData/data.json";
import Search from "./search";

const TableWrapper = () => {
  let newData = new Array(50).fill(data).flat(); // making 10 million rows

  const [dataSource, setDataSource] = useState(newData);
  const [searchRecords, setSearchRecords] = useState(newData);
  const [totalTime, setTotalTime] = useState([]);

  const handleDataLength = (value) => {
    newData = newData.slice(0, value);
    setSearchRecords(newData);
    setDataSource(newData);
    setTotalTime([]);
  };

  return (
    <div className="container">
      <div className="actions">
        <Search
          data={searchRecords}
          setDataSource={setDataSource}
          setTotalTime={setTotalTime}
        />
        <div>Number of Records:</div>
        <Select
          defaultValue={10000000}
          style={{ width: 150, marginLeft: 5 }}
          onChange={handleDataLength}
          options={[
            {
              value: 1000,
              label: "1 Thousand",
            },
            {
              value: 10000,
              label: "10 Thousand",
            },
            {
              value: 100000,
              label: "100 Thousand",
            },
            {
              value: 500000,
              label: "500 Thousand",
            },
            {
              value: 1000000,
              label: "1 Million",
            },
            {
              value: 10000000,
              label: "10 Million",
            },
          ]}
        />
        <span style={{ marginLeft: 10 }}>
          Performance:{" "}
          {totalTime.length > 0 ? Math.ceil(...totalTime) / 1000 : 0} seconds
        </span>
      </div>
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={dataSource}
        scroll={{ y: 450 }}
        pagination={{
          total:dataSource,
          showTotal: total => `Total ${total} items`
        }}
      />
    </div>
  );
};

export default TableWrapper;