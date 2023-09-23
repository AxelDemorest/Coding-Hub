/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navigation from "../../components/navigation/Navigation";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Select from 'react-select';
import {useNavigate} from "react-router-dom";
import {createNewTopic} from "../../api/services/topicServices";
import {message} from "antd";
import {getCategories} from "../../api/services/categoryServices";

export default function CreateTopic() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [category, setCategory] = useState(null);
  const [categoriesList, setCategoriesList] = useState(null);
  const [values, setValues] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCategories();
      setCategoriesList(response?.map(category => {
        return {
          value: category.id,
          label: category.category_name,
        }
      }));
    }

    fetchData();
  }, []);

  const handleCategoryChange = (selectedOption) => {
    setCategory(selectedOption);
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#edf0f1",
      fontSize: "16px",
      lineHeight: "25px",
      padding: "5px 0",
      border: "1px solid #c6c7c7",
      boxShadow: "none",
      outline: "0",
      cursor: 'pointer',
      width: "100%",
      fontWeight: "500",
      letterSpacing: "0.01em",
      borderRadius: "3px",
      marginBottom: "5px",
      transition: "border-color 0.2s linear",
      "&:focus": {
        borderColor: state.isFocused ? "#2172cd" : "",
      },
    }),
  };

  const onFinish = async (e) => {
    e.preventDefault();

    const formData = {
      title: values.title,
      content: values.content,
      categoryId: category.value,
    }

    const response = await createNewTopic(formData);
    if (!response) {
      messageApi.open({
        type: 'error',
        content: 'Une erreur est survenue lors de la création du sujet.',
      });
    } else {
      setTimeout(() => {
        navigate(`/forum/topic/${response.id}`);
      }, 1000)
      messageApi.open({
        type: 'success',
        content: 'Votre sujet a bien été crée !',
      });
    }
  };

  return (
      <>
        {contextHolder}
        <div>
          <Navigation />
          <CreateQuestionContainer>
            <HeaderForm>
              <CreateQuestionTitle>Créer un <span>sujet</span></CreateQuestionTitle>
              <p>Assurez-vous de formuler votre question de manière concise et claire pour faciliter la compréhension et obtenir des réponses pertinentes.</p>
            </HeaderForm>
            <Form
                onSubmit={onFinish}
            >
              <FormGroup>
                <LabelCustom htmlFor="title_question">
                  Titre
                </LabelCustom>
                <InputCustom
                    name="title"
                    onChange={onChange}
                    styles={customStyles}
                />
                <SmallDescription>
                  Votre titre doit globalement résumer votre problème ou demande
                  avec le moins de caractère possible.
                </SmallDescription>
              </FormGroup>
              <FormGroup>
                <LabelCustom htmlFor="title_question">
                  Catégorie
                </LabelCustom>
                <Select
                    name="category"
                    placeholder={'Choisissez une catégorie'}
                    options={categoriesList}
                    onChange={handleCategoryChange}
                    styles={customStyles}
                />
                <SmallDescription>
                  la catégorie permet de classer votre sujet dans une thématique.
                </SmallDescription>
              </FormGroup>
              <FormGroup style={{ width: '100%' }}>
                <LabelCustom htmlFor="content">Contenu</LabelCustom>
                <TextareaCustom name="content" rows="6" onChange={onChange} />
                <ReactMarkdownCustom
                    children={values.content}
                    remarkPlugins={[remarkGfm]}
                    components={{
                      code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={docco}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                        )
                      }
                    }}
                />
                <SmallDescription>
                  Votre contenu doit être le plus détaillé possible pour permettre aux autres utilisateurs de vous aider.
                </SmallDescription>
              </FormGroup>
              <SubmitButton htmlType="submit">Créer le sujet</SubmitButton>
            </Form>
          </CreateQuestionContainer>
        </div>
      </>
  );
};

const CreateQuestionContainer = styled.div`
  width: 100%;
  padding: 40px 180px;
  background-color: #f7f7f7;
`;

const HeaderForm = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid #e2e7ea;
  
  p {
    font-size: 22px;
    margin-top: 10px;
    line-height: 35px;
    width: 70%;
  }
`;

const CreateQuestionTitle = styled.h2`
  color: #313344;
  font-size: 45px;
  font-family: "MontserratBold", sans-serif;
  margin: 0;
  
  span {
    color: #e84848;
    font-family: "MontserratBold", sans-serif;
  }
`;

const Form = styled.form`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FormGroup = styled.div`
  width: 48%;
  margin-bottom: 35px;
`;

const InputCustom = styled.input`
  background-color: #edf0f1;
  color: #000000;
  font-size: 16px;
  line-height: 25px;
  padding: 12px 12px 12px 13px;
  border: 1px solid #c6c7c7;
  box-shadow: none;
  outline: 0;
  width: 100%;
  font-weight: 500;
  letter-spacing: 0.01em;
  border-radius: 3px;
  margin-bottom: 5px;
  transition: border-color 0.2s linear;

  &:focus {
    border-color: #2172cd;
  }
`;

const TextareaCustom = styled.textarea`
  background-color: #edf0f1;
  color: #000000;
  font-size: 16px;
  line-height: 25px;
  padding: 12px 12px 12px 13px;
  border: 1px solid #c6c7c7;
  box-shadow: none;
  outline: 0;
  width: 100%;
  font-weight: 500;
  letter-spacing: 0.01em;
  border-radius: 3px;
  margin-bottom: 5px;
  transition: border-color 0.2s linear;

  &:focus {
    border-color: #2172cd;
  }
`;

const LabelCustom = styled.label`
  font-size: 14px;
  line-height: 26px;
  color: #182730;
  letter-spacing: 0.01em;
  margin-bottom: 6px;
  text-transform: uppercase;
  display: block;
  font-family: "MontserratMedium", sans-serif;
`;

const SmallDescription = styled.p`
  color: #666f74;
  font-size: 14px;
  margin-top: 5px;
  letter-spacing: 0.01em;
`;

const ReactMarkdownCustom = styled(ReactMarkdown)`
  height: 300px;
  width: 100%;
  border: 1px solid #e2e7ea;
  overflow: scroll;
  padding: 10px;
`;

const SubmitButton = styled.button`
  background-color: #e84848;
  color: #ffffff;
  font-size: 15px;
  line-height: 25px;
  padding: 10px 15px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  outline: 0;
  font-family: "MontserratSemiBold", sans-serif;
  
  &:hover {
    background-color: #d33e3e;
  }
`;
