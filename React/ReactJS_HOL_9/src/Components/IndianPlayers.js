const IndianTeam = [
  'Sachin1',
  'Dhoni2',
  'Virat3',
  'Rohit4',
  'Yuvaraj5',
  'Raina6',
];

const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

function OddPlayers([first, , third, , fifth]) {
  return (
    <section className="panel">
      <h2>Odd Players</h2>
      <ul>
        <li>First: {first}</li>
        <li>Third: {third}</li>
        <li>Fifth: {fifth}</li>
      </ul>
    </section>
  );
}

function EvenPlayers([, second, , fourth, , sixth]) {
  return (
    <section className="panel">
      <h2>Even Players</h2>
      <ul>
        <li>Second: {second}</li>
        <li>Fourth: {fourth}</li>
        <li>Sixth: {sixth}</li>
      </ul>
    </section>
  );
}

function IndianPlayersView() {
  return (
    <>
      {OddPlayers(IndianTeam)}
      {EvenPlayers(IndianTeam)}

      <section className="panel">
        <h2>List of Indian Players Merged</h2>
        <ul>
          {IndianPlayers.map((player) => (
            <li key={player}>{player}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default IndianPlayersView;
