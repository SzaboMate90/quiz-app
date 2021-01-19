import styled from 'styled-components'
import Colors from '../../../styles/Colors';
import Button from '../../Button/Button';

export const StyledStartButton = styled(Button)`
  background: ${Colors.primary};
  color: ${Colors.white100};

  &:hover {
    background: ${Colors.primaryHover};
    color: ${Colors.white100};
  }
`;
