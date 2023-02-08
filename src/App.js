import { useState } from "react";

function App() {
  const [location, setlocation] = useState({ latitude: 25, longitude: null });
  {
    navigator.geolocation.getCurrentPosition((position) =>
      setlocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    );
    return (
      <>
        <div>{location.latitude}</div>
        <div>{location.longitude}</div>
      </>
    );
  }
}

export default App;
