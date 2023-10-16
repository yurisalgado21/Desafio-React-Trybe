type CardNewsProps = {
  titulo: string;
  introducao: string;
  data_publicacao: string;
};

function CardNews({ titulo, introducao, data_publicacao }: CardNewsProps) {
  return (
    <div>
      <h1>{titulo}</h1>
      <p>{introducao}</p>
      <span>{data_publicacao}</span>
      <input type="checkbox" />
      <button>leia a notícia aqui</button>
    </div>
  );
}
export default CardNews;
