import React from 'react';
import Navigation from "../navigation/Navigation";
import styled from "styled-components";

const Container = ({ children }) => {
    return (
        <div>
            <Navigation />
            <Content>
                {children}
            </Content>
        </div>
    );
};

const Content = styled.div`
  min-height: calc(100vh - 90px);
  width: 100%;
  background-color: #f7f7f7;
`;

export default Container;
