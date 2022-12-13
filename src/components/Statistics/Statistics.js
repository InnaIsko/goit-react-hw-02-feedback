import { FeedbackTextItem } from './Statistics.styled';
import PropTypes from 'prop-types';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul>
      <FeedbackTextItem>Good: {good}</FeedbackTextItem>
      <FeedbackTextItem>Neutral: {neutral}</FeedbackTextItem>
      <FeedbackTextItem>Bad: {bad}</FeedbackTextItem>
      <FeedbackTextItem>Total: {total}</FeedbackTextItem>
      <FeedbackTextItem>
        Positive fedback: {positivePercentage}%
      </FeedbackTextItem>
    </ul>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
