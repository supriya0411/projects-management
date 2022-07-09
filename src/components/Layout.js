import React from "react";
import LeftNav from "./LeftNav";
import styled from "styled-components";

const Wrapper = styled.div`
  @media (min-width: 700px) {
    display: flex;
    position: relative;
    height: calc(100% - 64px);
    width: 100%;
    flex: auto;
    flex-direction: column;
  }
`;
const Main = styled.main`
  position: fixed;
  height: 100%;
  width: 100%;
  padding: 1em;
  overflow-y: scroll;
  @media (min-width: 700px) {
    flex: 1;
    margin-left: 240px;
    height: 100%;
    width: calc(100% - 240px);
  }
`;

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Wrapper>
        <LeftNav />
        <Main>{children}</Main>
      </Wrapper>
    </React.Fragment>
  );
};
export default Layout;
