import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((item) => {
        const { id, title, desc, price, img } = item;
        return (
          <article key={id} className='menu-item'>
            <img src={img} className='photo' alt={title} />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <p className='price'>${price}</p>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
