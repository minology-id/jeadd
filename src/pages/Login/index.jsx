import React from 'react';
// import { useNavigate } from 'react-router-dom';

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
  const [form, setForm] = React.useState({
    email: null,
    password: null,
  });

  const { isLoading, mutate: doLogin } = login({
    onSuccess: (res) => {
      if (!res.data.payload) return;

      setToken(res.data?.payload);
      // navigate('/');
      window.location.reload();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const onChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submit = () => {
    doLogin({ ...form });
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
            <form className="form mb-3">
              <Input
                name="email"
                label="Username"
                placeholder="yourmail@example.com"
                onChange={(e) => onChange(e)}
              />
              <Input
                name="password"
                label="Password"
                type="password"
                marginBottom={5}
                placeholder="type your password..."
                onChange={(e) => onChange(e)}
              />
              <Button
                className="form-control"
                type="button"
                onClick={submit}
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

export default Login;
