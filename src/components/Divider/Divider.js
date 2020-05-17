import styled from "styled-components";
import PropTypes from "prop-types";

const Divider = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  line-height: 1px;
  ::after {
    content: "";
    display: inline-block;
    position: static;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ color }) => color};
  }
`;

Divider.propTypes = {
  color: PropTypes.string,
};

Divider.defaultProps = {
  color: "#ebebeb",
};

export default Divider;
