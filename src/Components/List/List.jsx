import React, { useState } from "react";
import NotTodoItem from "./NotTodoItem";
import NotTodoEdit from "./NotTodoEdit";
import { Pane, SegmentedControl, Dialog } from "evergreen-ui";
import { useEffect } from "react";

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Current", value: "current" },
  { label: "Done", value: "done" },
];

const List = ({ setNotTodos, notTodos = [] }) => {
  const [filteredNotTodos, setFilteredNotTodos] = useState(notTodos);
  const [notTodoOnEditId, setNotTodoOnEditId] = useState(null);
  const [notTodoOnDeleteId, setNotTodoOnDeleteId] = useState(null);
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
    deleteNotTodo(notTodoOnDeleteId);
    setNotTodoOnDeleteId(null);
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
          handleDelete={() => setNotTodoOnDeleteId(notTodo.id)}
          handleEdit={() => setNotTodoOnEditId(notTodo.id)}
        />
      )
    );

  return (
    <Pane elevation={1} width={400} padding={4} borderRadius={3}>
      <Dialog
        onCloseComplete={confirmDeletion}
        onCancel={() => setNotTodoOnDeleteId(null)}
        isShown={notTodoOnDeleteId !== null}
        preventBodyScrolling={true}
        confirmLabel="Delete"
        hasHeader={false}
        borderRadius={0}
        intent="danger"
      >
        Are you sure you want to delete this !Todo? This cannot be undone.
      </Dialog>

      <SegmentedControl
        onChange={(value) => setNotTodoFilter(value)}
        options={filterOptions}
        value={notTodoFilter}
        height={24}
        margin={4}
      />

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
  );
};

export default List;
