export const getColumn = (action) => [
  {
    label: 'First Name',
    index: 'firstName',
    colClass: 'text-center',
  },
  {
    label: 'Last Name',
    index: 'lastName',
    sort: false,
  },
  {
    label: 'Email',
    index: 'email',
  },
  {
    label: 'Role ID',
    index: 'roleId',
  },
  {
    label: 'Status',
    index: 'statusId',
  },
  {
    label: 'Join Date',
    index: 'createdAt',
    search: false,
  },
  {
    label: 'Action',
    index: 'userId',
    render: (row, index) => action(row, index),
  },
];
