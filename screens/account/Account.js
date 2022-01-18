import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import Axios from 'axios';

export default function Account() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data)=> {
    
        Axios.post('http://localhost:3001/api/insert', data).then(()=> {
            alert('Successful insert');
        });
        console.log(data);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <Text>Your name</Text>
        <input {...register('name')} 
            placeholder='Enter your name'
        />
         <Text>Your email address</Text>
        <input {...register('email')} 
            placeholder='email@address.com'
        />
         <Text>Password</Text>
        <input {...register('password')} 
            placeholder='Password'
        />
        <input type="submit" />
      </form>
    )
}

