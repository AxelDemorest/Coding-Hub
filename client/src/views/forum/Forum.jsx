import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navigation from '../../components/navigation/navigation';

const Forum = () => {
    const [questions, setQuestions] = useState([]);

    const getQuestions = async () => {
        const { data } = await axios.get('http://localhost:3001/questions/questions');
        setQuestions(data);
    };

    useEffect(() => {
        getQuestions();
    }, []);

    return (
        <div>
            <Navigation />
            <ForumContainer>
                <SideContainer></SideContainer>
                <ListTopics>
                        <TitleList>Liste des questions</TitleList>
                    <ContainerInList>
                        <HeaderTitle>Questions</HeaderTitle>
                        <HeaderTitle>Réponses</HeaderTitle>
                    </ContainerInList>
                    {questions.map((question) => (
                        <ContainerInList key={question._id} style={{ marginTop: '10px' }}>
                            <div>
                                <QuestionTitle>{question.title}</QuestionTitle>
                                <QuestionAuthor>Alexis Demorest <QuestionCreatedDate>Mardi 3 Juillet</QuestionCreatedDate></QuestionAuthor>
                            </div>
                            <NumberReplies>34</NumberReplies>
                        </ContainerInList>
                    ))}
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

const ContainerInList = styled.div`
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
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
    display: inline-block;
    margin-right: 50px;
    color: #505050;
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
    font-size: 15px;
    font-weight: 600;
    margin-right: 95px;
    color: black;
`;

const Tag = styled.p`
    margin-right: 45px;
`;

const QuestionCreatedDate = styled.span`
    color: #99A5B2;
    margin-left: 10px;
`;

const SideContainer = styled.div`
    width: 20%;
    background-color: #FFFFFF;
    border-radius: 10px;
    height: 100px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;



export default Forum;