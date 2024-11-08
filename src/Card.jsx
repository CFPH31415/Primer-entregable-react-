function Card({ name, car }) {
  return (
    <div className="card">
      <h2>Hola!</h2>
      <p><strong>Tu banda favorita es:</strong> {name}</p>
      <p><strong>Tu canción favorita de la banda es:</strong> {car}</p>
    </div>
  );
}

export default Card;
