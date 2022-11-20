import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Navigation from "../../components/navigation/Navigation";
import { MdFiberNew } from "react-icons/md";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { RiUserFollowFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Forum = () => {
  const [questions, setQuestions] = useState([]);

  const truncate = (str) => {
    return str.length > 200 ? str.substring(0, 200) + "..." : str;
  };

  const getQuestions = async () => {
    const { data } = await axios.get(
      "http://localhost:3001/questions/questions"
    );
    setQuestions(data);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div>
      <Navigation />
      <ForumContainer>
        {/* --- SIDE CONTAINER --- */}
        <GlobalContainer>
          <ListFilterItems>
            <div>
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
            </div>
          </ListFilterItems>
        </GlobalContainer>
        {/* --- MIDDLE CONTAINER --- */}
        <ListTopicsContainer>
          {questions.map((question) => (
            <QuestionItem key={`question-${question._id}`}>
              <div>
                <div>
                  <TitleQuestion>{question.title}</TitleQuestion>
                  {question.is_resolved ? (
                    <ResolvedTag>Sujet résolu</ResolvedTag>
                  ) : (
                    <NotResolvedTag>Sujet non résolu</NotResolvedTag>
                  )}
                </div>
                <ListTags>
                  <QuestionTag>PHP</QuestionTag>
                  <QuestionTag>Symfony</QuestionTag>
                </ListTags>
              </div>
              <QuestionContent>{truncate(question.content)}</QuestionContent>
              <QuestionFooter>
                <QuestionAuthor>{question.author_id}</QuestionAuthor>
                <div>
                  <QuestionReplies>104 réponses</QuestionReplies>
                </div>
              </QuestionFooter>
            </QuestionItem>
          ))}
        </ListTopicsContainer>
        {/* --- SIDE CONTAINER --- */}
        <GlobalContainer>
          <NewTopicButton to="/creer-une-question">Créer un nouveau topic</NewTopicButton>
          <SubContainer>
            <TitleSubContainer>Membres populaires</TitleSubContainer>
            <UserItem>
              <div style={{ width: "10%" }}>
                <UserAvatar src="https://zupimages.net/up/21/06/3w5i.png" />
              </div>
              <UserInformations>
                <UserPseudo>Axel Demorest</UserPseudo>
                <UserFollowers>500</UserFollowers>
              </UserInformations>
            </UserItem>
            <UserItem>
              <div style={{ width: "10%" }}>
                <UserAvatar src="https://zupimages.net/up/21/06/3w5i.png" />
              </div>
              <UserInformations>
                <UserPseudo>Axel Demorest</UserPseudo>
                <UserFollowers>500</UserFollowers>
              </UserInformations>
            </UserItem>
            <UserItem>
              <div style={{ width: "10%" }}>
                <UserAvatar src="https://zupimages.net/up/21/06/3w5i.png" />
              </div>
              <UserInformations>
                <UserPseudo>Axel Demorest</UserPseudo>
                <UserFollowers>500</UserFollowers>
              </UserInformations>
            </UserItem>
            <UserItem>
              <div style={{ width: "10%" }}>
                <UserAvatar src="https://zupimages.net/up/21/06/3w5i.png" />
              </div>
              <UserInformations>
                <UserPseudo>Axel Demorest</UserPseudo>
                <UserFollowers>500</UserFollowers>
              </UserInformations>
            </UserItem>
            <UserItem>
              <div style={{ width: "10%" }}>
                <UserAvatar src="https://zupimages.net/up/21/06/3w5i.png" />
              </div>
              <UserInformations>
                <UserPseudo>Axel Demorest</UserPseudo>
                <UserFollowers>500</UserFollowers>
              </UserInformations>
            </UserItem>
            <UserItem>
              <div style={{ width: "10%" }}>
                <UserAvatar src="https://zupimages.net/up/21/06/3w5i.png" />
              </div>
              <UserInformations>
                <UserPseudo>Axel Demorest</UserPseudo>
                <UserFollowers>500</UserFollowers>
              </UserInformations>
            </UserItem>
          </SubContainer>
          <SubContainer>
            <TitleSubContainer>Statistiques</TitleSubContainer>
            <StatisticList>
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
            </StatisticList>
          </SubContainer>
        </GlobalContainer>
      </ForumContainer>
    </div>
  );
};

// --- -------------------- --- //
// --- CSS STYLED COMPONENT --- //
// --- -------------------- --- //

const ForumContainer = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  padding: 20px 40px;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const GlobalContainer = styled.div`
  width: 23%;
  display: flex;
  flex-direction: column;
`;

const SubContainer = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  padding: 15px;
  margin-bottom: 20px;
`;

const ListTopicsContainer = styled(GlobalContainer)`
  width: 67%;
  margin: 0 20px;
  overflow-y: scroll;
  height: 80vh;
`;

const ListFilterItems = styled(SubContainer)`
  padding: 10px;
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

const QuestionItem = styled(SubContainer)`
  padding: 20px 25px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleQuestion = styled.p`
  font-weight: 600;
  font-size: 17px;
  color: #424244;
  display: inline-block;
  margin-right: 15px;
  margin-bottom: 0;
`;

const ResolvedTag = styled.span`
  font-size: 12px;
  color: #0ecc8e;
  background-color: #d7faef;
  padding: 5px 10px;
  border-radius: 20px;
`;

const NotResolvedTag = styled.span`
  font-size: 12px;
  color: #cc0e0e;
  background-color: #fad7d7;
  padding: 5px 10px;
  border-radius: 20px;
`;

const QuestionContent = styled.p`
  font-size: 14px;
  color: #656f7c;
`;

const ListTags = styled.div`
  margin: 12px 0 10px 0;
`;

const QuestionTag = styled(ResolvedTag)`
  font-size: 11px;
  padding: 4px 15px;
  color: #818181;
  background-color: #ececec;
  margin-right: 10px;
`;

const QuestionFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const QuestionAuthor = styled.p`
  color: #424244;
  font-weight: 500;
`;

const QuestionReplies = styled.p`
  color: #8e8e8e;
  font-size: 13px;
`;

const NewTopicButton = styled(Link)`
  text-align: center;
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

const TitleSubContainer = styled.h3`
  font-weight: 600;
  font-size: 17px;
  color: #424244;
  margin-bottom: 25px;
`;

const UserItem = styled.div`
  padding: 0 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const UserAvatar = styled.img`
  border-radius: 50%;
  width: 100%;
`;

const UserInformations = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserPseudo = styled.p`
  color: #424244;
  font-weight: 500;
  padding-right: 15px;
`;

const UserFollowers = styled.p`
  font-size: 12px;
  color: #898989;
  font-weight: 400;
`;

const StatisticList = styled.div``;

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
