import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';

const Container = styled.div`text-align: center;`;

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Title = styled.h1`font-size: 1.5em;`;

const SpinImage = styled.img`
  animation: ${keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  `} infinite 20s linear;
  height: 80px;
`;

const Intro = styled.p`font-size: large;`;

const App = () => (
  <Container>
    <Header>
      <SpinImage src={logo} alt="logo" />
      <Title>Welcome to React</Title>
    </Header>
    <Intro>
      To get started, edit <code>src/App.js</code> and save to reload.
    </Intro>
  </Container>
);

export default App;
