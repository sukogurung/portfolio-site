import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className, ...props }) => {
  return (
    <div 
      className={`shadow-md rounded-lg ${className}`.trim()} 
      {...props}
    >
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

export default React.memo(Card);