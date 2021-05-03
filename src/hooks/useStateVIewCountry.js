import { useState, useEffect } from 'react';


const useInitialState = (API) => {
  const [countries, setCountries] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setCountries(data))
  }, [API]);
  useEffect(() => {
    let limits = []
    if (countries.borders) {
      countries.borders.map(border => {
        fetch('https://restcountries.eu/rest/v2/alpha/' + border)
          .then(response => response.json())
          .then(data => limits.push(data))
          .then(()=>{
            setData({limits, ...countries })
            
          })
      })
    }

  }, [countries])
  return data;
};

export default useInitialState;