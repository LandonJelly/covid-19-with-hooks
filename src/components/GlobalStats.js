/*
 * @Description: This file is made for
 * @Date: 2020-07-18 13:58:46
 * @LastEditTime: 2020-07-18 14:00:57
 * @Author: LeongD
 * @LastEditors: LeongD
 */

import React, { PureComponent } from "react";

function Stat({ number, color }) {
  return <span style={{ color: color, fontWeight: "bold" }}>{number}</span>;
}

function GlobalStats({ stats }) {
  const { cases, deaths, recovered, active, updated } = stats;

  return (
    <div className="global-stats">
      <small>Updated on {new Date(updated).toLocaleString()}</small>
      <table>
        <tr>
          <td>
            Cases: <Stat number={cases} color="red" />
          </td>
          <td>
            Deaths: <Stat number={deaths} color="gray" />
          </td>
          <td>
            Recovered: <Stat number={recovered} color="green" />
          </td>
          <td>
            Active: <Stat number={active} color="orange" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default GlobalStats;
