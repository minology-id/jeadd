import React from 'react';

export default function useDataTable(
  config = {
    sort: {
      col: null,
      type: null,
    },
    paginate: {
      limit: 10,
      page: 1,
    },
  }
) {
  const [data, setData] = React.useState([]);
  const [count, setCount] = React.useState(0);
  const [sort, setSort] = React.useState({
    col: config.sort.col,
    type: config.sort.type,
  });
  const [paginate, setPaginate] = React.useState({
    limit: config.paginate.limit,
    page: config.paginate.page,
  });
  const [search, setSearch] = React.useState({
    query: null,
    field: undefined,
  });
  const [selected, setSelected] = React.useState([]);

  return {
    dataState: { data, setData },
    countState: { count, setCount },
    sortState: { sort, setSort },
    paginateState: { paginate, setPaginate },
    searchState: { search, setSearch },
    selectedState: { selected, setSelected },
  };
}
