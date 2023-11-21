import React, { useState, useEffect, useRef } from "react";
import RatePlanTable from "../component/RatePlanTable";
import Pagination from "../component/pagination";
import { SubscribePlan, SubscribePlanResponse } from "../model/model";
function RatePlan() {
  const [data, setData] = useState<SubscribePlan[]>([]);
  const tatalData = useRef<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemCountPerPage = 20;

  const getListApiData = async () => {
    const offset = currentPage - 1;
    const response = await fetch(
      `http://10.0.0.114:3100/admin/subscribe/list?offset=${offset}&limit=${itemCountPerPage}`,
      { method: "GET" }
    );
    const responseData: SubscribePlanResponse = await response.json();
    setData(responseData.data.list);
    tatalData.current = responseData.data.total_count;
  };

  useEffect(() => {
    getListApiData();
  }, [currentPage]);

  return (
    <>
      <RatePlanTable data={data} />
      <Pagination
        totalItems={tatalData.current}
        currentPage={currentPage}
        pageCount={5}
        itemCountPerPage={itemCountPerPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}

export default RatePlan;
