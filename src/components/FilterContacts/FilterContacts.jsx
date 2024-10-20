import React from 'react';

export const FilterContacts = ({ value, filter }) => {
  return (
    <div>
      <label>
        <span>Find contacts:</span>
        <br />
        <input
          onChange={filter}
          type="text"
          placeholder="Find contacts..."
          value={value}
        />
      </label>
    </div>
  );
};
