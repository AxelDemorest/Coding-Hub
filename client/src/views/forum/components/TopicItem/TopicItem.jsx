import React from 'react';
import styled from "styled-components";
import SubContainer from "../SubContainer/SubContainer";
import {Link} from "react-router-dom";

const TopicItem = ({ topic }) => {

    const truncate = (str) => {
        return str.length > 200 ? str.substring(0, 200) + "..." : str;
    };

    return (
        <QuestionItem key={`question-${topic.id}`}>
            <div>
                <Header>
                    <TitleQuestion to={`topic/${topic.id}`}>{topic.title}</TitleQuestion>
                    <div>
                        {topic.is_resolved ? (
                            <ResolvedTag>Sujet résolu</ResolvedTag>
                        ) : (
                            <NotResolvedTag>Sujet non résolu</NotResolvedTag>
                        )}
                    </div>
                </Header>
            </div>
            <QuestionContent>{truncate(topic.content)}</QuestionContent>
            <QuestionFooter>
                <QuestionAuthor>{topic.author.username}</QuestionAuthor>
                <div>
                    <QuestionReplies>{topic.posts?.length || '0'} réponse{topic.posts?.length > 1 && 's'}</QuestionReplies>
                </div>
            </QuestionFooter>
        </QuestionItem>
    );
};

const QuestionItem = styled(SubContainer)`
  padding: 20px 25px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #dfdfdf;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TitleQuestion = styled(Link)`
  font-family: "MontserratMedium", sans-serif;
  font-size: 17px;
  cursor: pointer;
  text-decoration: none;
  color: #0f75c8;
  display: inline-block;
  margin-right: 15px;
  margin-bottom: 0;

  &:hover {
    color: #1182de;
  }
`;

const ResolvedTag = styled.span`
  font-size: 12px;
  color: #0ecc8e;
  border: 1px solid #4dda9d;
  background-color: #d7faef;
  border-radius: 5px;
  padding: 4px 7px;
`;

const NotResolvedTag = styled.span`
  font-size: 12px;
  color: #cc0e0e;
  border: 1px solid #da4d4d;
  background-color: #fad7d7;
  border-radius: 5px;
  padding: 4px 7px;
`;

const QuestionContent = styled.p`
  font-size: 15px;
  margin-top: 15px;
  color: #656f7c;
`;

const QuestionFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const QuestionAuthor = styled.p`
  font-size: 13px;
  color: #0f75c8;
  cursor: pointer;

  &:hover {
    color: #1e92f1;
  }
`;

const QuestionReplies = styled.p`
  color: #8e8e8e;
  font-size: 13px;
`;

export default TopicItem;
