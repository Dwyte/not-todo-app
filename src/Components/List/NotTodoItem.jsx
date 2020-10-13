import React from "react";
import {
  Pane,
  IconButton,
  TrashIcon,
  EditIcon,
  TickIcon,
  UndoIcon,
} from "evergreen-ui";
import styled from "styled-components";

const SPane = styled(Pane)`
  cursor: pointer;

  button {
    visibility: hidden;
  }

  :hover {
    button {
      visibility: visible;
    }
  }
`;

const NotTodoItem = ({
  content,
  isDone,
  handleTick,
  handleDelete,
  handleEdit,
}) => {
  return (
    <SPane display="flex" padding={4} margin={4}>
      <Pane
        textDecoration={isDone && "line-through"}
        alignItems="center"
        paddingLeft={4}
        display="flex"
        flex={1}
      >
        {content.substring(0, 24) || "Content Placeholder"}
        {content.length > 24 && "..."}
      </Pane>

      <IconButton
        onClick={handleDelete}
        appearance="primary"
        icon={TrashIcon}
        intent="danger"
        marginLeft={4}
      />
      <IconButton
        onClick={handleEdit}
        appearance="primary"
        intent="default"
        icon={EditIcon}
        marginLeft={4}
      />

      <IconButton
        icon={isDone ? UndoIcon : TickIcon}
        onClick={handleTick}
        appearance="primary"
        intent="success"
        marginLeft={4}
      />
    </SPane>
  );
};

export default NotTodoItem;
