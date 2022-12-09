import React from 'react';

import { AuthContext } from 'context/Auth.context';
import useUser from 'hooks/useUser';

import ContentContainer from 'components/Dashboard/ContentContainer';
import Header from 'components/Content/Header';
import Action from 'components/Content/Action';
import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';
import Card from 'components/Card';
import DataTable from 'components/DataTable';

import { columns } from './columns';

const User = () => {
  const [data, setData] = React.useState([]);
  const [dataCount, setDataCount] = React.useState(0);
  const [sort, setSort] = React.useState({
    col: null,
    type: null,
  });
  const [paginate, setPaginate] = React.useState({
    limit: 10,
    page: 1,
  });
  const [search, setSearch] = React.useState({
    query: '',
    field: undefined,
  });
  const [selected, setSelected] = React.useState([]);

  const { token } = React.useContext(AuthContext);

  // Fetching data
  const { isLoading, isFetching } = useUser.get({
    token,
    sort,
    paginate,
    search,
    onSuccess: (res) => {
      if (!res.data?.payload) throw new Error('Error');

      setData(res.data?.payload);
      setDataCount(res.data?.count);
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
          {`Delete${selected.length > 0 ? ` (${selected.length})` : ''}`}
        </Button>
      </Action>
      <Card className="bg-light p-2 my-2">
        <DataTable
          uniqueId="userId"
          className="table-hover"
          columns={columns}
          rows={data}
          count={dataCount}
          paginateState={[paginate, setPaginate]}
          sortState={[sort, setSort]}
          searchState={[search, setSearch]}
          selectedState={[selected, setSelected]}
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
