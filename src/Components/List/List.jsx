import React, { useState } from "react";
import NotTodoItem from "./NotTodoItem";
import NotTodoEdit from "./NotTodoEdit";
import { Pane, SegmentedControl } from "evergreen-ui";
import { useEffect } from "react";

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Current", value: "current" },
  { label: "Done", value: "done" },
];

const List = ({ setNotTodos, notTodos = [] }) => {
  const [filteredNotTodos, setFilteredNotTodos] = useState(notTodos);
  const [notTodoOnEditId, setNotTodoOnEditId] = useState();
  const [notTodoFilter, setNotTodoFilter] = useState("all");

  useEffect(() => {
    const _filteredNotTodos = notTodos.filter((notTodo) => {
      if (notTodoFilter === "all") return true;
      else if (notTodoFilter === "current") return !notTodo.isDone;
      else return notTodo.isDone;
    });

    setFilteredNotTodos(_filteredNotTodos);
  }, [notTodos, notTodoFilter]);

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

  const renderTodos = () =>
    filteredNotTodos.map((notTodo, index) =>
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
      <SegmentedControl
        onChange={(value) => setNotTodoFilter(value)}
        options={filterOptions}
        value={notTodoFilter}
        height={24}
        margin={4}
      />

      {notTodos.length !== 0 ? (
        renderTodos()
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
