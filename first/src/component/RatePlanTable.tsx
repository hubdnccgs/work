import React from "react";
import { SubscribePlan } from "../model/model";

function RatePlanTable(data: SubscribePlan[]) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>상품유형</th>
            <th>요금제명</th>
            <th>인원</th>
            <th>월이용료</th>
            <th>노출</th>
            <th>기능</th>
          </tr>
        </thead>
        <tbody>
          {}
          {data.map((v, k) => (
            <tr key={v.idx}>
              <td>{v.type}</td>
              <td>{v.title}</td>
              <td>{v.plan_max_count}</td>
              <td>{v.pr_original_price}</td>
              <td>{v.isView}</td>
              <td>
                <button>수정</button>
                <button>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RatePlanTable;
