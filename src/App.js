import { useState } from 'react';
import { getHeroes, getHeroByName } from './service/apiService';


function App() {
  let [name, setName] = useState("");

  return (
    <div>
      <form onSubmit={(event) => {
          event.preventDefault();
          getHeroByName({name});
        }} >
        <input type="text" value={name} 
        onChange={(event) => {
          setName(event.target.value);
        }}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
