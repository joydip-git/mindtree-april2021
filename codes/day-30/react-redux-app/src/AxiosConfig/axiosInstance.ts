import Axios from "axios";

//was using JSON-server
// export const axiosInstance = Axios.create({
//     baseURL: 'http://localhost:3001/contacts/',
//     timeoutErrorMessage: 'Request timed out'
//})

//using Node JS+ Express JS RESTful API server
export const axiosInstance = Axios.create({
    baseURL: 'http://localhost:3001/contactservice',
    timeoutErrorMessage: 'Request timed out'
})


