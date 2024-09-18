import React from "react";

function DisplayData({ data }) {
  return (
    <div
      className="flex items-center justify-center rounded-lg "
      style={{
        boxShadow: "0px 0px 3px rgba(255, 255, 255, 0.5)",
      }}
    >
      <table className="w-full max-w-3xl text-center border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-transparent">Metric</th>
            <th className="px-4 py-2 border border-transparent">
              Total Questions
            </th>
            <th className="px-4 py-2 border border-transparent">
              Total Solved
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-transparent">Easy</td>
            <td className="px-4 py-2 border border-transparent">
              {data.totalEasy}
            </td>
            <td className="px-4 py-2 border border-transparent">
              {data.easySolved}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-transparent">Medium</td>
            <td className="px-4 py-2 border border-transparent">
              {data.totalMedium}
            </td>
            <td className="px-4 py-2 border border-transparent">
              {data.mediumSolved}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-transparent">Hard</td>
            <td className="px-4 py-2 border border-transparent">
              {data.totalHard}
            </td>
            <td className="px-4 py-2 border border-transparent">
              {data.hardSolved}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-transparent">Total</td>
            <td className="px-4 py-2 border border-transparent">
              {data.totalQuestions}
            </td>
            <td className="px-4 py-2 border border-transparent">
              {data.totalSolved}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DisplayData;
