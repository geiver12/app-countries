import logo from './logo.svg';
import './App.css';
import Header from '../components/Header'
import Search from '../components/Search'
import Country from '../components/Country'


import useInitialState from '../hooks/useInitialState';
import { useState, useEffect } from 'react';


const API = 'https://restcountries.eu/rest/v2/all/';

function App() {
  const [api, setApi] = useState(API);
  const initialState = useInitialState(api);
  const [mode, setMode] = useState(true)
  const [classname, setClassname] = useState('App')
  useEffect(() => {
    if (mode)
      setClassname("App app-mode-dark")
    else
      setClassname("App")

  }, [mode])

  return (

    <div className={classname}>

      <Header setmode={setMode} mode={mode} />
      <Search api={setApi} />
      <div className="container">
        <div className="row">
          {initialState.length > 0 &&
            initialState.map((item, i) =>
              <Country key={i} data={item} />
            )
          }

        </div>
      </div>

    </div>
  );
}

export default App;
