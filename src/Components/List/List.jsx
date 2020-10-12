import React, { useState } from "react";
import NotTodoItem from "./NotTodoItem";
import NotTodoEdit from "./NotTodoEdit";
import { Pane } from "evergreen-ui";

const List = ({ setNotTodos, notTodos = [] }) => {
  const [notTodoOnEditId, setNotTodoOnEditId] = useState();

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

  const saveNotTodo = (newNotTodo) => {
    const _notTodos = [...notTodos];
    const notTodoIndex = _notTodos.findIndex(
      (notTodo) => notTodo.id === notTodoOnEditId
    );
    _notTodos[notTodoIndex] = { ...notTodos[notTodoIndex], ...newNotTodo };
    setNotTodos(_notTodos);
    setNotTodoOnEditId(null);
  };

  const renderItems = () =>
    notTodos.map((notTodo, index) =>
      notTodoOnEditId === notTodo.id ? (
        <NotTodoEdit content={notTodo.content} onSave={saveNotTodo} />
      ) : (
        <NotTodoItem
          {...notTodo}
          key={index}
          handleTick={() => toggleIsDone(notTodo.id)}
          handleDelete={() => deleteNotTodo(notTodo.id)}
          handleEdit={() => setNotTodoOnEditId(notTodo.id)}
        />
      )
    );

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
