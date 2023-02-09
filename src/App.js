import { useState } from "react";

function App() {
  const [location, setlocation] = useState({ latitude: null, errorM: " " });

  navigator.geolocation.getCurrentPosition(
    (position) =>
      setlocation({
        latitude: position.coords.latitude,
      }),
    (error) => setlocation({ errorM: error.message })
  );

  if (location.latitude && !location.errorM) {
    return <div>{location.latitude}</div>;
  } else if (!location.latitude && location.errorM) {
    return <div>{location.errorM}</div>;
  } else {
    return <div>Loading.....</div>;
  }
}

export default App;
