import s from './Button.module.css';
import React from 'react';
import propTypes from 'prop-types';

export const Button = ({ loadMore }) => {
  return (
    <button type="button" className={s.button} onClick={loadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  loadMore: propTypes.func,
};
