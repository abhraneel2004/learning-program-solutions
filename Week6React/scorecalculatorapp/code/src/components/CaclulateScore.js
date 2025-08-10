import '../stylesheets/mystyle.css';;

// This helper function takes a decimal (like 0.85) and converts it to a percentage string (like "85.00%")
const percentToDecimal = (decimal) => {
  return decimal.toFixed(2) + '%';
};

// This function calculates the score as a percentage decimal
const calcScore = (total, goal) => {
  return percentToDecimal(total / goal);
};

export const CalculateScore = ({ Name, School, total, goal }) => (
  <div className="formatstyle">
    <h1><font color="#2525e6">Student Details:</font></h1>
    <div className="Name">
      <b>Name: </b>
      <span>{Name}</span>
    </div>

    <div className="School">
      <b>School: </b>
      <span>{School}</span>
    </div>

    <div className="Total">
      <b>Total: </b>
      <span>{total} Marks</span>
    </div>

    <div className="Score">
      <b>Score: </b>
      {/* The function call was fixed here */}
      <span>{calcScore(total, goal)}</span>
    </div>
  </div>
);