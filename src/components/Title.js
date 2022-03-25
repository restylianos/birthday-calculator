import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ titleText }) => (
  <div className="tw-font-bold tw-mt-8 tw-text-center tw-text-2xl">{titleText}</div>
);

Title.defaultProps = {
  titleText: '',
};

Title.propTypes = {
  titleText: PropTypes.string,
};

export default Title;
