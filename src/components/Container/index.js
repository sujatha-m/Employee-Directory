import API from '../../utils/API';
import React, { Component } from 'react';
import SearchBox from '../SearchBox/index'
import TableData from '../TableData/index'
import Header from '../Header/index';
import Footer from '../Footer/index';
import './style.css'

class Container extends Component {
    //setting the component's initial state
    //search starts as an empty string
    state = {
        search: '',
        employess:[],
        filteredEmployees:[],
        order:'asc'
    }

    // this is the initialization, what do you want the page to display when page it's first loaded
    componentDidMount(){
        API.getEmployees().then(res => this.setState({
            employees: res.data.results,
            filteredEmployees: res.data.results
        })).catch(err => console.log(err))
  
    }

     //API call triggered when page it's refreshed and  when application it's loaded 
     employeeSearch = () => {
        API.getUsers()
            .then(res => this.setState({

                //change their both states to hold all the data from the API call(all employess) and will be passed down trough props like that
                //employee will remain the same and filteredEmployes will be changed and passed down during application's life. Employee will always hold all employess.
                filteredEmployees: res.data.results,
                employees: res.data.results
            }))
            .catch(err => console.log(err))
    }

    //when button search it's clicked
    handleSearch = event => {
        event.preventDefault();
        if (!this.state.search) {
            alert("Enter a name")
        }
        const { employees, search } = this.state;

        //filters the object looking for the value that matches the value entered in the input box by the user  (search.this.state)
        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().includes(search.toLowerCase()));

        this.setState({
            filteredEmployees
        });
    }

    //when input is changing it will dynamically show the associates names that match in the screen
    handleInputChange = event => {
        const employees = this.state.employees;
        const UserInput = event.target.value;
        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) !== -1 )
        this.setState({
            //change the state of  filteredEmployes now it holds all the employes that matches users
            // search and will be passed down in this state
            filteredEmployees,
        });
    };

    sortByFirstName = () => {
        const filtereds = this.state.filteredEmployees
        //if(this.state.order === "asc"){
            const sorteds = filtereds.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
            //console.log(sorteds)

            this.setState({
                filteredEmployees: sorteds
            })
         //} else {
        //     const sorteds = filtereds.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
        //     //console.log(sorteds)

        //     this.setState({
        //         filteredEmployees: sorteds
        //     })
        // }
    }

    sortByAge = () => {
        const filtereds = this.state.filteredEmployees
        const sorteds = filtereds.sort((a, b) => (a.dob.age < b.dob.age) ? -1 : 1)
        //console.log(sorteds)
        this.setState({
            filteredEmployees: sorteds
        })  
    }

    invokeDropDownCBs = (val) => {
        if(val === 'FirstName') {
            this.sortByFirstName()
        } else if(val === 'Age') {
                this.sortByAge()
        } else if(val === 'Male') {

        } else if(val === 'Female') {

        }
    }

    render() {

        return (
            <div>
                <Header/>
                <SearchBox
                    employee={this.state.employees}
                    handleSearch={this.handleSearch}
                    invokeDropDownCBs={this.invokeDropDownCBs}
                    handleInputChange={this.handleInputChange} />
                <TableData results={this.state.filteredEmployees} 
                    />
                <Footer/>
            </div >
        )
    }
}

export default Container