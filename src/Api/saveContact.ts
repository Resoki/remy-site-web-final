import axios from 'axios';


export const saveContact = (data: any)=>{
    return axios.post('/post/contact', data)
            .then((response)=>{
                return response.data; 
            })
}