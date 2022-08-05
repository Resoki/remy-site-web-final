import axios from 'axios';


export const saveContact = (data: any)=>axios.post('/post/contact', data)
            .then((response)=>response.data);
