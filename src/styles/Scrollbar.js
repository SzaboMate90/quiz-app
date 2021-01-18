import Colors from './Colors';

export default () => `
  @media screen and (min-width: 650px) {
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      background: ${Colors.grey450};
      border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${Colors.grey600};
      border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: ${Colors.grey500};
    }
  }
`