import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const iniqueCategories = [
  'all',
  ...new Set(items.map((item) => item.category)),
];
console.log(iniqueCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const categories = useState(iniqueCategories)[0];

  const filterCategory = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
    return;
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterCategory={filterCategory} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
