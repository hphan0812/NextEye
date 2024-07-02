import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LoginLayout = (props) => {
  const {children, heading = "" } = props;
  return (
    <div className="w-full min-h-screen p-10 bg-lite isolate">
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img
          src="/img/logo_company.png"
          alt="NextEye Portal"
          className="w-20 h-20"
        />
      </Link>
      <div className="w-full max-w-[556px] bg-white rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 textcenter">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

LoginLayout.propTypes = {
    heading: PropTypes.string,
    children: PropTypes.node,
};

export default LoginLayout;