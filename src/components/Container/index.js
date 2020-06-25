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
        employees:[],
        filteredEmployees:[],
        order:'asc'
    }

    // initialization function which extracts the employees directory from randomuser API 
    // when page is first loaded
    componentDidMount(){
        API.getEmployees().then(res => this.setState({
            employees: res.data.results,
            filteredEmployees: res.data.results
        })).catch(err => console.log(err))
  
    }

     //API call triggered when page is refreshed and  when application is loaded 
     employeeSearch = () => {
        API.getUsers()
            .then(res => this.setState({

                //change their both states to hold all the data from the API call(all employees) and will be passed down trough props like that
                //employee will remain the same and filteredEmployes will be changed and passed down during application's life. Employee will always hold all employess.
                filteredEmployees: res.data.results,
                employees: res.data.results
            }))
            .catch(err => console.log(err))
    }

    //function that handles the employees search when search button is clicked
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

    //when input is changing it will dynamically show the employees names that match in the screen
    handleInputChange = event => {
        const employees = this.state.employees;
        const UserInput = event.target.value;
        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) !== -1 )
        this.setState({
            //change the state of  filteredEmployes now it holds all the employes that matches users
            // search and will be passed down in this state
            filteredEmployees
        });
    };

    //function that sorts the selected firstname value from drop down menu and
    //sets the filteredEmployees state to sorted array to be displayed
    //in the table
    sortByFirstName = () => {
        const filtereds = this.state.filteredEmployees
        const sorteds = filtereds.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
        //console.log(sorteds)

        this.setState({
            filteredEmployees: sorteds
        })
    }

    //function that sorts the selected age value from drop down menu and
    //sets the filteredEmployees state to sorted array to be displayed
    //in the table
    sortByAge = () => {
        const filtereds = this.state.filteredEmployees
        const sorteds = filtereds.sort((a, b) => (a.dob.age < b.dob.age) ? -1 : 1)
        //console.log(sorteds)
        this.setState({
            filteredEmployees: sorteds
        })  
    }

    //function that filters the selected gender value from drop down menu and
    //sets the filteredEmployees state to filtered array to be displayed
    //in the table
    filterByGender = (gender) => {
        console.log(gender.toLowerCase())
        const filtereds = this.state.filteredEmployees
        //filters the object looking for the value that matches the value selected
        //in the dropdown menu
        const sorteds = filtereds.filter(a => a.gender.toLowerCase() === gender.toLowerCase())
        this.setState({
            filteredEmployees: sorteds
        })
    }

    /* callback function passed to 'search' child component to
     * assist dropdown menu filter and sort functionalities
     */ 
    invokeDropDownCBs = (val) => {
        if(val === 'FirstName') {
            this.sortByFirstName()
        } else if(val === 'Age') {
                this.sortByAge()
        } else if((val === 'Male') || (val === 'Female')) {
            this.filterByGender(val)
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