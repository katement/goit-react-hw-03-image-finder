import styled from '@emotion/styled';

export const StyledOverlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0.7);
  z-index: 999;
`;
export const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 15px;
  /* padding: 25px; */

  button {
    position: absolute;
    top: 5px;
    right: 5px;
    border: none;
    border-radius: 50%;
    background-color: rgba(194, 189, 189, 0.849);
  }
`;
