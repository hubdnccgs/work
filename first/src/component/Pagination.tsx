import React, { useState } from "react";

interface Props {
  totalItems: number;
  itemCountPerPage: number;
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function Pagination(props: Props) {
  const totalPages = Math.ceil(props.totalItems / props.itemCountPerPage);
  const [start, setStart] = useState(1);
  const noPrev = start === 1;
  const noNext = start + props.pageCount - 1 >= totalPages;

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setStart(page);
      props.onPageChange(page);
    }
  };

  return (
    <ul>
      {noPrev ? "" : <li onClick={() => changePage(start - 1)}>이전</li>}
      {[...Array(props.pageCount)].map((_, i) => (
        <li key={i} onClick={() => changePage(start + i)}>
          {start + i <= totalPages && start + i}
        </li>
      ))}
      {noNext ? (
        ""
      ) : (
        <li onClick={() => changePage(start + props.pageCount)}>다음</li>
      )}
    </ul>
  );
}

export default Pagination;
