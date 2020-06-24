import React from 'react'
import './style.css'

function TableData(props){
    return (
        <table className = 'tableEmployee'>
            <thead>
                <tr>
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
                        
                        <td>{result.name.first + " " + result.name.last}  </td>

                        <td>{result.dob.age}</td>

                        <td>{result.cell}</td>
                        <td className="email"><a href={result.email}>{result.email}</a></td>
                        <td>{result.gender}</td>
                        <td>{result.nat}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableData