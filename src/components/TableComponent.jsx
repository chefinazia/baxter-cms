import React from 'react';

const TableComponent = ({ columns, data }) => {
  return (
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key} className="border border-gray-300 px-4 py-2">
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.key}>
            {columns.map((col) => (
              <td key={col.key} className="border border-gray-300 px-4 py-2">
                {row[col.dataIndex] || col.render(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
