import React from 'react';

const TableHeader = ({ columns, sortState, selectedState, setCheckedAll }) => {
  const [sort, setSort] = sortState;
  let styleName = '';

  const onSetSort = (col) => {
    if (sort.col === null) {
      setSort({
        col,
        type: 'asc',
      });
    } else {
      if (sort.col === col) {
        setSort({ ...sort, type: sort.type === 'asc' ? 'desc' : 'asc' });
      } else {
        setSort({
          col,
          type: 'asc',
        });
      }
    }
  };

  return (
    <thead>
      <tr>
        {selectedState ? (
          <th key="checkbox">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={(e) => setCheckedAll(e.target.checked)}
            />
          </th>
        ) : null}
        {columns.map((col, key) => {
          if (col.sort === false || col.label.toLowerCase() === 'action') {
            return (
              <th
                key={key}
                className={
                  col.className ? `${styleName} ${col.className}` : styleName
                }
                style={{ cursor: 'not-allowed' }}
              >
                {col.label}
              </th>
            );
          } else {
            return (
              <th
                key={key}
                className={
                  col.className ? `${styleName} ${col.className}` : styleName
                }
                onClick={() => onSetSort(col.index)}
                style={{ cursor: 'pointer' }}
              >
                {col.label}
              </th>
            );
          }
        })}
      </tr>
    </thead>
  );
};

TableHeader.defaultProps = {
  columns: [],
  setCheckedAll: false,
};

export default TableHeader;
