import axios from "axios";

export default class UserAPI {
    static getUser(userName) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.get(`http://localhost:3001/users/${userName}`).catch(error => { throw error.response.status });
                resolve(response.data);
            }
            catch (error) {
                reject(error);
            }
        })
    }

    static updateUser(userName,passWord) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post(`http://localhost:3001/users/`,{
                    "id": userName,
                    "username": userName,
                    "password": passWord
                },).catch(error => { throw error.response.status });
                resolve(response.data);
            }
            catch (error) {
                reject(error);
            }
        })
    }
}