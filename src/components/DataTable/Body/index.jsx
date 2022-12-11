import React from 'react';

import SpinnerGrowing from 'components/Spinner/Growing';

const TableBody = ({
  columns,
  rows,
  uniqueId,
  rowClass,
  loading,
  selectedState,
  checkedAll,
}) => {
  const { setSelected } = selectedState;

  const onCheckBoxClicked = (checked, row, data) => {
    if (checked) {
      setSelected((selected) => [...selected, data]);
    } else {
      setSelected((selected) =>
        selected.filter((sel) => sel[uniqueId] !== row)
      );
    }
  };

  return (
    <tbody>
      {loading ? (
        <tr>
          <td
            colSpan={selectedState ? columns.length + 1 : columns.length}
            className="text-center py-5"
          >
            <SpinnerGrowing />
          </td>
        </tr>
      ) : (
        rows.map((row, rowKey) => {
          return (
            <TableRow key={`row-${rowKey}`}>
              {selectedState ? (
                <TableData>
                  <CheckBox
                    value={row[uniqueId]}
                    onChange={onCheckBoxClicked}
                    data={row}
                    checked={checkedAll}
                  />
                </TableData>
              ) : null}
              {columns.map((col, colKey) => {
                if (col.render) {
                  return (
                    <TableData
                      key={`row-${rowKey}-col-${colKey}`}
                      className={col.colClass ? col.colClass : ''}
                    >
                      {col.render(row, row[col.index])}
                    </TableData>
                  );
                } else {
                  return (
                    <TableData
                      key={`row-${rowKey}-col-${colKey}`}
                      className={col.colClass ? col.colClass : ''}
                    >
                      {row[col.index]}
                    </TableData>
                  );
                }
              })}
            </TableRow>
          );
        })
      )}
    </tbody>
  );
};

TableBody.defaultProps = {
  columns: [],
  rows: [],
  selectedState: false,
  checkedAll: false,
};

const TableRow = ({ className, children }) => (
  <tr className={className ? className : ''}>{children}</tr>
);

const TableData = ({ className, children }) => (
  <td className={className ? className : ''}>{children}</td>
);

const CheckBox = ({ value, checked, onChange, data }) => {
  const [check, setCheck] = React.useState(false);

  React.useEffect(() => {
    setCheck(checked);
  }, [checked]);

  React.useEffect(() => {
    onChange(check, value, data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [check]);

  return (
    <input
      className="form-check-input"
      type="checkbox"
      value={value}
      onChange={(e) => setCheck(e.target.checked)}
      checked={check}
    />
  );
};

export default TableBody;
