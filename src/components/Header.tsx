import React, { useContext } from 'react';
import imageTrybe from '../assets/image 68.png';
import ThemeButton from './ThemeButton';
import DataContext from '../context/DataContext';

export default function Header() {
  const { theme, changeTheme } = useContext(DataContext);
  return (
    <header>
      <img src={ imageTrybe } alt="Logo Trybe" />
      <h1>TRYBE NEWS</h1>
      <ThemeButton state={ theme } event={ changeTheme } />
    </header>
  );
}
