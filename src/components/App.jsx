import { Component } from 'react';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() === 0
      ? 0
      : (this.state.good * 100) / this.countTotalFeedback;
  };

  render() {
    const options = [];
    for (const key in this.state) {
      options.push(key);
    }

    return (
      <div>
        <Section title="Please leave feedback"></Section>
        <Section title="Statistics">
        
        </Section>
      </div>
    );
  }
}
