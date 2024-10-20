import React from 'react';

export const FilterContacts = ({ value, filter }) => {
  return (
    <div>
      <label>
        Find contacts:
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
