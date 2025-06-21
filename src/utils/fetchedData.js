import axios from 'axios';


const fectedData  = async ()=>{
    const url = import.meta.env.VITE_REACT_APP_API_URL
    
    try {
        const response = await axios.get(`${url}/api/products`)
        if(response.data){
            return response.data
          }
        //   console.log(response.data);
        //   console.log();
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
        
    }
}


export default fectedData