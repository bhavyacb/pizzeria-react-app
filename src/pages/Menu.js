
import React from 'react';
import { MenuList } from '../helpers/MenuList';
import '../styles/Menu.css'; // optional
import MenuItem from '../components/MenuItem';

export default function Menu() {
  return (
    <div className="menu-page">
      <h1>Menu</h1>
      <div className="menu-grid">
        {MenuList.map((pizza, idx) => (
          <MenuItem image={pizza.image} name={pizza.name} price={pizza.price} />
        ))}
      </div>
    </div>
  );
}