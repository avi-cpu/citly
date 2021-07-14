import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TableRow = ({ data, visitHandler, pinUrl }) => {
  //console.log(data);
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map(rowData => (
        <tr key={rowData.slug}>
          <td className="pl-6 py-4 text-center cursor-pointer whitespace-no-wrap bg-gray-100">
            <i
              className={classnames(
                "transition duration-300 ease-in-out text-2xl hover:text-bb-yellow p-1",
                {
                  "text-bb-border ri-pushpin-2-line":
                    rowData.status !== "pinned",
                },
                {
                  "text-white text-bb-yellow ri-pushpin-2-fill":
                    rowData.status === "pinned",
                }
              )}
              // className={`transition duration-300 ease-in-out hover:text-purple-500
              //   text-bb-border text-2xl ${
              //   rowData.status === "pinned"?
              //   "ri-pushpin-2-fill text-purple-500"
              //   :"ri-pushpin-2-line"
              // }`}
              onClick={() => pinUrl(rowData.slug, rowData.status)}
            ></i>
          </td>
          <td className="px-6 py-4 break-all text-sm text-black max-w-xs font-medium leading-5">
            <a
              href={rowData.original_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {rowData.original_url}
            </a>
          </td>
          <td
            className="px-6 py-3 text-sm break-all text-black font-medium leading-5 max-w-xs cursor-pointer"
            onClick={() =>
              visitHandler(
                rowData.slug,
                rowData.original_url,
                rowData.click_count
              )
            }
          >
            {rowData.short_url}
          </td>
          <td className="px-3 py-4 text-sm text-black text-center font-medium leading-5 whitespace-no-wrap bg-gray-100">
            {rowData.click_count}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

TableRow.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TableRow;
