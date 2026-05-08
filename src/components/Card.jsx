function Card({ video }) {

  return (

    <div className="card">

      <img
        src={video.thumbnailUrl}
        alt={video.title}
      />

      <h2>{video.title}</h2>

      <p>Autor: {video.author}</p>

      <p>Duración: {video.duration}</p>

      <p>Área: {video.area}</p>

      <p>Formato: {video.format}</p>

      <p>Nivel: {video.level}</p>

    </div>

  );
}

export default Card;