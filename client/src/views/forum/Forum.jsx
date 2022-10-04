import React from 'react';
import styled from 'styled-components';
import Navigation from '../../components/navigation/Navigation';

const Forum = () => {

    const listHeaderTitle = ['Réponses', 'Tags'];

    return (
        <div>
            <Navigation />
            <ForumContainer>
                <SideContainer></SideContainer>
                <ListTopics>
                    <TitleList>Liste des questions</TitleList>
                    <HeaderTable>
                        <HeaderTitle>Questions</HeaderTitle>
                        <div>
                            {listHeaderTitle.map((element, index) => (
                                <HeaderTitle>{element}</HeaderTitle>
                            ))}
                        </div>
                    </HeaderTable>
                    <div style={{ marginTop: '10px' }}>
                        <Topic>
                            <div>
                                <QuestionTitle>C'est quoi une variable en PHP ?</QuestionTitle>
                                <QuestionAuthor>Alexis Demorest <QuestionCreatedDate>Mardi 3 Juillet</QuestionCreatedDate></QuestionAuthor>
                            </div>
                            <div>
                                <NumberReplies>34</NumberReplies>
                                <Tag>PHP</Tag>
                            </div>
                        </Topic>
                        <LineSeparator />
                    </div>
                </ListTopics>
                <SideContainer></SideContainer>
            </ForumContainer>
        </div>
    );
};

const ForumContainer = styled.div`
    width: 100%;
    height: calc(100vh - 90px);
    padding: 20px;
    background-color: #F9FAFC;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const TitleList = styled.h2`
    font-weight: 500;
    margin-left: 15px;
`;

const ListTopics = styled.div`
    width: 58%;
    background-color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;

const HeaderTable = styled.div`
    width: 100%;
    background-color: #F9FAFC;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-top: 25px;
`;

const HeaderTitle = styled.p`
    color: black;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
    display: inline-block;
    margin-right: 50px;
    color: #505050;
`;

const Topic = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const QuestionTitle = styled.p`
    color: black;
    font-weight: 600;
`;

const QuestionAuthor = styled.p`
    color: black;
    font-weight: 500;
    font-size: 13px;
    margin-top: 15px;
`;

const NumberReplies = styled.p`
    color: black;
    display: inline-block;
    margin-right: 50px;
`;

const Tag = styled.p`
`;

const QuestionCreatedDate = styled.span`
    color: #99A5B2;
    margin-left: 10px;
`;

const LineSeparator = styled.hr`
    width: 100%;
    margin: auto;
    border: 0.5px solid #f1f1f1;
`;

const SideContainer = styled.div`
    width: 20%;
    background-color: #FFFFFF;
    border-radius: 10px;
    height: 100px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;



export default Forum;