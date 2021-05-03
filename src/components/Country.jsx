import React from 'react';

import { Link} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';


const Country = (data) => (

    <div className="col-md-3 card p-4 mt-2">
        <div className="country-container-img">
            <img src={data.data.flag} alt="img not found" className="card-img-top img-responsive align-middle" />
            
        </div>

        <div className="text-left pt-4 card-body">
            <h4> <b>{data.data.name || <Skeleton />}</b></h4>
            <p><strong>Population:</strong>{new Intl.NumberFormat().format(data.data.population) || <Skeleton />}</p>
            <p><strong>Region:</strong>{data.data.region || <Skeleton />}</p>
            <p><strong>Capital:</strong>{data.data.capital || <Skeleton />}</p>
        </div>
        <div className="card-footer">
            
                <Link to={`/country/${data.data.alpha3Code}`}>
                    <button className="btn btn-secondary">Show!</button>
                </Link>
            
        </div>

    </div>

);

export default Country;