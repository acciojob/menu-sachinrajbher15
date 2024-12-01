import React from 'react'
import '../styles/MenuItemCard.css'

function MenuItemCard({item}) {
  const handleAddToCart = () => {
    console.log(item.id);
  }
  return (
    <div className='card'>
      <div className='item-image'>
        <img src={item.img} alt="item" />
      </div>
      <div className='card-content'>
        <div className='card-header'>
          <h2 id='item-title'>{item.title}</h2>
          <p id="item-price">$ {item.price}</p>
        </div>
        <div className='card-description'>
          <p id="item-description">{item.desc}</p>
        </div>
        <button id='addToCart-btn' onClick={handleAddToCart}>Add To Cart</button>
      </div>
    </div>
  )
}

export default MenuItemCard
