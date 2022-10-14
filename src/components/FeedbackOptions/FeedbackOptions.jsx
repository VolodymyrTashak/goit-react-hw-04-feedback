import React from 'react';
import PropTypes from 'prop-types';
import {
  FeedbackList,
  FeedbackItem,
  FeedbackBtn,
} from '../FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <FeedbackList>
        {options.map((option, idx) => {
          return (
            <FeedbackItem key={idx}>
              <FeedbackBtn
                type="button"
                onClick={() => {
                  onLeaveFeedback(option);
                }}
              >
                Good
              </FeedbackBtn>
            </FeedbackItem>
          );
        })}
      </FeedbackList>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
