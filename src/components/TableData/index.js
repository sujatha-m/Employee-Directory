import React from 'react'
import './style.css'

/* Table component which holds the employee fields to be displayed from 
 * the directory
*/
function TableData(props){
    return (
        <table className = 'tableEmployee col-12'>
            <thead>
                <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Age</th>
                 <th>Phone</th>
                 <th>E-mail</th>
                 <th>Gender</th>
                 <th>Country</th>
                </tr>
            </thead>

            <tbody className= "">
                {props.results.map(result => (
                    <tr className="table" key={result.login.uuid}>                 
                        <td> <img className="
                        "src={result.picture.medium} alt="" /></td>                 
                        <td data-th="Name" className="name-cell align-middle">{result.name.first + " " + result.name.last}  </td>
                        <td className="align-middle">{result.dob.age}</td>
                        <td className="align-middle">{result.cell}</td>
                        <td className="align-middle"><a href={result.email}>{result.email}</a></td>
                        <td className="align-middle">{result.gender}</td>
                        <td className="align-middle">{result.nat}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableData