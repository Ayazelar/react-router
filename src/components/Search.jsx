import React from 'react';
import {useSearchParams,useLocation} from 'react-router-dom'

function Search(){

    let [searchParams, setSearchParams] = useSearchParams();
    let test = useLocation;
    console.log(test);
    return(
        <div>
            <h1>Search Example</h1><br />

                <input 
                value={searchParams.get("car") || ""}
                type="text" 
                placeholder='Some car name'
                onChange={(event) => {
                    let car = event.target.value;
                    if (car) {
                      setSearchParams({ car });
                    } else {
                      setSearchParams({});
                    }
                  }}
                />
                <h3>Value: {searchParams.get("car")|| 'Empty'}</h3>
        </div>
    )
}

export default Search;
