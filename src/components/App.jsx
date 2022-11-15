import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((previousValue, value) => {
      return previousValue + value;
    }, 0);
  };
  countPositiveFeedbackPercentage = () => {
    const value = (100 / this.countTotalFeedback()) * this.state.good;
    return value.toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            option={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          {this.countTotalFeedback() !== 0 ? (
            <Section title="Statistics" children>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            </Section>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
