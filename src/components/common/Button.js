import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  onButtonPress() {
    const { onPress } = this.props;
    if (onPress) {
      onPress();
    }
  }

  render() {
    const {
      label, type, color, style,
    } = this.props;
    return (
      <button className={`button ${style} ${color}`} type={type} onClick={() => this.onButtonPress()}>
        <div className="label"> {label} </div>
      </button>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  type: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'positive', 'default']),
  style: PropTypes.oneOf(['fill', 'outline', 'borderless']),
};

Button.defaultProps = {
  label: '',
  type: 'button',
  color: 'default',
  style: 'outline',
  onPress: () => null,
};

export default Button;
