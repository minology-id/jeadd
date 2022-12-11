import React from 'react';
import { toast } from 'react-toastify';

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
import DeletePrompt from 'components/Modal/Delete';

import { getColumn } from './columns';

import { BsTrash } from 'react-icons/bs';

const User = () => {
  const [modal, setModal] = React.useState({
    open: false,
    message: '',
    callback: () => {},
  });
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

  const { token } = React.useContext(AuthContext);

  // Fetching data
  const { isLoading, isFetching, refetch } = useUser.get({
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

  const { mutate: doDelete, isLoading: onDeleteLoading } = useUser.del({
    token,
    onSuccess: (res) => {
      if (!res.data?.payload) throw new Error('Error');

      toast.success('User has been deleted!');
      refetch();
      setModal({ ...modal, open: false });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const onSingleDelete = (data) => {
    setModal({
      open: true,
      message: (
        <p>
          Are you sure to delete{' '}
          <span className="fw-bold text-danger">
            {data.firstName} {data.lastName}
          </span>{' '}
          user?
        </p>
      ),
      callback: () => {
        doDelete({
          userId: [data.userId],
        });
      },
    });
  };

  const onMultiDelete = () => {
    setModal({
      open: true,
      message: (
        <p>
          Are you sure to delete{' '}
          <span className="fw-bold text-danger">
            {selectedState.selected.length}
          </span>{' '}
          users?
        </p>
      ),
      callback: () => {
        doDelete({
          userId: selectedState.selected.map((i) => i.userId),
        });
      },
    });
  };

  const action = React.useCallback(
    (row, index) => (
      <Button
        size="sm"
        className="btn-danger"
        loading={onDeleteLoading}
        onClick={() => onSingleDelete(row)}
      >
        <BsTrash />
      </Button>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const columns = React.useMemo(() => getColumn(action), [action]);

  return (
    <ContentContainer>
      <Header>Manage Users</Header>
      <Action className="bg-light">
        <ButtonLink size="sm" className="mx-1" to="/users/create">
          Add
        </ButtonLink>
        <Button
          size="sm"
          variant="danger"
          className="mx-1"
          onClick={onMultiDelete}
          disabled={selectedState.selected.length === 0}
        >
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
      <DeletePrompt
        open={modal.open}
        title={<span className="fw-bold">Delete user</span>}
        onClose={() => setModal({ ...modal, open: false })}
        onNext={modal.callback}
      >
        {modal.message}
      </DeletePrompt>
    </ContentContainer>
  );
};

export default User;
