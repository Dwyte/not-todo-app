import React from "react";
import { Button, Pane, TextInput } from "evergreen-ui";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const SForm = styled.form`
  flex: 1;
`;

const Form = ({ addNotTodo }) => {
  const { register, handleSubmit } = useForm();

  return (
    <Pane
      marginBottom={12}
      borderRadius={4}
      display="flex"
      elevation={0}
      padding={8}
      width={400}
    >
      <SForm onSubmit={handleSubmit(addNotTodo)}>
        <TextInput
          placeholder="What are you not doing today?"
          ref={register({ required: true })}
          name="content"
          width="100%"
          autoFocus
        />
      </SForm>
      <Button
        onClick={handleSubmit(addNotTodo)}
        appearance="primary"
        textAlign="center"
        intent="success"
        marginLeft={4}
      >
        Add
      </Button>
    </Pane>
  );
};

export default Form;
