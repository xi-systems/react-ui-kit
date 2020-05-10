import React from "react";
import styled from "styled-components";

const Root = styled.div`
  padding: 12px;
  border: 1px solid black;
  border-radius: 12px;
  background: red;
`;

const Button = (props) => {
  const { children, loading } = props;
  return <Root as="button">{loading ? <span>loading</span> : children}</Root>;
};

export default Button;
