
import './App.scss';
import team from "./data/employee";

import TicketTracker from "./Container/TicketTracker";


const App = () => {
  return (
    <div className="app">
      <header className="ticket">
        <h1 className="ticket__heading">Ticket Tracker</h1>
        <main className="ticket__card">
          <TicketTracker EmployeeArr={team}/>
        </main>
      </header>
    </div>
  );
}

export default App;
