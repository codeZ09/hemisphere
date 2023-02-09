import { useState } from "react";

function App() {

  const [location, setlocation] = useState({ latitude: 25, errorMessage: " " });

  navigator.geolocation.getCurrentPosition(
    (position) =>
      setlocation({
        latitude: position.coords.latitude,
      }),
    (error) => setlocation({ errorMessage: error.message })
  );

  if (location.latitude && !location.errorMessage) {
        return <div>{location.latitude}</div>;
      } 
      else if (!location.latitude && location.errorMessage) {
        return <div>{location.errorMessage}</div>;
      } 
      else {
        return <div>Loading.....</div>;
}

}

export default App
