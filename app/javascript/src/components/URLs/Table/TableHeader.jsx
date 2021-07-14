import React from "react";

const TableHeader = () => {
  return (
    <thead className="bg-purple-600 rounded rounded-b-none">
      <tr>
        <th className="w-1 bg-gray-50"></th>
        <th className="px-6 py-6 text-lg leading-4 tracking-wider text-center text-white">
          Original
        </th>
        <th className="px-6 py-6 text-lg leading-4 tracking-wider text-center text-white">
          Short Url
        </th>
        <th className="w-1 bg-gray-50"></th>
      </tr>
    </thead>
  );
};

export default TableHeader;
