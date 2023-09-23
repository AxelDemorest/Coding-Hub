import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Navigation from '../../../components/navigation/Navigation';
import { AiOutlineHeart } from "react-icons/ai";
import {getTopic} from "../../../api/services/topicServices";
import {useParams} from "react-router-dom";
import {getPostsInTopic} from "../../../api/services/postServices";

const Topic = () => {
    const { id } = useParams();
    const [topic, setTopic] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await getTopic(id);
            setTopic(response);
        }

        fetchData();
    }, []);

    return (
        <div>
            <Navigation />
            <Container>
                <QuestionContainer>
                    <TopicItem>
                        <Header>
                            <Title>{topic.title}</Title>
                        </Header>
                        <ResponseAuthor>
                            <Avatar style={{ width: '35px' }} src="https://zupimages.net/up/21/06/3w5i.png" alt=""/>
                            <div>
                                <Author>{topic.author?.username}</Author>
                                <QuestionCreatedAt>Publié <span>Il y a 3 jours</span></QuestionCreatedAt>
                            </div>
                        </ResponseAuthor>
                        <QuestionContent>
                            {topic.content}
                        </QuestionContent>
                    </TopicItem>
                    <AnswersCount>{topic.posts?.length} réponses</AnswersCount>
                </QuestionContainer>
                <ResponseContainer>
                    <div style={{ width: '75%' }}>
                        {topic.posts?.map((element, index) => (
                            <Answer key={index}>
                                <Answer__header>
                                    <Answer__user>
                                        <Avatar src="https://zupimages.net/up/21/06/3w5i.png" alt=""/>
                                        <div>
                                            {element.author?.username}
                                            <ResponseDate>testestest</ResponseDate>
                                        </div>
                                    </Answer__user>
                                    <Icon>
                                        <AiOutlineHeart size={24} />
                                    </Icon>
                                </Answer__header>
                                <ResponseContent>{element.content}</ResponseContent>
                            </Answer>
                        ))}
                    </div>
                </ResponseContainer>
            </Container>
        </div>
    );
};

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #FFFFFF;
  padding: 25px 45px;
  border-bottom: 1px solid #d0d0d0;
  min-height: 250px;
`;

const QuestionCreatedAt = styled.div`
  font-size: 11px;
  display: inline-block;
  color: #A0A3BD;
  
    span {
      color: #3B82F6;
      margin-left: 3px;
    }
`;

const QuestionContent = styled.p`
  margin-top: 20px;
  font-size: 17px;
  text-align: justify;
  color: #4B5563;
  line-height: 1.5;
`;

const Author = styled.p`
  display: block;
  font-size: 13px;
  margin-bottom: 3px;
  color: #2c2c2c;
  font-family: 'MontserratMedium', sans-serif;
`;

const ResponseContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f8f8f8;
  min-height: calc(100vh - 340px);
`;

const TopicItem = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  color: #3a3a3a;
  font-size: 30px;
  font-family: 'MontserratBold', sans-serif;
`;

const AnswersCount = styled.p`
  font-size: 14px;
  padding: 10px;
`;

const Answer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding: 20px;
  background-color: #FFFFFF;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin-top: 15px;

  :first-child {
    margin-top: 0;
  }
`;

const Avatar = styled.img`
  width: 40px;
  margin-right: 10px;
`;

const ResponseAuthor = styled.div`
  color: #3a3a3a;
  font-family: 'MontserratMedium', sans-serif;
  font-size: 14px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Answer__header = styled.div`
  color: #3a3a3a;
  font-family: 'MontserratMedium', sans-serif;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Answer__user = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ResponseDate = styled.div`
  color: #99A5B2;
  font-size: 11px;
  margin-top: 5px;
  display: block;
`;

const ResponseContent = styled.p`
  color: #2f323e;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 15px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: #e84848;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;


export default Topic;
