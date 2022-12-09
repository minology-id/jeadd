import React from 'react';

import { AuthContext } from 'context/Auth.context';
import useUser from 'hooks/useUser';
import useDataTable from 'hooks/useDataTable';

import ContentContainer from 'components/Dashboard/ContentContainer';
import Header from 'components/Content/Header';
import Action from 'components/Content/Action';
import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';
import Card from 'components/Card';
import DataTable from 'components/DataTable';

import { columns } from './columns';

const User = () => {
  const {
    dataState,
    countState,
    sortState,
    searchState,
    paginateState,
    selectedState,
  } = useDataTable({
    sort: {
      col: 'createdAt',
      type: 'desc',
    },
    paginate: {
      limit: 10,
      page: 1,
    },
  });
  // const [data, setData] = React.useState([]);
  // const [dataCount, setDataCount] = React.useState(0);
  // const [sort, setSort] = React.useState({
  //   col: null,
  //   type: null,
  // });
  // const [paginate, setPaginate] = React.useState({
  //   limit: 10,
  //   page: 1,
  // });
  // const [search, setSearch] = React.useState({
  //   query: '',
  //   field: undefined,
  // });
  // const [selected, setSelected] = React.useState([]);

  const { token } = React.useContext(AuthContext);

  // Fetching data
  const { isLoading, isFetching } = useUser.get({
    token,
    sort: sortState.sort,
    paginate: paginateState.paginate,
    search: searchState.search,
    onSuccess: (res) => {
      if (!res.data?.payload) throw new Error('Error');

      dataState.setData(res.data?.payload);
      countState.setCount(res.data?.count);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <ContentContainer>
      <Header>Manage Users</Header>
      <Action className="bg-light">
        <ButtonLink size="sm" className="mx-1" to="/users/create">
          Add
        </ButtonLink>
        <Button size="sm" variant="danger" className="mx-1">
          {`Delete${
            selectedState.selected.length > 0
              ? ` (${selectedState.selected.length})`
              : ''
          }`}
        </Button>
      </Action>
      <Card className="bg-light p-2 my-2">
        <DataTable
          uniqueId="userId"
          className="table-hover"
          columns={columns}
          rows={dataState.data}
          count={countState.count}
          paginateState={paginateState}
          sortState={sortState}
          searchState={searchState}
          selectedState={selectedState}
          loading={isLoading || isFetching}
          actions={[
            <button key={1} className="btn btn-primary btn-sm">
              Export to Excel
            </button>,
          ]}
        />
      </Card>
    </ContentContainer>
  );
};

export default User;
