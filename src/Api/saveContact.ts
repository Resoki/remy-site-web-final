import axios from 'axios';

interface typeDataContact {
    name: string;
    email: string;
    message: string;
  }

  
export const saveContact = (data: typeDataContact)=>axios.post('/post/contact', data)
            .then((response)=>response.data)
            .catch((err)=> console.log(err));
