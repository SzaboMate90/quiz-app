import styled from 'styled-components'
import Colors from '../../styles/Colors';

export const Label = styled.label`
  color: ${Colors.pageText};
  display: block;
  font-weight: 600;
  line-height: 15px;
  transition: color linear 200ms;
  margin-bottom: 3px;
  
  ${(props) => props.required ? `
    &:after {
      content: "*";
      color: ${Colors.red100};
      font-size: 17px;
      margin-left: 4px;
    }
  ` : ""}
`;

export const Field = styled.input`
  background: white;
  border: 1px solid ${Colors.grey400};
  color: ${Colors.pageText};
  display: block;
  font-weight: 500;
  margin: 0 0 15px 0;
  outline: none;
  padding: 10px;
  transition: border-color linear 300ms;
  width: calc(100% - 20px);
`;

const getErrorStyle = () => `
  ${Label},
  ${Field} {
    color: ${Colors.red100};
  }
`;

export const ErrorMessage = styled.p`
  color: ${Colors.red100};
  font-size: 11px;
  margin: -10px 0 15px 0;
`;

export const Container = styled.div`
  position: relative;
  
  ${(props) => props.hasError ? getErrorStyle() : ""}
`;