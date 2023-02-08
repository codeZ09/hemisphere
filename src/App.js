import { useState } from "react";

<<<<<<< HEAD
function App(){
  const[location, setlocation] = useState({latitude: 25});
  const[Message, setMessage] = useState({error: null});
=======
function App() {
  const [location, setlocation] = useState({ latitude: 25, longitude: null });
>>>>>>> 0c9d779c1cddc7d7da3de9bfeae7b222a01ed461
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
<<<<<<< HEAD
    (error) => setMessage({error: "Invalid location"}) 
=======
>>>>>>> 0c9d779c1cddc7d7da3de9bfeae7b222a01ed461
  }

  if(location.latitude && !Message.error){
    return <div>{location.latitude}</div>
  }
  if(!location.latitude && Message.error){
    return <div>{Message.error}</div>
  }
  else{
    <div>Loading....</div>
  }
  
}

export default App;
