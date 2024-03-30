import React from 'react'
import setup from '../../Config/setup';
import { useDispatch } from 'react-redux';

function Search() {
    // const data_store = useSelector((state) => state[setup.prefix]);
    // const data_store = useSelector((state) => state[setup.prefix]);
    setup.dispatch = useDispatch();
    const { fetch_all_data, set_search_key } = setup.actions;
 
    return (
        <>
            <div className="search">
                <input
                    onKeyUp={(e) => {set_search_key(e.target.value); fetch_all_data();}}
                    type="text"
                    className="form-control border"
                    placeholder="Search..."
                ></input>
            </div>
        </>
    )
}

export default Search