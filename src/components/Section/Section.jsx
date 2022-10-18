import React from 'react';
import PropTypes from 'prop-types';
import { SectionBox, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionBox>
      <Title>{title}</Title>
      {children}
    </SectionBox>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
};
