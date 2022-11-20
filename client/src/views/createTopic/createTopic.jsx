/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navigation from "../../components/navigation/Navigation";
import CreatableSelect from "react-select/creatable";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const createTopic = () => {
  const [values, setValues] = useState({
    content: "",
  });
  const [input, setInput] = useState();

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#e2e7ea",
      color: "#666f74",
      fontSize: "16px",
      lineHeight: "25px",
      border: "1px solid #e2e7ea",
      boxShadow: "none",
      outline: "0",
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
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: "#d2d7da",
      };
    },
  };

  return (
    <div>
      <Navigation />
      <CreateQuestionContainer>
        <HeaderForm>
          <CreateQuestionTitle>Créer une nouvelle question</CreateQuestionTitle>
        </HeaderForm>
        <Form>
          <FormGroup>
            <LabelCustom htmlFor="title_question">
              Titre de la question
            </LabelCustom>
            <InputCustom
              placeholder="Sujet de la question"
              name="title_question"
            />
            <SmallDescription>
              Votre titre doit globalement résumer votre problème ou demande
              avec le moins de caractère possible.
            </SmallDescription>
          </FormGroup>
          <FormGroup>
            <LabelCustom htmlFor="title_question">
              Catégorie de la question
            </LabelCustom>
            <CreatableSelect
              isMulti
              styles={customStyles}
              options={[
                {
                  value: "ocean",
                  label: "Ocean",
                  color: "#00B8D9",
                  isFixed: true,
                },
                {
                  value: "blue",
                  label: "Blue",
                  color: "#0052CC",
                  isDisabled: true,
                },
                { value: "purple", label: "Purple", color: "#5243AA" },
                { value: "red", label: "Red", color: "#FF5630", isFixed: true },
                { value: "orange", label: "Orange", color: "#FF8B00" },
                { value: "yellow", label: "Yellow", color: "#FFC400" },
                { value: "green", label: "Green", color: "#36B37E" },
                { value: "forest", label: "Forest", color: "#00875A" },
                { value: "slate", label: "Slate", color: "#253858" },
                { value: "silver", label: "Silver", color: "#666666" },
              ]}
            />
            <SmallDescription>
              Votre titre doit globalement résumer votre problème ou demande
              avec le moins de caractère possible.
            </SmallDescription>
          </FormGroup>
          <FormGroup>
            <LabelCustom htmlFor="content">Contenu de la question</LabelCustom>
            <TextareaCustom name="content" rows="6" onChange={onChange} />
            <ReactMarkdownCustom
              children={input}
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
              Votre titre doit globalement résumer votre problème ou demande
              avec le moins de caractère possible.
            </SmallDescription>
          </FormGroup>
        </Form>
      </CreateQuestionContainer>
    </div>
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
`;

const CreateQuestionTitle = styled.h2`
  color: #313344;
  margin: 0;
`;

const Form = styled.form`
  margin-top: 30px;
`;

const FormGroup = styled.div``;

const InputCustom = styled.input`
  background-color: #e2e7ea;
  color: #666f74;
  border: none;
  font-size: 16px;
  line-height: 25px;
  padding: 7px 12px 10px 13px;
  height: 39px;
  border: 1px solid #e2e7ea;
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
  background-color: #e2e7ea;
  color: #666f74;
  border: none;
  font-size: 16px;
  line-height: 25px;
  padding: 7px 12px 10px 13px;
  border: 1px solid #e2e7ea;
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
  font-weight: 600;
  font-size: 17px;
  line-height: 26px;
  color: #182730;
  margin-bottom: 0;
  letter-spacing: 0.01em;
  padding-bottom: 22px;
  display: block;
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

export default createTopic;
