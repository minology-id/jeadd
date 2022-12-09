import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import Container from 'components/Container';
import Header from 'components/Dashboard/Header';
import Main from 'components/Dashboard/Main';
import Navbar from 'components/Dashboard/Navbar';
import Content from 'components/Dashboard/Content';
import Footer from 'components/Dashboard/Footer';

import { AuthContext } from 'context/Auth.context';

const Dashboard = () => {
  const { token } = React.useContext(AuthContext);

  if (!token) return <Navigate to="/" />;

  return (
    <Container responsive="fluid">
      <Header />
      <Main>
        <Navbar />
        <Content>
          <Outlet />
          <Footer />
        </Content>
      </Main>
    </Container>
  );
};

export default Dashboard;
