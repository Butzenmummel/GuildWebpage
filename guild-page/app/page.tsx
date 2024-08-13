import React from 'react';
import TableComponent from './component/TableComponent'; // Adjust the path if necessary

const data = [
  { Name: 'John Doe', Age: 28, Location: 'New York' },
  { Name: 'Jane Smith', Age: 34, Location: 'London' },
  { Name: 'Sam Green', Age: 45, Location: 'Sydney' },
];

export default function Home() {
  return (
    <div>
      <h1>My Table</h1>
      <TableComponent data={data} />
    </div>
  );
}
