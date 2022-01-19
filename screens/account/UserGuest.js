import React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Loading from '../../components/Loading';

export default function UserGuest() {

    const navigation = useNavigation();

    return (
        <ScrollView
            centerContent
            style={styles.viewBody}
        >
            <Image
                source={require('../../assets/logo-temporal-drizz.png')}
                resizeMode='contain'
                style={styles.image}
            />
            <Text style={styles.title}>Check your profile on Drizz</Text>
            <Text style={styles.description}>
            Show your collections to other collectors
            </Text>
            <Button
                buttonStyle={styles.button}
                title='Go to profile'
                onPress={()=> 
                navigation.navigate('login')
                }>
            </Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        marginHorizontal: 30
    },
    image: {
        height: 300,
        width: '100%',
        marginBottom: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 19,
        marginVertical: 10,
        textAlign: 'center'
    },
    description: {
        textAlign: 'justify',
        marginBottom: 20,
        color: '#a65273'
    },
    button: {
        backgroundColor: '#442484'
    }
})