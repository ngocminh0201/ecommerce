import { Table } from "antd";
import React from "react";
import Loading from "../LoadingComponent/Loading";

const TableComponent = (props) => {
  const {
    selectionType = "checkbox",
    data = [],
    isPending = false,
    columns = [],
  } = props;
  //   const data = [
  //     {
  //       key: '1',
  //       name: 'John Brown',
  //       age: 32,
  //       address: 'New York No. 1 Lake Park',
  //     },
  //     {
  //       key: '2',
  //       name: 'Jim Green',
  //       age: 42,
  //       address: 'London No. 1 Lake Park',
  //     },
  //     {
  //       key: '3',
  //       name: 'Joe Black',
  //       age: 32,
  //       address: 'Sydney No. 1 Lake Park',
  //     },
  //     {
  //       key: '4',
  //       name: 'Disabled User',
  //       age: 99,
  //       address: 'Sydney No. 1 Lake Park',
  //     },
  // ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <Loading isPending={isPending}>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        {...props}
      />
    </Loading>
  );
};

export default TableComponent;
