import { useState } from "react";


function App() {
  const [location, setlocation] = useState({ latitude: 25, longitude: null });
  const[info, setinfo] = useState({error: null});
  {
    navigator.geolocation.getCurrentPosition((position) =>
      setlocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }),
    );
    setinfo({error: "User Geolocation Denied"})
    return (
      <>
        <div>{location.latitude}</div>
        <div>{location.longitude}</div>
        <div>{info}</div>
      </>
    );    
  }
  
}

export default App;
