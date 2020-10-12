import React from "react";
import { Pane } from "evergreen-ui";
import NotTodoItem from "./NotTodoItem";

const List = ({ setNotTodos, notTodos = [] }) => {
  const toggleIsDone = (notTodoId) => {
    const _notTodos = [...notTodos];
    const notTodoIndex = _notTodos.findIndex(
      (notTodo) => notTodo.id === notTodoId
    );
    const notTodo = _notTodos[notTodoIndex];

    notTodo.isDone = !notTodo.isDone;
    setNotTodos(_notTodos);
  };

  const deleteNotTodo = (notTodoId) => {
    const _notTodos = [...notTodos];
    const notTodoIndex = _notTodos.findIndex(
      (notTodo) => notTodo.id === notTodoId
    );

    _notTodos.splice(notTodoIndex, 1);

    setNotTodos(_notTodos);
  };

  const renderItems = () =>
    notTodos.map((notTodo, index) => (
      <NotTodoItem
        {...notTodo}
        key={index}
        handleTick={() => toggleIsDone(notTodo.id)}
        handleDelete={() => deleteNotTodo(notTodo.id)}
      />
    ));

  return (
    <Pane elevation={0} width={400} padding={4} borderRadius={3}>
      {notTodos.length !== 0 ? (
        renderItems()
      ) : (
        <Pane
          justifyContent="center"
          alignItems="center"
          display="flex"
          fontSize={14}
          padding={8}
        >
          Add your first !todo.
        </Pane>
      )}
    </Pane>
  );
};

export default List;
