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

const Item = ({ content, isDone, handleTick, handleDelete }) => {
  return (
    <SPane display="flex" margin={8}>
      <Pane
        flex={1}
        display="flex"
        alignItems="center"
        paddingLeft={4}
        textDecoration={isDone && "line-through"}
      >
        {content || "Content Placeholder"}
      </Pane>

      <IconButton
        onClick={handleDelete}
        appearance="primary"
        icon={TrashIcon}
        intent="danger"
        marginLeft={4}
      />
      <IconButton
        icon={EditIcon}
        intent="default"
        appearance="primary"
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

export default Item;
