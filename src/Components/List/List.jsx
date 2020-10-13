import React, { useState } from "react";
import NotTodoItem from "./NotTodoItem";
import NotTodoEdit from "./NotTodoEdit";
import { Pane, SegmentedControl, Dialog, InlineAlert } from "evergreen-ui";
import { useEffect } from "react";

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Current", value: "current" },
  { label: "Done", value: "done" },
];

const List = ({ setNotTodos, notTodos = [] }) => {
  const [filteredNotTodos, setFilteredNotTodos] = useState(notTodos);
  const [notTodoOnEditId, setNotTodoOnEditId] = useState(null);
  const [notTodoOnDelete, setNotTodoOnDelete] = useState(null);
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

  const confirmDeletion = () => {
    deleteNotTodo(notTodoOnDelete.id);
    setNotTodoOnDelete(null);
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
          handleDelete={() => setNotTodoOnDelete(notTodo)}
          handleEdit={() => setNotTodoOnEditId(notTodo.id)}
        />
      )
    );

  return (
    <Pane elevation={1} width={400} padding={4} borderRadius={3}>
      <Dialog
        onConfirm={confirmDeletion}
        onCancel={() => setNotTodoOnDelete(null)}
        isShown={notTodoOnDelete !== null}
        preventBodyScrolling={true}
        confirmLabel="Delete"
        hasHeader={false}
        borderRadius={0}
        intent="danger"
      >
        <Pane
          background="tint2"
          marginBottom={4}
          borderRadius={4}
          fontSize={14}
          padding={8}
        >
          <i>"{notTodoOnDelete && notTodoOnDelete.content}"</i>
        </Pane>
        <InlineAlert intent="danger">This cannot be undone.</InlineAlert>
      </Dialog>

      <SegmentedControl
        onChange={(value) => setNotTodoFilter(value)}
        options={filterOptions}
        value={notTodoFilter}
        height={24}
        margin={4}
      />

      <Pane height={230} overflowY="auto" overflowX="hidden">
        {filteredNotTodos.length !== 0 ? (
          renderTodos()
        ) : (
          <Pane
            justifyContent="center"
            alignItems="center"
            background="tint2"
            borderRadius={3}
            display="flex"
            fontSize={14}
            padding={8}
            margin={4}
          >
            {notTodoFilter === "done"
              ? "No completed !Todos yet."
              : "Add your first !Todo."}
          </Pane>
        )}
      </Pane>
    </Pane>
  );
};

export default List;
