import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className, ...props }) => {
  return (
    <div className={`bg-green shadow-md rounded-lg ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: '',
};

export default Card;