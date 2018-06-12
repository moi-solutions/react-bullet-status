import styled from 'styled-components';

export const Container = styled.li`
  list-style: none;
`;

export const Circle = styled.span`
  height: 11px;
  width: 11px;
  background-color: ${props => (props.hexColor ? props.hexColor : 'white')};
  border-radius: 50%;
  display: inline-block;
`;

export const Value = styled.strong`
  margin: 0 3px 0 3px;
`;
