import React from 'react';
import PropTypes from 'prop-types';
import {
  FeedbackBtn,
  FeedbackBox,
} from '../FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackBox>
      {options.map((option, index) => {
        return (
          <FeedbackBtn
            key={index}
            type="button"
            onClick={onLeaveFeedback}
            name={option}
          >
            {option}
          </FeedbackBtn>
        );
      })}
    </FeedbackBox>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
