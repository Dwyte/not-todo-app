import React, { useState } from "react";
import { Pane } from "evergreen-ui";
import Form from "./Components/Form";
import List from "./Components/List";

const defaultNotTodos = [
  {
    id: 0,
    content: "Say bad words",
    isDone: false,
  },
  {
    id: 1,
    content: "Eat Chocolates",
    isDone: true,
  },
];

function App() {
  const [notTodos, setNotTodos] = useState(defaultNotTodos);

  const addNotTodo = (notTodo) => {
    const newNotTodo = { id: notTodos.length, ...notTodo };
    setNotTodos([...notTodos, newNotTodo]);
  };

  return (
    <Pane padding={16}>
      <Pane
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        display="flex"
      >
        <Form addNotTodo={addNotTodo} />
        <List notTodos={notTodos} setNotTodos={setNotTodos} />
      </Pane>
    </Pane>
  );
}

export default App;
