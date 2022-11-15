import styled from 'styled-components';
export const FeedbackTextItem = styled.li`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.primary};
  margin-top: 10px;
  margin-bottom: 0;
  list-style: none;
`;
