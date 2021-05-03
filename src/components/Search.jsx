import React, {useState } from 'react';

const Search = (props) => {

    const [data, setData] = useState({
        search: ''
    })

    const handleInputChange = (event) => {

        console.log(event.target.name)
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.api("https://restcountries.eu/rest/v2/name/" + data.search);
    }
    const orderRegion = (region) => {   
        props.api("https://restcountries.eu/rest/v2/region/" + region);
    }

    return (
        <div className="container">
            <div className="row p-4">
                <div className="col-md-6">
                    <form className="example" onSubmit={handleSubmit}>
                        <div className="form-group row text-center">

                            <input type="text" className="form-control col-md-10 col-10" placeholder="Search.." name="search"
                                onChange={handleInputChange}
                            />
                            <button type="submit" className="btn btn-primary col-2" ><i className="fa fa-search"></i></button>

                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <div className="dropdown float-right">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        >
                            Filter By Region
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button className="dropdown-item" onClick={() => orderRegion('Africa')}>Africa</button>
                            <button className="dropdown-item" onClick={() => orderRegion('Americas')}>America</button>
                            <button className="dropdown-item" onClick={() => orderRegion('Asia')}>Asia</button>
                            <button className="dropdown-item" onClick={() => orderRegion('Europe')}>Europe</button>
                            <button className="dropdown-item" onClick={() => orderRegion('Oceania')}>Oceania</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>);

};

export default Search;


