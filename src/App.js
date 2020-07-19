/*
 * @Description: This file is made for
 * @Date: 2020-07-14 22:50:23
 * @LastEditTime: 2020-07-19 09:17:52
 * @Author: LeongD
 * @LastEditors: LeongD
 */

import React, { useState, useEffect } from "react";

import "./App.css";
import GlobalStats from "./components/GlobalStats";
import CountriesChart from "./components/CountriesChart";
import SelectDataKey from "./components/SelectDataKey";
import { useCoronaAPI } from "./hooks/useCoronaAPI";
const BASE_URL = "https://corona.lmao.ninja/v2";
function App() {
  const [key, setKey] = useState("cases");

  const globalStats = useCoronaAPI("/all", {
    initialData: {},
    refetchInterval: 5000,
  });

  const countries = useCoronaAPI(`/countries?sort=${key}`, {
    initialData: [],
    converter: (data) => data.slice(0, 10),
  });

  return (
    <div className="App">
      <h1>COVID-19</h1>
      <GlobalStats stats={globalStats} />
      <SelectDataKey onChange={(e) => setKey(e.target.value)} />
      <CountriesChart data={countries} dataKey={key} />
    </div>
  );
}

export default App;
