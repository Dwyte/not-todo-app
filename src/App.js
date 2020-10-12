import React, { useState } from "react";
import { Pane } from "evergreen-ui";
import Form from "./Components/Form";
import List from "./Components/List";

function App() {
  const [notTodos, setNotTodos] = useState([]);

  const addNotTodo = (notTodo) => {
    setNotTodos([...notTodos, notTodo]);
  };

  return (
    <Pane padding={16}>
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Form addNotTodo={addNotTodo} />

        <List items={notTodos} />
      </Pane>
    </Pane>
  );
}

export default App;
