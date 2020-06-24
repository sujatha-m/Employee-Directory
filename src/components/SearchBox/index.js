import React , { useState }from 'react'
import SortDropDown from '../Sort/index'
import FilterDropDown from '../Filter/index'

import './style.css'

function SearchBox (props) {
  const [val,setValue] = useState('');
  const handleSelect = (e)=>{
    console.log(e);
    setValue(e)
    props.invokeDropDownCBs(e)
  }
  
  return (
    <div className='input-group mb-3'>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        id='employees'
        type='text'
        name='search'
        list='employee'
        // className=' inputBox'
        className='form-control mr-sm-2'
        placeholder='Search by name'
      />

      <div className='input-group-append'>
        <button
          type='submit'
          value=''
          // className=' btn z-depth-2 waves-effect  searchBttn'
          className='btn my-2 my-sm-0'
          onClick={props.handleSearch}
        >
          Search
        </button>
      </div>
      <SortDropDown
      handleSelect = {handleSelect}
      val = {val}
      />
      <FilterDropDown
      handleSelect = {handleSelect}
      val = {val}
      />
    </div>
  )
}
export default SearchBox
