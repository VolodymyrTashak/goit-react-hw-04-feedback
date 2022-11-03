import React from 'react';
import PropTypes from 'prop-types';

import {
  FeedbackBtn,
  FeedbackList,
  FeedbackItem,
} from '../FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map((option, index) => {
        return (
          <FeedbackItem key={index}>
            <FeedbackBtn
              type="button"
              onClick={() => {
                onLeaveFeedback(option);
              }}
              name={option}
            >
              {option}
            </FeedbackBtn>
          </FeedbackItem>
        );
      })}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
