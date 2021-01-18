export const global = content => `
  @media screen and (max-width: 700px) {
    ${content}
  }
`;

export default {
  global
};