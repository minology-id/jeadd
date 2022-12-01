import React from 'react';

import Container from 'components/Container';
import Header from 'components/Dashboard/Header';
import Main from 'components/Dashboard/Main';
import Navbar from 'components/Dashboard/Navbar';
import Content from 'components/Dashboard/Content';
import Footer from 'components/Dashboard/Footer';

import User from 'pages/Users';

const Dashboard = () => {
  return (
    <Container responsive="fluid">
      <Header />
      <Main>
        <Navbar />
        <Content>
          <User />
          <Footer />
        </Content>
      </Main>
    </Container>
  );
};

export default Dashboard;
