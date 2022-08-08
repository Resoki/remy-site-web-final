import axios, { AxiosPromise, AxiosResponse, AxiosStatic } from 'axios';

interface typeDataContact {
    name: string;
    email: string;
    message: string;
}


export const saveContact = async (data: typeDataContact): Promise<void>  => {
    await axios.post('/post/contact', data)
            .then((response)=>console.log(response.data))
            .catch((err)=> console.log(err));
};
