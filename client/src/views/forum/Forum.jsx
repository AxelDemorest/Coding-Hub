import React from "react";
import { useState, useEffect } from "react";
import { MdFiberNew } from "react-icons/md";
import styled, { css } from "styled-components";
import { RiUserFollowFill } from "react-icons/ri";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { getLatestTopics } from "../../api/services/topicServices";
import SubContainer from "./components/SubContainer/SubContainer";
import Container from "../../components/container/Container";
import TopicItem from "./components/TopicItem/TopicItem";
import Users from "./components/Users/Users";
import { Link } from "react-router-dom";

const Forum = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getLatestTopics();
      setTopics(response);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <ForumContainer>
        {/* --- SIDE CONTAINER --- */}
        <GlobalContainer>
          <ListFilterItems>
              <FilterItem>
                <NewIcon />
                <div>
                  <ItemTitle>Questions récentes</ItemTitle>
                  <ItemDescription>Liste des derniers Sujets</ItemDescription>
                </div>
              </FilterItem>
              <FilterItem>
                <PopularIcon />
                <div>
                  <ItemTitle>Populaire du jour</ItemTitle>
                  <ItemDescription>Sujets les plus populaires</ItemDescription>
                </div>
              </FilterItem>
              <FilterItem>
                <FollowingIcon />
                <div>
                  <ItemTitle>Abonnements</ItemTitle>
                  <ItemDescription>
                    Sujets des personnes suivies
                  </ItemDescription>
                </div>
              </FilterItem>
          </ListFilterItems>
        </GlobalContainer>
        {/* --- MIDDLE CONTAINER --- */}
        <ListTopicsContainer>
          {topics.map((topic) => (
            <TopicItem topic={topic} />
          ))}
        </ListTopicsContainer>
        {/* --- SIDE CONTAINER --- */}
        <GlobalContainer>
          <NewTopicButton to="/forum/topic/new">Créer un nouveau topic</NewTopicButton>
          <SubContainer title={'Membres populaires'}>
            <Users />
          </SubContainer>
          <SubContainer title={'Statistiques'}>
            <div>
              <StatisticItem>
                <TitleItem>Topics</TitleItem>
                <TitleCount>200</TitleCount>
              </StatisticItem>
              <StatisticItem>
                <TitleItem>Messages</TitleItem>
                <TitleCount>20,304</TitleCount>
              </StatisticItem>
              <StatisticItem>
                <TitleItem>Membres</TitleItem>
                <TitleCount>1,393</TitleCount>
              </StatisticItem>
            </div>
          </SubContainer>
        </GlobalContainer>
      </ForumContainer>
    </Container>
  );
};

// --- -------------------- --- //
// --- CSS STYLED COMPONENT --- //
// --- -------------------- --- //

const ForumContainer = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const GlobalContainer = styled.div`
  width: 23%;
  display: flex;
  flex-direction: column;
`;

const ListTopicsContainer = styled(GlobalContainer)`
  width: 67%;
  margin: 0 20px;
`;

const ListFilterItems = styled(SubContainer)`
  padding: 10px;
  position: sticky;
  top: 10px;
`;

const FilterItem = styled.div`
  display: flex;
  align-items: center;
  padding: 13px 15px;
  cursor: pointer;
  border-radius: 7px;
  &:hover {
    background-color: #f7f7f7;
  }
`;

const ItemTitle = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #424244;
  margin-bottom: 0;
`;

const ItemDescription = styled.small`
  font-weight: 500;
  color: #bfbec0;
  font-size: 11px;
`;

const NewTopicButton = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  font-size: 15px;
  border-radius: 5px;
  width: 100%;
  padding: 10px 30px;
  background-color: #14cc8e;
  border: none;
  margin-bottom: 20px;
  &:hover {
    background-color: #19ad7c;
    color: #fff;
  }
`;

const StatisticItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #f4f5fb;
  margin-top: 10px;
`;

const TitleItem = styled.p`
  font-weight: 600;
  font-size: 13px;
`;

const TitleCount = styled.p`
  font-weight: 500;
  font-size: 13px;
  color: #898989;
`;

// --- -------- --- //
// --- CSS ICON --- //
// --- -------- --- //

const IconStyle = css`
  margin-right: 15px;
  font-size: 35px;
  padding: 5px;
  background-color: #f7f7f7;
  border-radius: 5px;
`;

const NewIcon = styled(MdFiberNew)`
  ${IconStyle}
  color: #0ECC8E;
`;

const PopularIcon = styled(BsFillBookmarkStarFill)`
  ${IconStyle}
  color: #f4cd4f;
`;

const FollowingIcon = styled(RiUserFollowFill)`
  ${IconStyle}
  color: #4f9ff4;
`;

export default Forum;
