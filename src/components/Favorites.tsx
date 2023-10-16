import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import { ItemsTypes } from '../types';
import CardNews from './CardNews';

export default function Favorites() {
  const { favorites } = useContext(DataContext);
  return (
    <>
      <div>Favorites</div>
      {favorites.map((item: ItemsTypes) => (
        <li key={ item.id }>
          <CardNews
            titulo={ item.titulo }
            introducao={ item.introducao }
            data_publicacao={ item.data_publicacao }
            item={ item }
            link={ item.link }
          />
        </li>
      ))}
    </>
  );
}
