import { Component } from 'react';
export class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;
    return this.props.option.map(value => {
      return (
        <button
          key={value}
          type="button"
          onClick={() => onLeaveFeedback(value)}
        >
          {value}
        </button>
      );
    });
  }
}
