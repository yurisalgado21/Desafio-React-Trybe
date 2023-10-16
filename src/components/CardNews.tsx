import { useContext } from 'react';
import DataContext from '../context/DataContext';
import { ItemsTypes } from '../types';

type CardNewsProps = {
  titulo: string;
  introducao: string;
  data_publicacao: string;
  item: ItemsTypes
};

function CardNews({ titulo, introducao, data_publicacao, item }: CardNewsProps) {
  const { toggleFavorite } = useContext(DataContext);
  return (
    <div>
      <h1>{titulo}</h1>
      <p>{introducao}</p>
      <span>{data_publicacao}</span>
      <button onClick={ () => toggleFavorite(item) }>favoritar</button>
      <button>leia a notícia aqui</button>
    </div>
  );
}
export default CardNews;
