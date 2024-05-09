import axios from 'axios';

class AxiosAPI {
    LOGIN_URL = "http://localhost:8080/viewstudent";
    StudentAdd = "http://localhost:8080/savestud";

    viewStudent() {
        return axios.get(this.LOGIN_URL); // Added return statement
    }

    studentAdd(student) {
        return axios.post(this.StudentAdd, student);
    }
}

export default new AxiosAPI();
