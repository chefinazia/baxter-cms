import Table from "rc-table";
import React from "react";

const TableClinical = (props) => {
  const { columns, data } = props;
  return (
    <Table
      columns={columns}
      data={data}
      tableLayout={"fixed"}
      className="grid divide-y-6 mx-8 bg-primary-borderColor bg-pri"
      rowClassName="p-4 mx-8 divide-y-6 bg-primary-pageColor"
    ></Table>
  );
};

export default TableClinical;
