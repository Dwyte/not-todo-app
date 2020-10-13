import React from "react";
import { Pane, TextInput, IconButton, SavedIcon } from "evergreen-ui";
import { useForm } from "react-hook-form";
import { SForm } from "../Form";

const NotTodoEdit = ({ content, onSave }) => {
  const { handleSubmit, register } = useForm();

  return (
    <Pane display="flex" padding={4} margin={4}>
      <SForm onSubmit={handleSubmit(onSave)}>
        <TextInput
          ref={register({ required: true })}
          defaultValue={content}
          name="content"
          width="100%"
          autoFocus
        />
      </SForm>

      <IconButton
        onClick={handleSubmit(onSave)}
        appearance="primary"
        icon={SavedIcon}
        intent="success"
        marginLeft={4}
      />
    </Pane>
  );
};

export default NotTodoEdit;
