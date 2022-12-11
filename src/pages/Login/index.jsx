import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Container from 'components/Container';
import Card from 'components/Card';
import Input from 'components/Input';
import Button from 'components/Button';
import logo from 'assets/logo.png';

import { useAuth } from 'hooks/useAuth';
import { AuthContext } from 'context/Auth.context';

const Login = () => {
  // const navigate = useNavigate();
  const { login } = useAuth();
  const { setToken } = React.useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { isLoading, mutate: doLogin } = login({
    onSuccess: (res) => {
      if (!res.data.payload) return;

      setToken(res.data?.payload);
      window.location.reload();
    },
    onError: (err) => {
      let ERR_MSG =
        err.response?.status === 401
          ? 'Invalid email or password'
          : err.message;
      toast.error(ERR_MSG);
    },
  });

  const submit = (data) => {
    doLogin({ ...data });
  };

  return (
    <Container responsive="fluid bg-light">
      <div
        className="row justify-content-center align-items-center m-0"
        style={{ height: '100vh' }}
      >
        <div
          className="col-12 col-md-6 col-xl-4 col-xxl-3"
          style={{ maxWidth: '600px' }}
        >
          <Card className="bg-light p-5">
            <img
              className="img img-responsive m-auto"
              src={logo}
              alt="company logo"
              style={{ width: '128px' }}
            />
            <h6 className="h6 text-center text-secondary my-3">
              Please login with your email and password
            </h6>
            <form
              className="form mb-3"
              method="POST"
              onSubmit={handleSubmit(submit)}
            >
              <Input
                name="email"
                label="Username"
                placeholder="yourmail@example.com"
                register={register}
                errors={errors}
              />
              <Input
                name="password"
                label="Password"
                type="password"
                marginBottom={5}
                placeholder="type your password..."
                register={register}
                errors={errors}
              />
              <Button
                className="form-control"
                type="submit"
                loading={isLoading}
              >
                Submit
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </Container>
  );
};

const schema = yup.object({
  email: yup.string().email().required().label('Email address'),
  password: yup.string().required().label('Password'),
});

export default Login;
