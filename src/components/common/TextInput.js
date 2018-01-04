import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  onValueChange(event) {
    const { input: { onChange }, onValueChange } = this.props;
    onChange(event.target.value);
    if (onValueChange) {
      onValueChange(event.target.value);
    }
  }

  renderInput() {
    const {
      input: { value, name, onBlur }, meta: { touched, error, warning }, type, disabled,
    } = this.props;
    return (
      <input
        ref={`text-${name}`}
        className={`input ${touched && (error || warning) ? 'error' : ''}`}
        onBlur={onBlur}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={event => this.onValueChange(event)}
        disabled={disabled}
      />
    );
  }

  renderIcon() {
    const {
      meta: { touched, error, warning }, iconName,
    } = this.props;
    return (
      <div className="icon-container">
        <span className="icon">
          <i className={`fa fa-${iconName} ${touched && (error || warning) ? 'error' : ''}`} aria-hidden="true" />
        </span>
      </div>
    );
  }

  render() {
    const {
      meta: { touched, error, warning }, input: { name }, placeholder, className, iconName,
    } = this.props;

    return (
      <div className={`text-input ${className}`}>
        <div><label htmlFor={name}>{placeholder}</label></div>
        <div className="input-container">
          {this.renderInput()}
          {iconName && this.renderIcon()}
        </div>
        {touched && (error || warning) && <div className="error-msg">{error}</div>}
      </div>
    );
  }
}

TextInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onValueChange: PropTypes.func,
  className: PropTypes.string,
  iconName: PropTypes.string,
};

TextInput.defaultProps = {
  placeholder: '',
  type: 'text',
  disabled: false,
  onValueChange: null,
  className: '',
  iconName: null,
};

export default TextInput;
