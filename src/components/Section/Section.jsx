import PropTypes from 'prop-types';
import { FeedbackSection, FeedbackTitle } from './SectionStyle';
export const Section = ({ title, children }) => {
  return (
    <FeedbackSection>
      <FeedbackTitle>{title}</FeedbackTitle>
      {children}
    </FeedbackSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
