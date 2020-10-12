import React from "react";
import { Pane, IconButton, TrashIcon, EditIcon, TickIcon } from "evergreen-ui";
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

const Item = ({ content }) => {
  return (
    <SPane display="flex" margin={8}>
      <Pane flex={1} display="flex" alignItems="center" paddingLeft={4}>
        {content || "Content Placeholder"}
      </Pane>

      <IconButton
        icon={TrashIcon}
        intent="danger"
        appearance="primary"
        marginLeft={4}
      />
      <IconButton
        icon={EditIcon}
        intent="default"
        appearance="primary"
        marginLeft={4}
      />
      <IconButton
        icon={TickIcon}
        intent="success"
        appearance="primary"
        marginLeft={4}
      />
    </SPane>
  );
};

export default Item;
