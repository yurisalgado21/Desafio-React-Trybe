import { useContext } from 'react';
import DataContext from '../context/DataContext';
import { ItemsTypes } from '../types';
import CardNews from './CardNews';
import styles from '../styles/CardNews.module.css';

export default function Favorites() {
  const { favorites } = useContext(DataContext);
  return (
    <div>
      <div className={ styles.titleFavorites }>Favorites News</div>
      <ul className={ styles.cardLi }>
        {favorites.map((item: ItemsTypes, index) => (
          <li key={ item.id }>
            <CardNews
              titulo={ item.titulo }
              introducao={ item.introducao }
              data_publicacao={ item.data_publicacao }
              item={ item }
              link={ item.link }
              imagens={ item.imagens }
              index={ index }
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
