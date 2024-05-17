import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  type = "button",
  children,
  className = "",
  ...rest
}) => {
  return (
    <button
      className={`flex items-center justify-center h-12 p-4 text-base font-semibold text-white w-35 rounded-xl min-h-[56px] ${className}`}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
    types: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Button;