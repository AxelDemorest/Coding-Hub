import React from 'react';
import styled from "styled-components";

const SubContainer = ({ title, children }) => {
    return (
        <Container>
            { title && <TitleSubContainer>{title}</TitleSubContainer> }
            {children}
        </Container>
    );
};

const Container = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #dfdfdf;
`;

const TitleSubContainer = styled.h3`
  font-weight: 600;
  font-size: 17px;
  color: #424244;
  margin-bottom: 25px;
`;

export default SubContainer;
