import React from 'react';
import styled from 'styled-components';
import Navigation from '../../../components/navigation/navigation';

const Question = () => {

    const listResponses = [
        {
            "author": "Axel Demorest",
            "date": "Mardi 3 Juillet",
            "content": "C'est la réponse de la question",
            "likes": 10,
        },
        {
            "author": "Axel Demorest",
            "date": "Mardi 3 Juillet",
            "content": "C'est la réponse de la question",
            "likes": 10,
        },
        {
            "author": "Axel Demorest",
            "date": "Mardi 3 Juillet",
            "content": "C'est la réponse de la question",
            "likes": 10,
        },
        {
            "author": "Axel Demorest",
            "date": "Mardi 3 Juillet",
            "content": "C'est la réponse de la question",
            "likes": 10,
        },
        {
            "author": "Axel Demorest",
            "date": "Mardi 3 Juillet",
            "content": "C'est la réponse de la question",
            "likes": 10,
        },
        {
            "author": "Axel Demorest",
            "date": "Mardi 3 Juillet",
            "content": "C'est la réponse de la question",
            "likes": 10,
        },
        {
            "author": "Axel Demorest",
            "date": "Mardi 3 Juillet",
            "content": "C'est la réponse de la question",
            "likes": 10,
        },
        {
            "author": "Axel Demorest",
            "date": "Mardi 3 Juillet",
            "content": "C'est la réponse de la question",
            "likes": 10,
        },
        {
            "author": "Axel Demorest",
            "date": "Mardi 3 Juillet",
            "content": "C'est la réponse de la question",
            "likes": 10,
        },
        {
            "author": "Axel Demorest",
            "date": "Mardi 3 Juillet",
            "content": "C'est la réponse de la question",
            "likes": 10,
        },
        {
            "author": "Axel Demorest",
            "date": "Mardi 3 Juillet",
            "content": "C'est la réponse de la question",
            "likes": 10,
        },
        {
            "author": "Nohan Marie-Louise",
            "date": "Mardi 3 Juillet",
            "content": "C'est la réponse de la question",
            "likes": 10,
        },
    ];

    return (
        <div>
            < Navigation />
            <Container>
                <QuestionContainer>
                    <HeaderQuestion>
                        <HeaderTitle>Questions</HeaderTitle>
                    </HeaderQuestion>
                    <Topic>
                        <QuestionHeader>
                            <QuestionTitle>C'est quoi une variable en PHP ?</QuestionTitle>
                            <QuestionStats>
                                <QuestionCreatedAt>created <span>3d ago</span></QuestionCreatedAt>

                            </QuestionStats>
                        </QuestionHeader>
                        <QuestionAuthor>Alexis Demorest <QuestionCreatedDate>Mardi 3 Juillet</QuestionCreatedDate></QuestionAuthor>
                        <QuestionContent>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel cum numquam, itaque repellendus, aut ut nostrum delectus, consequuntur iste tempora eius a. Sit iste porro reprehenderit debitis at, praesentium velit.
                                Nam temporibus ratione, doloribus illo voluptatibus maiores molestias? Expedita, eveniet fugit quasi voluptatum ullam, nulla repellat incidunt velit pariatur alias fugiat nam nesciunt repellendus? Voluptate repellendus nihil sapiente est eum.
                                Deserunt, quaerat doloribus error, sequi veritatis vitae tempora iste sapiente numquam illo repellat libero sit laboriosam id illum eos alias soluta dicta dolorem voluptatum dolorum ut architecto dolore possimus! Laborum.
                                Vitae voluptatem, iure aut provident culpa similique perferendis dicta facere assumenda quis blanditiis quo voluptate reiciendis maiores. Similique omnis alias sequi porro. Recusandae eos possimus ex hic suscipit accusantium consequatur!
                                Sint mollitia suscipit repellat eos iure tempore illum sit atque minima ea aspernatur omnis quam nesciunt quas itaque recusandae, aliquam voluptas corrupti porro, rem alias officiis. Tenetur nesciunt similique obcaecati?
                                Ab, consectetur. Sed vero eligendi veniam quam voluptatum neque delectus? Officia, ab dignissimos voluptate voluptates et quae possimus doloremque, deleniti culpa quam praesentium adipisci? Dolorem debitis iure praesentium illo! Quidem!
                                Error voluptates, nisi ipsum quis dolorem saepe beatae! Aut repellat earum dolores nulla natus explicabo fuga beatae, tenetur nisi doloribus consequatur placeat cumque minima odio iusto pariatur sed inventore eos.
                                Sed nulla corrupti facere voluptates aliquam minima aperiam quod hic itaque. Culpa neque sapiente beatae mollitia et dolores, officia, explicabo commodi perspiciatis, aspernatur illo. Saepe maiores unde voluptatum animi recusandae.
                            </p>
                        </QuestionContent>
                    </Topic>
                </QuestionContainer>
                <ResponseContainer>
                    <HeaderTitle>Réponses</HeaderTitle>
                    {listResponses.map((element, index) => (
                        <Response>
                            <ResponseAuthor>{element.author} <ResponseDate>{element.date}</ResponseDate></ResponseAuthor>
                            <ResponseContent>{element.content}</ResponseContent>
                            <ResponseStats>{element.likes} likes</ResponseStats>
                        </Response>
                    ))}

                </ResponseContainer>
            </Container>
        </div>
    );
};

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 90px);
    padding: 20px;
    background-color: #F9FAFC;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const HeaderQuestion = styled.div`
    
`;

const QuestionHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    width: 49%;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 15px 40px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const QuestionStats = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`;

const QuestionCreatedAt = styled.div`
    font-size: 12px;
    color: #A0A3BD;
    span {
        display: block;
        color: #3B82F6;
    }
`;

const QuestionContent = styled.div`
    margin: 40px 0;
    p {
        font-size: 14px;
        text-align: justify;
        color: #4B5563;
    }
`;

const QuestionAuthor = styled.div`
    font-size: 12px;
    color: #A0A3BD;
`;

const QuestionCreatedDate = styled.span`
    font-size: 12px;
    color: #A0A3BD;
    margin-left: 10px;
`;

const ResponseContainer = styled.div`
    width: 50%;
    padding: 20px;
    overflow-y: scroll;
`;
const Topic = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

const QuestionTitle = styled.p`
    color: black;
    font-size: 20px;
    font-weight: 600;
`;

const HeaderTitle = styled.h2`
    font-weight: 500;
    text-align: center;
`;

const Response = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding: 10px;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const ResponseAuthor = styled.p`
    color: black;
    font-weight: 500;
    font-size: 13px;
    margin-top: 3px;
`;

const ResponseDate = styled.span`
    color: #99A5B2;
    margin-left: 10px;
`;

const ResponseContent = styled.p`
    color: black;
    font-weight: 500;
    font-size: 13px;
    margin-top: 15px;
    margin-left: 10px;
`;

const ResponseStats = styled.p`
    color: black;
    font-weight: 500;
    font-size: 13px;
    margin-top: 15px;
    margin-left: 10px;
`;

export default Question;