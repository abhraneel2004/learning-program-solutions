import logo from './logo.svg';
import './App.css';
import { CohortsData} from './Cohort'
import CohortDetails from './CohortDetails'; 

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Cohorts Dashboard</h1>
      <div className="cohorts-container">
        {CohortsData.map(cohort => 
          <CohortDetails key={cohort.cohortCode} cohort={cohort} />
        )}
      </div>
    </div>
  );
}

export default App;
