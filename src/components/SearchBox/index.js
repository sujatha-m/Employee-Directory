import React from 'react'
import './style.css'

function SearchBox (props){
    return(
        <div className="col s6 ">
                        <div className="col s6 inputAndButton right-align ">
                            <input
                                onChange={props.handleInputChange}
                                value={props.value}
                                id="employees"
                                type="text"
                                name="search"
                                list="employee"
                                className=" inputBox  "
                                placeholder="Search by name" />
                        </div>
                        <div className="col m4">
                            <button
                                type="submit"
                                value=""
                                className=" btn z-depth-2 waves-effect  searchBttn"
                                onClick={props.handleSearch} >Search</button>
                        </div>
                    </div>
    )
}

export default SearchBox