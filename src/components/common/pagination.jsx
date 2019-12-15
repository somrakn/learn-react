import React from "react";
import _ from "lodash";

const Pagination = props => {
  const { itemCount, pageSize, onPageChange, currentPage } = props;

  const pageCount = Math.ceil(itemCount / pageSize);
  const pages = _.range(1, pageCount + 1);

  if (pageCount === 1) return null;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className={ currentPage === page ? "page-item active": "page-item"}>
            <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
