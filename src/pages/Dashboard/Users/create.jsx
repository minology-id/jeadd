import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { AuthContext } from 'context/Auth.context';
import useUser from 'hooks/useUser';

import ContentContainer from 'components/Dashboard/ContentContainer';
import Header from 'components/Content/Header';
import Card from 'components/Card';
import Input from 'components/Input';
import Select from 'components/Select';
import Button from 'components/Button';

const DS_ROLES = [
  { value: 1, label: 'Administrator' },
  { value: 2, label: 'Staff' },
  { value: 3, label: 'Operator' },
];

const CreateUser = () => {
  const navigate = useNavigate();
  const { token } = React.useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { isLoading, mutate } = useUser.create({
    token,
    onSuccess: (res) => {
      if (!res.data.payload) throw new Error('Failed to POST');

      navigate('/users');
    },
    onError: (err) => console.log(err),
  });

  const onSubmit = (data) => {
    delete data.password_confirm;

    mutate(data);
  };

  return (
    <ContentContainer>
      <Header>Create User</Header>
      <Card className="bg-light p-4 my-2">
        <form className="form" noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-12 col-lg-6">
              <Input
                name="firstName"
                label="First Name"
                placeholder="Type your firstname..."
                register={register}
                errors={errors}
              />
            </div>
            <div className="col-12 col-lg-6">
              <Input
                name="lastName"
                label="Last Name"
                placeholder="Type your lastname..."
                register={register}
                errors={errors}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <Input
                name="email"
                label="Email Address"
                placeholder="Type your email..."
                register={register}
                errors={errors}
              />
            </div>
            <div className="col-12 col-lg-6">
              <Select
                name="roleId"
                label="Role"
                placeholder="Select role..."
                options={DS_ROLES}
                register={register}
                errors={errors}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <Input
                name="password"
                label="Password"
                type="password"
                placeholder="Type your password..."
                register={register}
                errors={errors}
              />
            </div>
            <div className="col-12 col-lg-6">
              <Input
                name="password_confirm"
                label="Password Confirm"
                type="password"
                placeholder="Confirm your password..."
                register={register}
                errors={errors}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-lg-9"></div>
            <div className="col-6 col-lg-3 text-end">
              <Button type="submit" className="my-2" loading={isLoading}>
                Submit
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </ContentContainer>
  );
};

const schema = yup.object({
  firstName: yup.string().min(1).max(32).required().label('Firstname'),
  lastName: yup.string().min(3).max(32).required().label('Lastname'),
  email: yup.string().email().required().label('Email Address'),
  password: yup.string().min(6).max(16).required().label('Password'),
  password_confirm: yup
    .string()
    .oneOf(
      [yup.ref('password'), null],
      'Password confirm must match with password'
    ),
  roleId: yup
    .number()
    .integer()
    .positive()
    .min(1)
    .max(3)
    .required()
    .label('Role'),
});

export default CreateUser;
