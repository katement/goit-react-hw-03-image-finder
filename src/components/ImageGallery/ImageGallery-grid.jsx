import styled from '@emotion/styled';

export const ImageGalleryGrid = styled.ul`
  display: grid;
  max-width: 100vw;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
