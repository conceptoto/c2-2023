/*import { Input } from 'reactstrap';*/
import { useState, useRef } from 'react';
import './App.css';
/*import axios from 'axios'*/

function App() {
  const [info, setInfo] = useState('')
  const [IP, setIP] = useState('')
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  const Input = {
    "ip": "161.185.160.93",
    "city": "New York City",
    "region": "New York",
    "country": "US",
    "loc": "40.7143,-74.0060",
    "org": "AS22252 The City of New York",
    "postal": "10004",
    "timezone": "America/New_York",
    "readme": "https://ipinfo.io/missingauth"
  }

  function verificarIP(IP) {
    var octetos = IP.split('.');
    
    for (var i = 0; i < octetos.length; i++) {
      var octeto = parseInt(octetos[i]);
      
      if (typeof octeto === 'string') return 'false'
      if (isNaN(octeto) || octeto < 0 || octeto > 255 || octetos.length !== 4) {
        return false;
      }
    }    
    return true;
  }

  const handleInputChange = (event) => {
    const ip = event.target.value;
    setIP(ip);
    setIsButtonDisabled(!verificarIP(ip))
  }

  
  /*function handleSearchIP(e){
  axios.get("https://ipinfo.io/"+IPRef.current.value+"/geo").then(res => {
    res.data.results
  })
  } /// LA PAG CANCELA LA PETICION, NI IDEA */ 

  const getInfo = () => {
    setInfo(Input) //sin axios
  }

  return (
    
      <div>      
          <div>
              <input type="text" onChange={handleInputChange} />
              <button className="button-2" onClick={getInfo} disabled={isButtonDisabled}>Buscar</button>
          </div>
          {(
              isButtonDisabled && (
                <div>
                  <p class='alert'>El formato de la IP no es correcto</p>
                </div>)
              )}
          {info && (
              <div>
                  <p>IP: {info.ip}</p>
                  <p>City: {info.city}</p>
                  <p>Region: {info.region}</p>
                  <p>Country: {info.country}</p>
                  <p>Location: {info.loc}</p>
                  <p>Organization: {info.org}</p>
                  <p>Postal Code: {info.postal}</p>
                  <p>Timezone: {info.timezone}</p>
                  </div>
          )}
      </div>
  );
}


export default App;
