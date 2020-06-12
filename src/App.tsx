import React from 'react';
import logo from './logo.svg';
import './App.css';
import SSider from './layout/SSider';
import STab from './layout/STab';
import styled from 'styled-components';
import SHeader from './components/SHader';

const SBody = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  flex-direction:column;
`;


const SMain = styled.div`
  width:100vw;
  height:91vh;
  display:flex;
`;

const SLeft = styled.div`
  width:15%;
  height:100%;
`;

const SRight = styled.div`
  width:85%;
  height:100%;
`;





function App() {
  return (
    <div className="App">
      <SBody>
        <SHeader />
        <SMain>
          <SLeft>
            <SSider />
          </SLeft>
          <SRight>
            <STab />
          </SRight>
        </SMain>
      </SBody>
    </div>
  );
}

export default App;
