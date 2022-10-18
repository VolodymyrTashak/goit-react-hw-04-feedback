import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        <p>Good: {good}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Neutral: {neutral}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Bad: {bad}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Total: {total}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Positive feedback: {positivePercentage}%</p>
      </StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
