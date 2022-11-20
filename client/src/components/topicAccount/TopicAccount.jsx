import React from "react";
import styled from "styled-components";
import { HiExternalLink } from "react-icons/hi";

const truncate = (str) => {
    return str.length > 200 ? str.substring(0, 200) + "..." : str;
  };

const TopicAccount = () => {
  return (
    <TopicItem>
      <h3>Topic 1 de axel</h3>
      <p>
        {truncate(`Lorem ipsum dolor sit amet. Id dolorem aliquid qui nihil beatae
                in mollitia mollitia et voluptatem illo et omnis repudiandae et
                galisum ullam! Qui aperiam rerum et voluptate aspernatur id
                cumque nulla At illum reiciendis. Est placeat illo ut illum
                eligendi et voluptates rerum eos quas quia? Eum officiis officia
                sit architecto nesciunt aut deserunt molestiae rem enim placeat
                sed repellat enim et quos ipsam id praesentium sunt!`)}
      </p>
      <TopicAnswers>104 réponses</TopicAnswers>
      <ReadMoreButton>
        <HiExternalLink style={{ fontSize: "14px", marginRight: "7px" }} /> Lire
        plus
      </ReadMoreButton>
    </TopicItem>
  );
};


const TopicItem = styled.div`
  background-color: #f9fbfc;
  width: 85%;
  padding: 25px 25px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const TopicAnswers = styled.p`
  color: #717171;
`;

const ReadMoreButton = styled.button`
  border-radius: 3px;
  font-size: 12px;
  padding: 8px 15px;
  font-weight: normal;
  margin-top: 15px;
  background-color: #111727;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  &:hover {
    background-color: #111727de;
  }
`;

export default TopicAccount;
