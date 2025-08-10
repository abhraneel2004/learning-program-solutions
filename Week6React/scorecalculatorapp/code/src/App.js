import logo from './logo.svg';
import './App.css';
import { CalculateScore} from './components/CaclulateScore';

function App() {
  return (
    <div>
      <CalculateScore Name={"Rahul"}
        School={"Kendriya Vidyalaya"}
        total={430}
        goal={5}
      />
    </div>
  );
}

export default App;
