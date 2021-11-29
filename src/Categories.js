import React from 'react';

const Categories = ({ categories, filterCategory }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className='filter-btn'
            onClick={() => filterCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
