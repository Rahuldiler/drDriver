import axios from "axios"
const URL = process.env.API_TEST_APP_URL
class ApiService
{
    async UserRegister(data)
    {
        return axios.post(URL + "user/add", {
            name: data.name,
            driver_type: data.driver_type,
            contact_number:data.contact_number,
            password:data.password,
            dob: data.dob
        });
    }
}

export default ApiService()