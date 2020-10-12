import React from "react";
import { Pane } from "evergreen-ui";
import Item from "./Item";

const List = ({ items = [] }) => {
  const renderItems = () =>
    items.map((item, index) => <Item key={index} {...item} />);

  return (
    <Pane elevation={0} width={400} padding={4} borderRadius={3}>
      {items.length !== 0 ? (
        renderItems()
      ) : (
        <Pane
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding={8}
          fontSize={14}
        >
          Add your first not todo!
        </Pane>
      )}
    </Pane>
  );
};

export default List;
