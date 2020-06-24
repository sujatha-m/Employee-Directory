import React from 'react'
import CheckBox from '../CheckBox/index'
import './style.css'

// function SearchBox (props) {
//   return (
//     <div className='seachbox col-8'>
//         <form className="form">
//       {/* <div className='col s6 '>
//         <div className='col s12 inputAndButton right-align '> */}
//           <input
//             onChange={props.handleInputChange}
//             value={props.value}
//             id='employees'
//             type='text'
//             name='search'
//             list='employee'
//             // className=' inputBox'
//             className="form-control mr-sm-2"
//             placeholder='Search by name'
//           />
//         {/* </div>
//         <div className='col m4'> */}
//           <button
//             type='submit'
//             value=''
//             // className=' btn z-depth-2 waves-effect  searchBttn'
//             className="btn my-2 my-sm-0"
//             onClick={props.handleSearch}
//           >
//             Search
//           </button>
//           </form>
//         {/* </div>
//       </div> */}
//     </div>
//   )
// }

function SearchBox (props) {
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
        <button type='submit'
            value=''
            // className=' btn z-depth-2 waves-effect  searchBttn'
            className="btn my-2 my-sm-0"
            onClick={props.handleSearch}
          >
            Search
        </button>
      </div>
      <CheckBox/>
    </div>
  )
}
export default SearchBox
