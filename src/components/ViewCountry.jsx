import React from 'react';
import useInitialState from '../hooks/useStateVIewCountry';
import { useState,useEffect } from 'react';

import Header from '../components/Header'
import Skeleton from "react-loading-skeleton";
import { Link } from 'react-router-dom';


var API = 'https://restcountries.eu/rest/v2/all/'

const ViewCountry = (props) => {

    const { code } = props.match.params;
    API = 'https://restcountries.eu/rest/v2/alpha/' + code;
    const [api, setApi] = useState(API);
    const data = useInitialState(api);
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
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-left py-4 pt-4">
                        <Link to={`/`}>
                            <button className="btn btn-danger">Return!</button>
                        </Link>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-6">
                        {
                            data.flag ? (<img src={data.flag} alt="img not found" className="card-img-top align-middle" />) :
                                <Skeleton count={15} />
                        }
                    </div>
                    <div className="col-md-6  d-flex align-items-center">
                        <div className="text-left p-4 ">
                            <h3>{data.name}</h3>

                            <div className="row">
                                <div className="col-md-6">
                                    <p><b>NativeName:</b>{data.nativeName || <Skeleton />} </p>
                                    <p><b>Population:</b>{new Intl.NumberFormat().format(data.population) || <Skeleton />} </p>
                                    <p><b>Region:</b>{data.region || <Skeleton />} </p>
                                    <p><b>Sub Region:</b>{data.subregion || <Skeleton />} </p>
                                    <p><b>Capital:</b>{data.capital || <Skeleton />} </p>
                                </div>
                                <div className="col-md-6">
                                    <p><b>Top lvl Domain:</b>{data.topLevelDomain || <Skeleton />} </p>
                                    <p><b>Currencies:</b>{data.currencies && (data.currencies[0].name) || <Skeleton />} </p>
                                    <p><b>Lenguages:</b>{data.languages && (data.languages.map((len, i) => {
                                        if (i === data.languages.length - 1)
                                            return <span key={i}>{len.name || <Skeleton />}</span>
                                        else
                                            return <span key={i}>{len.name || <Skeleton />},</span>
                                    }
                                    ))} </p>
                                    <p><strong>Area:</strong>{new Intl.NumberFormat().format(data.area) || <Skeleton />} </p>
                                </div>

                            </div>

                            <p><b>Border Countries: </b>
                                {
                                    data.limits && (data.limits.map((border, i) => {
                                        return <span key={i} className="border">{border.name || <Skeleton />}</span>
                                    }
                                    ))}
                            </p>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default ViewCountry;