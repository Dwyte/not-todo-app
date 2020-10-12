import React from "react";
import { Button, Pane, TextInput } from "evergreen-ui";

const Form = () => {
  return (
    <Pane
      borderRadius={4}
      elevation={0}
      padding={8}
      width={400}
      display="flex"
      marginBottom={12}
    >
      <TextInput placeholder="What are you not doing today?" flex={1} />
      <Button
        appearance="primary"
        intent="success"
        marginLeft={4}
        textAlign="center"
      >
        Add
      </Button>
    </Pane>
  );
};

export default Form;
