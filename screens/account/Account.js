import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import Axios from 'axios';

export default function Account() {

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const { register, handleSubmit } = useForm();
    // const onSubmit = data => console.log(data);

    const onSubmit = (data)=> {
    
        Axios.post('http://localhost:3001/api/insert', data).then(()=> {
            alert('Successful insert');
        });
        console.log(data);
    }


    return (
        // <View>
        //     <Text>Login</Text>
        //     <hr/>
        //     <Text>Your name</Text>
        //     <TextInput
        //         placeholder='Name'
        //         leftIcon={{ type: 'font-awesome', name: 'id-card' }}
        //         onChangeText={(name)=> {setName(name)}}
        //     />
        //     <Text>Your email address</Text>
        //     <TextInput
        //         placeholder='email@address.com'
        //         leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        //         onChangeText={(email)=> {setEmail(email)}}
        //     />
        //     <Text>Password</Text>
        //     <TextInput
        //         placeholder='Password'
        //         leftIcon={{ type: 'font-awesome', name: 'lock' }}
        //         onChange={(password)=> {setPassword(password)}}
        //     />
        //     <hr/>
        //     <Button 
        //         title='Submit'
        //         type='submit'
        //         onPress={{submitUser}}
        //         /> 
        // </View>
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

