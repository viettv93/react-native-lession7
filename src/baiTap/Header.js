import React from "react"
import { View, Text, TouchableOpacity, Image } from 'react-native'

const Header = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
                <Image source={require('../anh/icon3.png')}
                    resizeMode='center' />
                <View style={{ flex: 1 }}></View>
                <Image
                    style={{ marginRight: 40 }}
                    resizeMode='contain'
                    source={require('../anh/union.png')} />
                <Image
                    resizeMode="contain"
                    source={require('../anh/icon.png')} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
                <Image resizeMode="contain"
                    source={require('../anh/ellipse.png')} />
                <View style={{ justifyContent: 'center', padding: 5 }}>
                    <Text style={{ fontSize: 13, color: '#000000', fontWeight: '500' }}>Cyarine</Text>
                    <Text style={{ fontSize: 12, color: 'rgba(0, 0, 0, 0.4)', fontWeight: '400' }}>Golden Retriever · Mobile </Text>
                </View>
                <View style={{ flex: 1 }}></View>
                <TouchableOpacity style={{ backgroundColor: '#FA6650', borderRadius: 5, width: '19%', height: '60%', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 12, fontWeight: '400', padding: 5 }}>Follow</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 15, color: 'rgba(0, 0, 0, 0.4)', fontWeight: '400', marginBottom: 20 }}>Please be patient with me and give me some time to get to know me.</Text>
                <Image style={{ width: '100%' }}
                    resizeMode='cover'
                    source={require('../anh/rectangle.jpg')} />
                <Text style={{ fontSize: 15, color: '#rgba(0, 0, 0, 0.4)', fontWeight: '400', marginTop: 20, marginBottom: 20 }}>It tiger head, round head, hairy ears, ear tip is? Colored and droopy. Eyes big, round, like a bell. The tip of the nose was dark brown, like a chocolate bar. Large nostrils, wheezing when hot. The hair around the mouth is white, like long beside the beard, can have a man's taste! It likes to use sticky tongue licking our hands, that feeling wet, can be itchy! Its feet are plum shaped, long a thick layer of meat pad, sharp claws into the meat pad, start road not a sound.</Text>
                <Image resizeMode='cover' source={require('../anh/rectangle2.png')} style={{ width: '100%' }} />
                <Image resizeMode='cover' source={require('../anh/rectangle3.png')} style={{ width: '100%', marginBottom: 20, marginTop: 20 }} />
                <Text style={{ fontSize: 15, color: 'rgba(0, 0, 0, 0.4)', fontWeight: '400' }}>My family has a cute and clever dog, Mary.
                    It's fat, fat and lovely. Its yellow fur is very beautiful.
                    Mary's eyes were round like two topaz stones. Its legs are very long and it can run very fast. The tail, in particular, wagged to and fro when it saw me, as if to show affection to me.</Text>
                <Text style={{ fontSize: 15, color: 'rgba(0, 0, 0, 0.4)', fontWeight: '400', marginBottom: 20, marginTop: 20 }}>The dog had a very strange appearance, with a flat nose, a wide mouth, swaying ears, and a wrinkled forehead, but in a very orderly way. Many bigger dogs are a little afraid of him and hide from him. In fact, it is disgusting and kind. Every time I take it to the park or climb a mountain, passers-by point at it.
                    I thought, perhaps it was thinking to itself: I am very ugly, but I am very gentle.</Text>
                <TouchableOpacity style={{ backgroundColor: '#FA6650', borderRadius: 5, width: '100%', padding: 7, justifyContent: 'center', alignItems: 'center', height: '4%' }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '500' }}>Publish my article</Text>
                </TouchableOpacity>

            </View>
            <Text style={{ fontSize: 16, color: '#000000', fontWeight: '600', marginTop: 10, lineHeight: 21 }}>Message</Text>
        </View>
    )

}

export default Header