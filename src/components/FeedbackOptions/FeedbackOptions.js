import { Component } from 'react';
import { Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;
    return this.props.option.map(value => {
      return (
        <Button
          key={value}
          type="button"
          onClick={() => onLeaveFeedback(value)}
        >
          {value}
        </Button>
      );
    });
  }
}
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  option: PropTypes.array.isRequired,
};
