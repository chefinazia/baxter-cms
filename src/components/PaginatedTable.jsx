import React, { useState } from 'react';
import TableComponent from './TableComponent';
import Pagination from './Pagination'; 

const PaginatedTable = () => {
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Operations',
      key: 'operations',
      render: () => <a href="#" className="text-red-500 hover:underline">Delete</a>,
    },
  ];

  const data = [
    { name: "Aman", age: 18, address: "Fatehpur", key: "1" },
    { name: "Rohit", age: 12, address: "Noida", key: "2" },
    { name: "Shanky", age: 34, address: "Gurgaon", key: "3" },
    { name: "Mohit", age: 23, address: "Delhi", key: "4" },
    { name: "Ashu", age: 17, address: "Chandigarh", key: "5" },
    { name: "Chirag", age: 45, address: "unknown", key: "4" },
    // Add more data as needed
  ];

  const total = data.length;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = data.slice(startIndex, startIndex + pageSize);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <TableComponent columns={columns} data={paginatedData} />
      <Pagination
        current={currentPage}
        total={total}
        pageSize={pageSize}
        onChange={handleChangePage}
      />
    </div>
  );
};

export default PaginatedTable;
