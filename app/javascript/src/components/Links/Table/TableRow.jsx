import React from "react";
import PropTypes from "prop-types";

const TableRow = () => {
  return (
    <tbody className="bg-white divide-y divide-bb-gray-600">
      {/* {data.map((rowData) => ( */}
      <tr key={1}>
        <td className="px-3 py-4 text-center cursor-pointer whitespace-no-wrap bg-gray-100">
          <i className="transition duration-300 ease-in-out hover:text-purple-500 text-bb-border ri-pushpin-2-line text-2xl"></i>
        </td>
        <td className="px-6 py-4 text-sm font-medium leading-5 whitespace-no-wrap">
          {"Demo URL"}
        </td>

        <td className="px-6 py-4 text-sm font-medium leading-5 whitespace-no-wrap">
          {"Demo URL"}
        </td>
        <td className="px-3 py-4 text-sm text-center font-medium leading-5 whitespace-no-wrap bg-gray-100">
          {"5"}
        </td>
      </tr>
      {/* ))} */}
    </tbody>
  );
};

TableRow.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string,
  destroyTask: PropTypes.func,
  showTask: PropTypes.func,
  handleProgressToggle: PropTypes.func,
};

export default TableRow;
