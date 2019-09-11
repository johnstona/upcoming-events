import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  background-color: #248c9e;
  width: 100%;
  height: 40px;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  font-family: 'Asap', sans-serif;
  font-size: 30px;
`;

const AppHeader = () => {
  return <Header>FIND UPCOMING EVENTS</Header>
}

export default AppHeader
