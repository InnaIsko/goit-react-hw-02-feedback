import { Component } from 'react';
import { FeedbackTextItem } from './Statistics.styled';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  render() {
    return (
      <ul>
        <FeedbackTextItem>Good: {this.props.good}</FeedbackTextItem>
        <FeedbackTextItem>Neutral: {this.props.neutral}</FeedbackTextItem>
        <FeedbackTextItem>Bad: {this.props.bad}</FeedbackTextItem>
        <FeedbackTextItem>Total: {this.props.total}</FeedbackTextItem>
        <FeedbackTextItem>
          Positive fedback: {this.props.positivePercentage}%
        </FeedbackTextItem>
      </ul>
    );
  }
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
