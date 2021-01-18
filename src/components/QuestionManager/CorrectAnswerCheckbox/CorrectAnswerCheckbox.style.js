import styled from 'styled-components'
import Colors from '../../../styles/Colors';
import Breakpoints from '../../../styles/Breakpoints';

const getErrorStyle = () => `
  color: ${Colors.red100};
`;
export const Container = styled.div`
  display: inline;
  
  ${(props) => props.hasError ? getErrorStyle() : ""}
  
  ${Breakpoints.global(`
    display: block;
    margin: 0 auto 15px; 
    text-align: center;
  `)}
`;

export const LabelText = styled.p`
  display: inline-block;
  margin: 0;
`;

export const Label = styled.label`
  cursor: pointer;
  font-weight: 500;
  position: relative;
  user-select: none;
  transition: color 300ms;

  &:before,
  &:after {
    display: inline-block;
  }

  &:before {
    background: ${Colors.secondary};
    border: 1px solid ${Colors.grey600};
    border-radius: 0;
    content: "";
    height: 13px;
    margin: -2px 5px 0 0;
    transition: background 300ms;
    vertical-align: middle;
    width: 13px;
  }

  &:after {
    border: solid ${Colors.primary};
    border-width: 0 2px 2px 0;
    content: "";
    height: 7px;
    left: 5px;
    position: absolute;
    opacity: 0;
    top: 4px;
    transform: rotate(45deg);
    transition: border-color 300ms, opacity 300ms;
    width: 3px;
  }
  
  &:hover:before {
    background: ${Colors.grey200};
  }
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Label}:after {
    opacity: 1;
  }
`;

export const Hint = styled.small`
  display: block;
  color: rgba(0, 0, 0, .5);
  margin-top: 3px;
`;