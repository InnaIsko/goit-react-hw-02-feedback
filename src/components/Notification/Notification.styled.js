import styled from 'styled-components';

export const Message = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-shadow: ${p => p.theme.shadows.text};
`;
