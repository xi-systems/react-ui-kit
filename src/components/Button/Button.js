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

  white-space: nowrap !important;
`;

const HoverBgWrapper = styled.span`
  position: absolute !important;
  top: 0px !important;
  left: 0px !important;
  right: 0px !important;
  bottom: 0px !important;
  width: 100% !important;
  height: 100% !important;
  overflow: hidden !important;
  border-radius: 8px !important;
`;

const HoverBg = styled.span`
  background-position: calc((100 - var(--mouse-x, 0)) * 1%)
    calc((100 - var(--mouse-y, 0)) * 1%);
  --mouse-x: 35.6406;
  --mouse-y: 95.6522;

  display: block !important;
  width: 100% !important;
  height: 100% !important;
  /* min-width: 200px !important; */
  background-size: 200% 200% !important;
  opacity: 0 !important;
  transition: opacity 1.25s !important;
  background-image: -webkit-radial-gradient(
    circle at center,
    #ff385c 0%,
    #e61e4d 27.5%,
    #e31c5f 40%,
    #d70466 57.5%,
    #bd1e59 75%,
    #bd1e59 100%
  ) !important;
  background-image: -moz-radial-gradient(
    circle at center,
    #ff385c 0%,
    #e61e4d 27.5%,
    #e31c5f 40%,
    #d70466 57.5%,
    #bd1e59 75%,
    #bd1e59 100%
  ) !important;
  background-image: radial-gradient(
    circle at center,
    #ff385c 0%,
    #e61e4d 27.5%,
    #e31c5f 40%,
    #d70466 57.5%,
    #bd1e59 75%,
    #bd1e59 100%
  ) !important;
  &:hover {
    opacity: 1 !important;
  }
`;

const ContentOuter = styled.span`
  display: block !important;
  position: relative !important;
  pointer-events: none !important;
`;

const ContentInner = styled.span`
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  justify-content: center !important;
  pointer-events: none !important;
`;

const IconOuter = styled.span`
  margin-left: -2px !important;
  margin-right: 8px !important;
`;

/**
Some more documentation goes here,
And here .... JSDoc feauture
 */

const Button = (props) => {
  const { children, loading, variant, fullWidth } = props;
  return (
    <Root as="button" fullWidth={fullWidth}>
      <HoverBgWrapper>
        <HoverBg />
      </HoverBgWrapper>
      <ContentOuter>
        <ContentInner>
          <IconOuter>
            
          </IconOuter>
          <span>{children}</span>
        </ContentInner>
      </ContentOuter>
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
