import React from "react";

import { Container } from "./styles";

export default ({ message, close }) => {
  return (
    <Container>
      <h3>{message}</h3>
      <button onClick={close}>OK</button>
    </Container>
  );
};
