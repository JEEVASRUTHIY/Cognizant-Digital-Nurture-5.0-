import React from 'react';
import '../Stylesheets/mystyle.css';

const percentToDecimal = (decimal) => `${decimal.toFixed(2)}%`;

const calculateScore = (total, goal) =>
  goal > 0 ? percentToDecimal(total / goal) : '0.00%';

function CalculateScore({ name, school, total, goal }) {
  return (
    <section className="score-card">
      <h1>Student Details:</h1>

      <dl>
        <div className="detail name">
          <dt>Name:</dt>
          <dd>{name}</dd>
        </div>

        <div className="detail school">
          <dt>School:</dt>
          <dd>{school}</dd>
        </div>

        <div className="detail total">
          <dt>Total:</dt>
          <dd>{total} Marks</dd>
        </div>

        <div className="detail score">
          <dt>Score:</dt>
          <dd>{calculateScore(total, goal)}</dd>
        </div>
      </dl>
    </section>
  );
}

export default CalculateScore;
