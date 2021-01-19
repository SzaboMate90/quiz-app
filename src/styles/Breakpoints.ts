export const global = content => `
  @media screen and (max-width: 700px) {
    ${content}
  }
`;
export const small = content => `
  @media screen and (max-width: 500px) {
    ${content}
  }
`;

export default {
  global,
  small
};