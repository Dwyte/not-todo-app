import React from "react";
import { Pane } from "evergreen-ui";
import Form from "./Components/Form";
import List from "./Components/List";

function App() {
  return (
    <Pane padding={16}>
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Form />

        <List />
      </Pane>
    </Pane>
  );
}

export default App;
