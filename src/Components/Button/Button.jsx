
import React from 'react';
import { LoadMore } from './Button.styled';
import propTypes from 'prop-types';

export const Button = ({ loadMore }) => {
  return (
    <LoadMore type="button" onClick={loadMore}>
      Load more
    </LoadMore>
  );
};

Button.propTypes = {
  loadMore: propTypes.func,
};
