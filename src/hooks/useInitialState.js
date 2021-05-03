import { useState, useEffect } from 'react';


const useInitialState = (API) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => { setCountries(data);console.log(data) })
  }, [API]);
  return countries;
};

export default useInitialState;