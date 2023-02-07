import {useState} from 'react';

function App(){
  const[location, setlocation] = useState({latitude: 25});
  {
    navigator.geolocation.getCurrentPosition(
    (position) => setlocation({latitude:position.coords.latitude})
    );
    return(
      <div>{location.latitude}</div>
    )
  }
}

export default App;