
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { size } from 'lodash';
import { useNavigation } from '@react-navigation/native';

import { validateEmail } from '../../utils/helpers';
import { registerUser } from '../../utils/actions';

export default function RegisterForm() {

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(defaultFormValues());
    const [errorName, setErrorName] = useState(''); 
    const [errorEmail, setErrorEmail] = useState(''); 
    const [errorPassword, setErrorPassword] = useState(''); 
    const [errorConfirm, setErrorConfirm] = useState('');    

    const navigation = useNavigation();
    
    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text})
    }

    const doRegisterUser = async() => {
        if (!validateData()) {
            return;
        }
        const result = await registerUser(formData.name, formData.email, formData.password);
        if (!result.statusResponse){
            setErrorEmail(result.error)
            return;
        } else {
            navigation.navigate('account')
        }
    }

    const validateData = () => {
        setErrorConfirm('');
        setErrorEmail('');
        setErrorName('');
        setErrorPassword('');

        let isValid=true;

        if(!formData.name) {
            setErrorName('You must enter a name.');
            isValid= false;
        }

        if(!validateEmail(formData.email)) {
            setErrorEmail('You must enter a valid email.');
            isValid = false;
        }

        if(size(formData.password) < 6){
            setErrorPassword('You must enter a password of at least 6 characters.');
            isValid = false;
        }

        if(formData.password !== formData.confirm) {
            setErrorConfirm('Your password and confirmed password must match.');
            isValid = false;
        }


        return isValid;
    }


    return (
        <View sytle={styles.form}>
            <form>
             <Input
                containerStyle={styles.input}
                placeholder='Enter your name...'
                onChange={(e)=> onChange(e,'name')}
                errorMessage={errorName}
                defaultValue={formData.name}
            />
            <Input
                containerStyle={styles.input}
                placeholder='Enter your email...'
                onChange={(e)=> onChange(e,'email')}
                keyboardType='email-address'
                errorMessage={errorEmail}
                defaultValue={formData.email}
            />
             <Input
                containerStyle={styles.input}
                placeholder='Enter your password...'
                password={true}
                secureTextEntry={!showPassword}
                onChange={(e)=> onChange(e,'password')}
                errorMessage={errorPassword}
                defaultValue={formData.password}
                rightIcon={<Icon
                    type='material-community'
                    name={showPassword ? 'eye-off-outline': 'eye-outline'}
                    iconStyle={styles.icon}
                    onPress={()=> { setShowPassword(!showPassword)}}
                />}
            />
            <Input
                containerStyle={styles.input}
                placeholder='Confirm your password...'
                password={true}
                secureTextEntry={!showPassword}
                onChange={(e)=> onChange(e,'confirm')}
                errorMessage={errorConfirm}
                defaultValue={formData.confirm}
                rightIcon={<Icon
                    type='material-community'
                    name={showPassword ? 'eye-off-outline': 'eye-outline'}
                    iconStyle={styles.icon}
                    onPress={()=> { setShowPassword(!showPassword)}}
                />}
            />
            <Button 
                title='Register New User'
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={()=>doRegisterUser()}
            />
            </form>
        </View>
    )
}

const defaultFormValues = ()=> {
    return {
        name : '',
        email : '',
        password : '',
        confirm: ''        
    }
}

const styles = StyleSheet.create({
    form: {
        marginTop: 30,
    },
    input: {
        width: '100%'
    },
    btnContainer: {
        marginTop: 20,
        width: '95%',
        alignSelf: 'center'
    },
    btn: {
        backgroundColor: '#442484'
    },
    icon: {
        color: '#c1c1c1'
    }
})
