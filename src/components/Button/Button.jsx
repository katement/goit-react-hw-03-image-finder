import { Component } from 'react';
import PropTypes from 'prop-types';

import { LoadMoreBtn } from './Button.styled';

export class Button extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <LoadMoreBtn type="button" onClick={onClick}>
        Load more...
      </LoadMoreBtn>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
