import { useContext } from 'react';
import { Link } from 'react-router-dom';
import imageTrybe from '../assets/image 68.png';
import ThemeButton from './ThemeButton';
import DataContext from '../context/DataContext';
import styles from '../styles/Header.module.css';
import imageHeart from '../assets/Group 268.svg';

export default function Header() {
  const { theme, changeTheme } = useContext(DataContext);
  return (
    <header className={ styles.container }>
      <img src={ imageTrybe } alt="Logo Trybe" className={ styles.image } />
      <h1 className={ styles.titlePage }>TRYBE NEWS</h1>
      <ThemeButton state={ theme } event={ changeTheme } />
      <Link to="/favorites" className={ styles.linkFavorites }>
        <img src={ imageHeart } alt="imagefavorite" />
        Favorites
      </Link>
    </header>
  );
}
