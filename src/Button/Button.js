import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Root = styled.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
  margin: 0px;
  text-align: center;

  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;

  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 24px;
  padding-right: 24px;

  color: #fff;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  text-decoration: none;

  border-radius: 8px;
  outline: none;

  transition: box-shadow 0.2s ease 0s, transform 0.1s ease 0s;

  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;

  background: linear-gradient(to right, #f80278 0%, #fb2d72 50%, #f8417e 100%);
  &:hover {
    border: none;
    background: linear-gradient(
      to right,
      #f80278 0%,
      #fb2d72 50%,
      #f8417e 100%
    );
  }
`;

/**
Some more documentation goes here,
And here .... JSDoc feauture
 */

const Button = (props) => {
  const { children, loading, variant, fullWidth } = props;
  return (
    <Root as="button" fullWidth={fullWidth}>
      {loading ? <span>loading</span> : children}
    </Root>
  );
};

Button.propTypes = {
  /**
    Use the loading state to indicate that the button action isn't finished yet.
    */
  loading: PropTypes.bool,
  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOf(["default", "primary", "secondary"]),
};

Button.defaultProps = {
  loading: false,
  variant: "default",
  fullWidth: false,
};

export default Button;
