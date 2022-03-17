import React from 'react';
import {useSearchParams} from 'react-router-dom'

function Search(){

    let [searchParams, setSearchParams] = useSearchParams();
 
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
