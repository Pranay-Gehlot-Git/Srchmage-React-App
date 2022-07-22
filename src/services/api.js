import axios from 'axios';


const API_KEY = '24151858-bb3211946b7cf69a55f16c96a';
const URL = 'https://pixabay.com/api/';

export const getImages = (text, count) => {
    try{
        const data = axios.get(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safesearch=true`)
        return data;
    }catch(error)
    {
        console.log(error);
    }

    }
