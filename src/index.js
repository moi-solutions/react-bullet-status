import React from 'react';
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
  cancelled: '#f50505',
  reverted: '#456582',
};

/**
* Component class
* @type {Object}
*/
const BulletStatus = function BulletStatus(props) {
  return (
    <Container>
      <span>
        <Circle hexColor={props.color} />
        <Value>{props.value}</Value>
        {props.label.toLowerCase()}
      </span>
    </Container>
  );
};

/**
* Set propTypes
* @type {Object}
*/
BulletStatus.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default BulletStatus;
