import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import { StyleSheet, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Profile from '../Profile';
import Loading from '../../components/Loading';

import Axios from 'axios';

import UserGuest from './UserGuest';
import UserLogged from './UserLogged';


export default function Account() {

    const { register, handleSubmit } = useForm();
    const [isRegistered, setIsRegistered] = useState(false);

    const onSubmit = (data)=> {
    
        Axios.post('http://localhost:3001/register', data).then(()=> {
            alert('Successful insert');
        });
        console.log(data);
        setIsRegistered(!isRegistered);
    }

    if(isRegistered == null){
        return <Loading isVisible={true} text='Loading...'/>
    }


    return (
        <div>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
            <Text>Your name</Text>
            <input {...register('name')} 
                placeholder='Enter your name'
            />
             <Text>Your email address</Text>
            <input {...register('email')} 
                placeholder='email@address.com'
                type='email'
            />
            <Text>Password</Text>
            <input {...register('password')} 
                 placeholder='Password'
                type='current-password'
            />
        <input type="submit" />
      </form> */}
      {isRegistered ? <UserLogged/> : <UserGuest/>}
    </div>
    )
}


