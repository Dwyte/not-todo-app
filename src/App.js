import React, { useState } from "react";
import { Pane } from "evergreen-ui";
import Form from "./Components/Form";
import List from "./Components/List";
import Title from "./Components/Title";
import Footer from "./Components/Footer";

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

  const addNotTodo = (notTodo, e) => {
    e.target.reset();
    const newNotTodo = { id: notTodos.length, ...notTodo };
    setNotTodos([...notTodos, newNotTodo]);
  };

  return (
    <Pane
      padding={16}
      marginTop={-32}
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      display="flex"
      height="100%"
    >
      <Pane
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        display="flex"
      >
        <Title />
        <Form addNotTodo={addNotTodo} />
        <List notTodos={notTodos} setNotTodos={setNotTodos} />
        <Footer />
      </Pane>
    </Pane>
  );
}

export default App;
