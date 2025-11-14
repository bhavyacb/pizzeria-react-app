
import React from 'react';
import { MenuList } from '../helpers/MenuList';
import '../styles/Menu.css'; // optional

export default function Menu() {
  return (
    <div className="menu-page">
      <h1>Menu</h1>
      <div className="menu-grid">
        {MenuList.map((pizza, idx) => (
          <div className="menu-card" key={idx}>
            <img src={pizza.image} alt={pizza.name} className="menu-image" />
            <h3>{pizza.name}</h3>
            <p>${pizza.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}