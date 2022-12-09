import React from 'react';
import helper from 'utils/helper';
const Pagination = ({ count, paginateState }) => {
  const [paginate, setPaginate] = paginateState;
  const arrayOfItems = helper.createPaginateItem(count, paginate.limit);

  return (
    <nav className="d-flex align-items-center" aria-label="navigation ">
      <ul className="pagination">
        <PrevButton
          disabled={paginate.page === 1 ? true : false}
          paginate={paginate}
          setPaginate={setPaginate}
        />
        {arrayOfItems.map((item, index) => (
          <IndexButton
            key={index}
            index={item}
            paginate={paginate}
            setPaginate={setPaginate}
            current={paginate.page === item}
          />
        ))}
        <NextButton
          disabled={
            paginate.page === arrayOfItems[arrayOfItems.length - 1]
              ? true
              : false
          }
          paginate={paginate}
          setPaginate={setPaginate}
        />
      </ul>
    </nav>
  );
};

const PrevButton = ({ disabled, paginate, setPaginate }) => (
  <li className="page-item">
    <button
      className={`page-link ${disabled ? 'disabled' : ''}`}
      aria-label="Previous"
      onClick={() => setPaginate({ ...paginate, page: paginate.page - 1 })}
    >
      <span aria-hidden="true">&laquo;</span>
    </button>
  </li>
);

const IndexButton = ({ index, current, setPaginate, paginate }) => (
  <li className={`page-item ${current ? 'active' : ''}`}>
    <button
      className="page-link"
      onClick={() => setPaginate({ ...paginate, page: index })}
    >
      {index}
    </button>
  </li>
);

const NextButton = ({ disabled, paginate, setPaginate }) => (
  <li className="page-item">
    <button
      className={`page-link ${disabled ? 'disabled' : ''}`}
      aria-label="Next"
      onClick={() => setPaginate({ ...paginate, page: paginate.page + 1 })}
    >
      <span aria-hidden="true">&raquo;</span>
    </button>
  </li>
);

export default Pagination;
