import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Component that alerts if you click outside of it
 */
export default class ClickAway extends Component {
  constructor(props) {
    super(props)

    this.wrapperRef = React.createRef()
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleClickOutside = (event) => {
    const { onClick } = this.props
    if (
      this.wrapperRef &&
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target)
    ) {
      onClick()
    }
  }

  render() {
    return <div ref={this.wrapperRef}>{this.props.children}</div>
  }
}

ClickAway.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
}

ClickAway.defaultProps = {
  onClick: () => {},
}
