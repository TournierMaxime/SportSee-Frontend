import React from 'react';
import PropTypes from 'prop-types';
import { HelmetProvider, Helmet } from 'react-helmet-async';

/**
 * Component to define the title page.
 * @param {object} props - Props object.
 * @param {string} props.title - title page.
 * @returns {React.ReactElement} Component Title.
*/

const Title = ({ title }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title
