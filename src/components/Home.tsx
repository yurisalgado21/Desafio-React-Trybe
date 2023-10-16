import { useContext, useEffect, useState } from 'react';
import DataContext from '../context/DataContext';
import { DataServicesIBGETypes, ItemsTypes } from '../types';
import CardNews from './CardNews';

export default function Home() {
  const url = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';
  const [news, setNews] = useState<DataServicesIBGETypes>();
  const { result, getApiIBGE } = useContext(DataContext);

  useEffect(() => {
    const fetchNews = async () => {
      await getApiIBGE(url);
    };
    fetchNews();
  }, []);

  useEffect(() => {
    if (result) {
      setNews(result);
      console.log(result);
    }
  }, [result]);

  return (
    <div>
      {news?.items.map((item: ItemsTypes) => (
        <li key={ item.id }>
          <CardNews
            titulo={ item.titulo }
            introducao={ item.introducao }
            data_publicacao={ item.data_publicacao }
          />
        </li>
      ))}
    </div>
  );
}
