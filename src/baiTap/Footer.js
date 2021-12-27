import React from 'react'
import { View, TextInput, Image } from 'react-native'

const Footer = () => {
    return(
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput placeholder="Give your opinion"
                    style={{
                        borderRadius: 10,
                        backgroundColor: '#FAFAFA',
                        width: ' 40%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 0,
                        paddingVertical: 5,
                        paddingHorizontal: 8
                    }}></TextInput>
                <View style={{ flex: 1 }}></View>
                <Image resizeMode='contain'
                    source={require('../anh/frame69.png')} />
            </View >
            <Image source={require('../anh/homeIndicator.png')}
                resizeMode="contain" />
        </View>
    )
}

export default Footer