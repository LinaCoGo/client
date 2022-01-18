import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Overlay } from 'react-native-elements/dist/overlay/Overlay'

export default function Loading({ isVisible, text }) {
    return (
        <Overlay
            isVisible={isVisible}
            windowBackgroundColor='rgba(0,0,0,.5)'
            overlayBackgroundColor='transparent'
            overlayStyle={styles.overlay}
        />
    )
}

const styles = StyleSheet.create({
    overlay: {
        height: 100,
        width: 200,
        backgroundColor: '#fff',
        borderColor: '#442484',
        boderWidth: 2,
        borderRadius: 10
    }
})
