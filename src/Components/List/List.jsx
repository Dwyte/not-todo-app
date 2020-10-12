import React from "react";
import { Pane } from "evergreen-ui";
import Item from "./Item";

const items = [
  {
    content: "Dishes",
  },
  {
    content: "Anime",
  },
  {
    content: "Youtube",
  },
];

const List = () => {
  return (
    <Pane elevation={0} width={400} padding={4} borderRadius={3}>
      {items.map((item) => (
        <Item {...item} />
      ))}
    </Pane>
  );
};

export default List;
