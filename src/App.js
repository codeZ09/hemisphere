import { useState , useEffect } from "react";
import HemisDisplay from "./hemisDisplay";
import './hemisphere.css';
function App() {
 
  const [location, setlocation] = useState({ latitude: 25, errorMessage: " " });

useEffect(() => {
  navigator.geolocation.getCurrentPosition(
    (position) =>
      setlocation({
        latitude: position.coords.latitude,
      }),
    (error) => setlocation({ errorMessage: error.message })
  );
    }, []);
 
      

  if (location.latitude && !location.errorMessage) {
        return <div><HemisDisplay latitude={location.latitude}/></div>;
      } 
      else if (!location.latitude && location.errorMessage) {
        return <div>{location.errorMessage}</div>;
      } 
      else {
        return <div>Loading.....</div>;
}

}

export default App
