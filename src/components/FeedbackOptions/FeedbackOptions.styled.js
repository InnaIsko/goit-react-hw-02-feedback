import styled from 'styled-components';
export const Button = styled.button`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-shadow: ${p => p.theme.shadows.text};
  padding: 20px;
  margin-right: 10px;
  border-radius: ${p => p.theme.radii.md};
  border: ${p => p.theme.borders.normal};
  background-color: ${p => p.theme.colors.accent};
  cursor: pointer;
  :hover {
    scale: 1.1;
  }
`;
