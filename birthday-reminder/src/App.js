import { useState } from 'react';

import { data } from './components/data';
import BirthdayCard from './components/birthday-card';

import './App.css';

const App = () => {

  const [person, setPerson] = useState(data);

  return (
    <div className="App">
      <h2>{person.length} birthdays today</h2>
      {
        person.map((people) => {
          return (<BirthdayCard key={people.id} {...people} />);
        })
      }
      <button type="button" className="btn" onClick={() => setPerson([])} >Close All</button>
    </div>
  );
}

export default App;