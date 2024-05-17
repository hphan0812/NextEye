import React from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';

const Input = (props) => {
    const {control, name, type = "text", ...rest } = props;
    const { field } = useController({ control, name, defaultValue: "" });
    return (
      <div className="relative">
        <input
          id={name}
          type={type}
          className="w-full px-6 py-4 text-sm font-medium bg-transparent border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white"
          {...rest}
          {...field}
        />
      </div>
    );
};

Input.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    control: PropTypes.any.isRequired,
};

export default Input;