import axios from "axios";
import qs from "qs";
axios.defaults.baseURL = 'http://localhost:3333';

const axiosRq = async (type = 'POST', url = '', data = {}) => {
    if (type === 'GET') {
        return await axios.get(url, { params: data })
            .then(res => {
                return Promise.resolve(res.data);
            }).catch(err=>{
                return Promise.reject(err);
            })
    } else if (type === 'POST') {
        return await axios.post(url, qs.stringify(data))
            .then(res => {
                return Promise.resolve(res.data);
            }).catch(err=>{
                return Promise.reject(err);
            })
    }
} 

export default axiosRq;