import Axios from 'axios';

export const registerUser = async(name, email, password)=> {
    const data = {
        name: name,
        email: email,
        password: password
    }
    console.log(data);
    const result = {statusResponse: true, error: null}
    try {
        await Axios.post('http://localhost:3001/register', data)
    } catch (error) {
        result.error = 'This email is already registered.'
    }
    return result;
}

// metodo para salir de la libreria?