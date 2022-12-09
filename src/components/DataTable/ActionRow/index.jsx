import React from 'react';

const ActionRow = ({ columns, searchState, actions }) => {
  const [cols] = React.useState(
    columns
      .filter((col) => col.search !== false)
      .filter((col) => col.label.toLowerCase() !== 'action')
  );
  const { search, setSearch } = searchState;

  return (
    <div className="row">
      <div className="col-12 col-md-6 col-xxl-3">
        <div className="input-group mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            defaultValue={0}
            onChange={(e) => setSearch({ ...search, field: e.target.value })}
          >
            <option value={null}>All columns</option>
            {cols.map((col, index) => (
              <option key={index} value={col.index}>
                {col.label}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="form-control"
            aria-label="Text input with segmented dropdown button"
            onChange={(e) => setSearch({ ...search, query: e.target.value })}
          />
          <span className="input-group-text">Search</span>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xxl-9">
        <div className="d-flex justify-content-end">{actions}</div>
      </div>
    </div>
  );
};

ActionRow.defaultProps = {
  columns: [],
  actions: [],
};

export default ActionRow;
