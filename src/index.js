import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Circle, Value } from './style';

/**
* Object with status name with hex color text
* @type {Object}
*/
export const Color = {
  open: '#42c864',
  waitingInventory: '#febd20',
  inProcess: '#73d9e6',
  completed: '#0fabec',
  reverted: '#f50505',
  reverted: '456582'
}

/**
 * Component class
 * @type {Object}
 */
class Base extends Component {

  /**
  * Render error message.
  * @returns {XML}
  */
  render() {
    return (
      <Container>
        <span>
          <Circle hexColor={ this.props.color } />
          <Value>{ this.props.value }</Value>
          { this.props.label.toLowerCase() }
        </span>
      </Container>
    );
  }
}

/**
* Set propTypes
* @type {Object}
*/
Base.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Base;
