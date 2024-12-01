import React, { useState } from 'react';
import MenuItemsData from './MenuItemsData';
import MenuItemCard from './MenuItemCard';
import '../styles/App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filterItemsByCategory = (category) => {
    if (category === 'All') {
      return MenuItemsData;
    }
    return MenuItemsData.filter(item => item.category.toLowerCase() === category.toLowerCase());
  }

  return (
    <>
      <h1>Our Menu</h1>
      <div className='header'>
        <ul>
          <li onClick={() => setSelectedCategory('All')} className={selectedCategory === 'All' ? 'selected' : ''}>All</li>
          <li onClick={() => setSelectedCategory('Breakfast')} className={selectedCategory === 'Breakfast' ? 'selected' : ''}>Breakfast</li>
          <li onClick={() => setSelectedCategory('Lunch')} className={selectedCategory === 'Lunch' ? 'selected' : ''}>Lunch</li>
          <li onClick={() => setSelectedCategory('Shakes')} className={selectedCategory === 'Shakes' ? 'selected' : ''}>Shakes</li>
        </ul>
      </div>
      <div className='menu-container'>
        {filterItemsByCategory(selectedCategory).map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default App;
