import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import birthdayIcon from '../assets/birthday-cake-icon-16542.png';

const NavBar = ({ children }) => {
  return (
    <React.Fragment>
      <nav className="tw-bg-white tw-border-gray-200 tw-px-2 sm:tw-px-4 tw-py-2.5 tw-rounded">
        <div className="tw-container tw-flex tw-flex-wrap tw-justify-between tw-items-center tw-mx-auto">
          <Link to="/" className="tw-flex tw-items-center">
            <img src={birthdayIcon} className="tw-mr-3 tw-h-6 sm:tw-h-9" alt="Cake logo" />
            <span className="tw-self-center tw-text-xl tw-font-semibold tw-whitespace-nowrap dark:tw-text-white">
              Awesome calculator
            </span>
          </Link>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="tw-inline-flex tw-items-center tw-p-2 tw-ml-3 tw-text-sm tw-text-gray-500 tw-rounded-lg md:tw-hidden hover:tw-bg-gray-100 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-gray-200 dark:tw-text-gray-400 dark:tw-hover:bg-gray-700 dark:focus:tw-ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="tw-sr-only">Open main menu</span>
            <svg
              className="tw-w-6 tw-h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="tw-hidden tw-w-6 tw-h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="tw-hidden tw-w-full md:tw-block md:tw-w-auto" id="mobile-menu">
            <ul className="tw-flex tw-flex-col tw-mt-4 md:tw-flex-row md:tw-space-x-8 md:tw-mt-0 md:tw-text-sm md:tw-font-medium">
              <li>
                <Link
                  to="/"
                  className="tw-block tw-py-2 tw-pr-4 tw-pl-3 tw-text-white tw-bg-blue-700 tw-rounded md:tw-bg-transparent md:tw-text-blue-700 md:tw-p-0 dark:tw-text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </React.Fragment>
  );
};
NavBar.defaultProps = {
  animalName: {},
};

NavBar.propTypes = {
  animalName: PropTypes.any,
};

export default NavBar;
