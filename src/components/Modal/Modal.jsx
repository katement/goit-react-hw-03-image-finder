import React from 'react';

import PropTypes from 'prop-types';

import { StyledOverlay, StyledModal } from './Modal.styled';

class Modal extends React.Component {
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal();
    }
  };
  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onCloseModal();
    }
  };
  componentDidMount() {
    console.log('Модалка успішно змонтована');
    window.addEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'hidden';
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = '';
  }
  render() {
    const { visibleData } = this.props;
    // console.log(image);
    return (
      <StyledOverlay onClick={this.handleOverlayClick}>
        <StyledModal>
          <button onClick={this.props.onCloseModal}>&times;</button>
          {/* <br /> */}
          <img
            src={visibleData.largeImageURL}
            alt={visibleData.tags}
            style={{
              display: 'block',
              maxWidth: 'calc(100vw - 48px)',
              height: 'auto',
            }}
          />
        </StyledModal>
      </StyledOverlay>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
