import { useContext } from 'react';
import DataContext from '../context/DataContext';
import { ItemsTypes } from '../types';

type CardNewsProps = {
  titulo: string;
  introducao: string;
  data_publicacao: string;
  item: ItemsTypes
  link: string;
};

function CardNews({ titulo, introducao, data_publicacao, item, link }: CardNewsProps) {
  const { toggleFavorite } = useContext(DataContext);

  const redirectToSite = () => {
    window.open(link, '_blank');
  };

  const calculateDays = (day: string) => {
    const dayPublication = day.split(' ');
    const dataPublication = dayPublication[0];
    const partesData = dataPublication.split('/');
    const today = new Date();
    const dataNews = new Date(
      Number(partesData[2]),
      Number(partesData[1]) - 1,
      Number(partesData[0]),
    );
    const diffTime = Math.abs(Number(today) - Number(dataNews));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div>
      <h1>{titulo}</h1>
      <p>{introducao}</p>
      <span>{data_publicacao}</span>
      <p>
        Publicado há
        {' '}
        {calculateDays(data_publicacao)}
        {' '}
        dias
      </p>
      <button onClick={ () => toggleFavorite(item) }>
        favoritar
      </button>
      <button onClick={ redirectToSite }>leia a notícia aqui</button>
    </div>
  );
}
export default CardNews;
