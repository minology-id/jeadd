import React from 'react';
import PropTypes from 'prop-types';

import TableHeader from './Header';
import TableBody from './Body';
import ActionRow from './ActionRow';
import Pagination from './Pagination';

const DataTable = ({
  columns,
  rows,
  count,
  className,
  rowClass,
  actions,
  loading,
  searchState,
  paginateState,
  selectedState,
  sortState,
  uniqueId,
}) => {
  const [checkedAll, setCheckedAll] = React.useState(false);
  let styleName = 'table';

  if (className) styleName = styleName + ` ${className}`;

  return (
    <div>
      <ActionRow
        actions={actions}
        searchState={searchState}
        columns={columns}
      />
      <div className="table-responsive">
        <table className={styleName}>
          <TableHeader
            columns={columns}
            sortState={sortState}
            selectedState={selectedState}
            setCheckedAll={setCheckedAll}
          />
          <TableBody
            columns={columns}
            rows={rows}
            uniqueId={uniqueId}
            rowClass={rowClass}
            loading={loading}
            selectedState={selectedState}
            checkedAll={checkedAll}
          />
        </table>
      </div>
      <Pagination count={count} paginateState={paginateState} />
    </div>
  );
};

DataTable.defaultProps = {
  columns: [],
  rows: [],
};

DataTable.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
};

export default DataTable;
