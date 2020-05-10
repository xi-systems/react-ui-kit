import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Root = styled.div`
  padding: 12px;
  border: 1px solid black;
  border-radius: 12px;
  background: red;
`;

/**
Some more documentation goes here,
And here .... JSDoc feauture
 */

const Button = (props) => {
  const { children, loading, variant } = props;
  return <Root as="button">{loading ? <span>loading</span> : children}</Root>;
};

Button.propTypes = {
  /**
    Use the loading state to indicate that the button action isn't finished yet.
    */
  loading: PropTypes.bool,
  variant: PropTypes.oneOf(["default", "primary", "secondary"]),
};

Button.defaultProps = {
  loading: false,
  variant: "default",
};

export default Button;
