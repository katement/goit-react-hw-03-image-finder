import React from 'react';
import { Header } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Header className="searchbar">
      <form onSubmit={onSubmit} className="form">
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </Header>
  );
};
export default Searchbar;
