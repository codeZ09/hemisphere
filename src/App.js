import {useState} from 'react';

function App(){
  const[location, setlocation] = useState({latitude: 25});
  const[Message, setMessage] = useState({error: null});
  {
    navigator.geolocation.getCurrentPosition(
    (position) => setlocation({latitude:position.coords.latitude})
    );
    (error) => setMessage({error: "Invalid location"}) 
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