/*
 * @Description: This file is made for
 * @Date: 2020-07-18 23:03:34
 * @LastEditTime: 2020-07-18 23:04:37
 * @Author: LeongD
 * @LastEditors: LeongD
 */

import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
function CountriesChart({ data, dataKey }) {
  return (
    <BarChart
      width={1200}
      height={250}
      style={{ margin: "auto" }}
      margin={{ top: 30, left: 20, right: 30 }}
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="country" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={dataKey} fill="#8884d8" />
    </BarChart>
  );
}

export default CountriesChart;
