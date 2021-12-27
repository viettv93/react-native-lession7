import React from "react"
import { Image, Text, View, FlatList } from "react-native"
import Header  from "./Header"
import Footer from "./Footer"

const array = [
    { image: require('../anh/ellipse.png'), name: 'Vicky', number: 180, image2: require('../anh/icon2.png'), tille: "Speak to me often. Even if I don't understand your words, I feel your voice speaking to me. 👉", timeOnline: '15 Minutes ago · Reply' },
    { image: require('../anh/ellipse2.png'), name: 'Tim Noyes', number: 186, image2: require('../anh/icon2.png'), tille: "Take care of me when I get old, for you, too, will grow old. 😋 😋", timeOnline: '30 Minutes ago · Reply' },
    { image: require('../anh/ellipse3.png'), name: 'Bill Defoe', number: 686, image2: require('../anh/icon2.png'), tille: "Before you take me home, please remember that my life is likely to last ten to fifteen years. If you abandon me, it will be my greatest pain." }]
const Baitap = () => {
    const renderItem1 = ({ item, index }) => {
        return (
            <View style={{ marginTop: 15, flexDirection: 'row', backgroundColor: 'white' }}>
                <Image source={item.image} />
                <View style={{ flex: 1, marginLeft: 8 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ flex: 1, fontWeight: '600', color: 'black' }}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text>{item.number}</Text>
                            <Image style={{marginLeft: 5}} source={require('../anh/icon2.png')} />
                        </View>
                    </View>
                    <View style={{marginTop: 6}}>
                        <Text style={{color: 'black'}} numberOfLines={3} ellipsizeMode="tail">{item.tille}</Text>
                    </View>
                    <View style={{marginTop:5}}>
                        <Text>{item.timeOnline}</Text>
                    </View>
                </View>
            </View>
        )
    }

    const footerComponent = () => {
        return (
            <Footer/>
        )
    }
    const headerComponent = () => {
        return (
            <Header/>
        )
    }
    return (
        <View style={{ padding: 20, backgroundColor: 'white' }}>
            <FlatList
                ListHeaderComponent={headerComponent}
                ListFooterComponent={footerComponent}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={array}
                renderItem={renderItem1}>
            </FlatList>
        </View>
    )

}

export default Baitap