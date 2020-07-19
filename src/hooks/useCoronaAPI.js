/*
 * @Description: This file is made for
 * @Date: 2020-07-19 00:07:26
 * @LastEditTime: 2020-07-19 09:18:16
 * @Author: LeongD
 * @LastEditors: LeongD
 */

import { useState, useEffect, useCallback } from "react";

const BASE_URL = "https://corona.lmao.ninja/v2";
export function useCoronaAPI(
  path,
  { initialData = null, converter = (data) => data, refetchInterval = null }
) {
  const [data, setData] = useState(initialData);
  const convertData = useCallback(converter, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}${path}`);
      const data = await response.json();
      setData(convertData(data));
    };
    fetchData();

    if (refetchInterval) {
      const intervalId = setInterval(fetchData, refetchInterval);
      return () => clearInterval(intervalId);
    }
  }, [convertData, path, refetchInterval]);

  return data;
}
