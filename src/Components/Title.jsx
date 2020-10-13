import React from "react";
import { Pane, Heading, Paragraph } from "evergreen-ui";

function Title() {
  return (
    <Pane
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      marginBottom={16}
      display="flex"
    >
      <Heading size={800} marginBottom={4} letterSpacing={2}>
        !TodoApp
      </Heading>
      <Paragraph letterSpacing={1.5}>
        <span role="img" aria-label="less">🤏</span> Do less, achieve more.{" "}
        <span role="img" aria-label="more">🔥</span>
      </Paragraph>
    </Pane>
  );
}

export default Title;
