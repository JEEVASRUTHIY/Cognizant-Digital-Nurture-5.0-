function PlayerList({ title, players }) {
  return (
    <section className="panel">
      <h2>{title}</h2>
      <ul>
        {players.map((player) => (
          <li key={player.name}>
            Mr. {player.name} <strong>{player.score}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ListOfPlayers({ players }) {
  const playersBelow70 = players.filter((player) => player.score <= 70);

  return (
    <>
      <PlayerList title="List of Players" players={players} />
      <PlayerList
        title="List of Players having Scores Less than 70"
        players={playersBelow70}
      />
    </>
  );
}

export default ListOfPlayers;
