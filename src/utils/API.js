import axios from 'axios'
const BASEURL = 'https://randomuser.me/api/?results=100&nat=us,dk,fr,gb'

export default {
    //Gets all employees table data from randomuser
    getEmployees: function () {
        return axios.get(BASEURL)
    }
}