import React , { useState }from 'react'
import SortDropDown from '../Sort/index'
import FilterDropDown from '../Filter/index'

import './style.css'

/* component to handle searching of employee names from the employee directory
  * also holds the child components for sorting and filter dropdown menu of employee
  * fields
 */
function SearchBox (props) {
  const [val,setValue] = useState('');

  /* function to handle dropdown value selected by user
   * and invoke the callback function in Container component
   * to handle sorting and filtering of employee fields based on value
   */
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
      />&nbsp;&nbsp;&nbsp;
      <FilterDropDown
      handleSelect = {handleSelect}
      val = {val}
      />
    </div>
  )
}
export default SearchBox
