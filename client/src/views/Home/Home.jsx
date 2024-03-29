import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import banner from '../../assets/banner.jpg';
import styled from 'styled-components';
import './home.css';

const Home = () => {
    return (
        <div>
            <Navigation />
            <LineSeparator></LineSeparator>
            <GlobalContainer>
                <LeftContainer>
                    <BannerTitle>Aidons nos élèves à développer leurs compétences!</BannerTitle>
                    <BannerDescription>Ce forum a été conçu pour répondre aux questions de tous les élèves en difficultés dans leurs projets</BannerDescription>
                    <ButtonCreateQuestion>Créer un sujet</ButtonCreateQuestion>
                    <div className='list-benefits'>
                        <div>

                        </div>
                    </div>
                </LeftContainer>
                <RightContainer>
                    <img src={banner} style={{ marginTop: '20px' }} alt="Logo" width='100%' />
                </RightContainer>
            </GlobalContainer>
        </div>
    );
};

const LineSeparator = styled.hr`
    width: 90%;
    margin: auto;
    border: 1px solid #f1f1f1;
    border-radius: 5px;
`;

const GlobalContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 10px 20px;
    background-color: #FFFFFF;
`;

const LeftContainer = styled.div`
    width: 55%;
    margin-top: 80px;
    margin-left: 50px;
`;

const BannerTitle = styled.h1`
    font-size: 70px;
    font-weight: 800;
    color: #2F2F2F;
    line-height: 1.4em;
`;

const BannerDescription = styled.p`
    margin-top: 15px;
    line-height: 1.5em;
    letter-spacing: 0.3px;
    font-size: 20px;
    width: 80%;
    font-weight: 500;
    color: grey;
`;

const ButtonCreateQuestion = styled.button`
    &:hover {
        background-color: #FFFFFF;
        color: #A77FF2;
    }
    transition: color 0.2s, background-color 0.2s;
    cursor: pointer;
    border: 1px solid #A77FF2;
    background-color: #8B6ED8;
    color: #FFFFFF;
    border-radius: 20px;
    padding: 15px 40px;
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 30px;
`;

const RightContainer = styled.div`
    width: 45%;
`;


export default Home;
