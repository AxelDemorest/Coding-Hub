import React from "react";
import styled from "styled-components";
import Navigation from "../../components/navigation/Navigation";
import banner from "../../assets/account_banner.jpg";
import { AiOutlinePlus } from "react-icons/ai";
import TopicAccount from "../../components/topicAccount/TopicAccount";

const Account = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <AccountContainer>
          <Banner />
          <UserInformations>
            <UserIcon src="https://zupimages.net/up/21/06/3w5i.png" alt="" />
            <GlobalInformations>
              <UserPseudo>Axel Demorest</UserPseudo>
              <UserShortDescription>
                Jeune développeur passionné par le web et étudiant à la Coding
                Factory.
              </UserShortDescription>
            </GlobalInformations>
            <div>
              <FollowButon>
                <AiOutlinePlus
                  style={{ fontSize: "17px", marginRight: "7px" }}
                />{" "}
                Suivre
              </FollowButon>
            </div>
          </UserInformations>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <AboutMe>
              <AboutTitle>À propos de moi</AboutTitle>
              <AboutDescription>
                Lorem ipsum dolor sit amet. Id dolorem aliquid qui nihil beatae
                in mollitia mollitia et voluptatem illo et omnis repudiandae et
                galisum ullam! Qui aperiam rerum et voluptate aspernatur id
                cumque nulla At illum reiciendis. Est placeat illo ut illum
                eligendi et voluptates rerum eos quas quia? Eum officiis officia
                sit architecto nesciunt aut deserunt molestiae rem enim placeat
                sed repellat enim et quos ipsam id praesentium sunt!
              </AboutDescription>
            </AboutMe>
            <ContactContainer>
              <GroupItem>
                <LabelItem>Site internet</LabelItem>
                <ContentLinkItem href="apple.fr" target="_blank">
                  axelDemorest.fr
                </ContentLinkItem>
              </GroupItem>
              <GroupItem>
                <LabelItem>Adresse email</LabelItem>
                <ContentItem>axel.demorest@gmail.com</ContentItem>
              </GroupItem>
              <GroupItem>
                <LabelItem>Type de membre</LabelItem>
                <ContentItem>Élève - L3</ContentItem>
              </GroupItem>
            </ContactContainer>
          </div>
        </AccountContainer>
        <ListUserTopics>
          <TopicAccount />
        </ListUserTopics>
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: row;
`;

const AccountContainer = styled.div`
  width: 70%;
  height: 100%;
`;

const Banner = styled.div`
  background: center/cover url(${banner});
  height: 30%;
  width: 100%;
`;

const UserInformations = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  margin-bottom: 40px;
`;

const UserIcon = styled.img`
  margin-top: -50px;
  border-radius: 50%;
  width: 17%;
  border: 2px solid #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const GlobalInformations = styled.div`
  margin: 0 70px 0 0;
`;

const UserPseudo = styled.h1`
  font-weight: bold;
  display: block;
  margin: 0;
  color: #222732;
`;

const UserShortDescription = styled.h3`
  color: #5c636e;
  font-weight: 500;
  font-size: 15px;
`;

const FollowButon = styled.button`
  background-color: #111727;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #111727de;
  }
`;

const AboutMe = styled.div`
  background-color: #f9fbfc;
  width: 50%;
  padding: 25px 25px;
  border-radius: 5px;
`;

const AboutTitle = styled.h3`
  font-weight: 600;
  color: #111727de;
`;

const AboutDescription = styled.p`
  color: #454a55;
  font-weight: 500;
`;

const ContactContainer = styled.div`
  background-color: #f9fbfc;
  width: 35%;
  padding: 25px 25px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

const GroupItem = styled.div`
  margin-bottom: 17px;
`;

const LabelItem = styled.p`
  color: #424755;
  font-weight: 600;
  margin-bottom: 7px;
`;

const ContentItem = styled.p`
  color: #111727de;
  margin: 0;
  font-weight: 700;
  &:hover {
    color: #233053de;
  }
`;

const ContentLinkItem = styled.a`
  color: #111727de;
  margin: 0;
  font-weight: 700;
  &:hover {
    color: #233053de;
  }
`;

const ListUserTopics = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: scroll;
`;

export default Account;
