import PropTypes from 'prop-types';
import { FeedbackBtnWrap, FeedbackButton } from './FeedbackOptionsStyle';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <FeedbackBtnWrap>
    {options.map(option => {
      return (
        <FeedbackButton
          key={option}
          data-type={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </FeedbackButton>
      );
    })}
  </FeedbackBtnWrap>
  );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
  };