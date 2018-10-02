import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const BlockItem = (props) => {

    const itemText = (item) => (
        <View style={styles.itemTextContainer}>
            <Text style={styles.itemTextTitle}>
                {item.title}
            </Text>
            <Text style={styles.itemTextPrice}>
                $ {item.price}
            </Text>
        </View>
    )

    const itemImage = () => (
        <View>
            <Image
                resizeMode={"cover"}
                style={styles.itemImage}
                source={{uri: 'https://loremflickr.com/400/400/girl,brazil,dog'}}
            />
        </View>
    )

    const block = ({item, i}) => (
        <View style={styles.blockRow}>
            <TouchableOpacity
                onPress={() => alert('go to post')}
                style={{flex: 2}}
            >
                <View>
                    {itemImage()}
                    {itemText(item.blockOne)}
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => alert('go to post')}
                style={{flex: 2}}            
            >
                <View>
                    {itemImage()}
                    {itemText(item.blockTwo)}
                </View>
            </TouchableOpacity>
        </View>
    )

    return (
        <View>
            {block(props)}
        </View>
    )
} 

const styles = StyleSheet.create({
    blockRow: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5,
        justifyContent: 'space-between'
    }, 
    itemImage: {
        width: '100%',
        height: 200,
    },
    itemTextContainer: {
        padding: 10,
        borderLeftWidth: 4,
        borderLeftColor: '#FF6444',
    },
    itemTextTitle: {
        fontFamily: 'Roboto-Black',
        color: '#4C4C4C',
        marginBottom: 5,
    },
    itemTextPrice: {
        fontFamily: 'Roboto-Black',
        color: '#00ADA9',
        marginBottom: 5,
    }
})

export default BlockItem;